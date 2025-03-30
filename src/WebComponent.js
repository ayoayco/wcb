/**
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Ayo Ayco <https://ayo.ayco.io>
 */

import {
  createElement,
  getKebabCase,
  getCamelCase,
  serialize,
  deserialize,
} from './utils/index.js'

/**
 * A minimal base class to reduce the complexity of creating reactive custom elements
 * @see https://WebComponent.io
 */
export class WebComponent extends HTMLElement {
  #host
  #prevDOM
  #props
  #typeMap = {}

  /**
   * Blueprint for the Proxy props
   * @typedef {{[name: string]: any}} PropStringMap
   * @type {PropStringMap}
   */
  static props

  // TODO: support array of styles
  static styles

  /**
   * Read-only string property that represents how the component will be rendered
   * @returns {string | any}
   * @see https://www.npmjs.com/package/web-component-base#template-vs-render
   */
  get template() {
    return ''
  }

  /**
   * Shadow root initialization options
   * @type {ShadowRootInit}
   */
  static shadowRootInit

  /**
   * Read-only property containing camelCase counterparts of observed attributes.
   * @see https://www.npmjs.com/package/web-component-base#prop-access
   * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
   * @type {PropStringMap}
   */
  get props() {
    return this.#props
  }

  /**
   * Triggered after view is initialized
   */
  afterViewInit() {}

  /**
   * Triggered when the component is connected to the DOM
   */
  onInit() {}

  /**
   * Triggered when the component is disconnected from the DOM
   */
  onDestroy() {}

  /**
   * Triggered when an attribute value changes
   * @typedef {{
   *  property: string,
   *  previousValue: any,
   *  currentValue: any
   * }} Changes
   * @param {Changes} changes
   */
  onChanges(changes) {}

  constructor() {
    super()
    this.#initializeProps()
    this.#initializeHost()
  }

  static get observedAttributes() {
    const propKeys = this.props
      ? Object.keys(this.props).map((camelCase) => getKebabCase(camelCase))
      : []

    return propKeys
  }

  connectedCallback() {
    this.onInit()
    this.render()
    this.afterViewInit()
  }

  disconnectedCallback() {
    this.onDestroy()
  }

  attributeChangedCallback(property, previousValue, currentValue) {
    const camelCaps = getCamelCase(property)

    if (previousValue !== currentValue) {
      this[property] = currentValue === '' || currentValue
      this[camelCaps] = this[property]

      this.#handleUpdateProp(camelCaps, this[property])

      this.render()
      this.onChanges({ property, previousValue, currentValue })
    }
  }

  #handleUpdateProp(key, stringifiedValue) {
    const restored = deserialize(stringifiedValue, this.#typeMap[key])
    if (restored !== this.props[key]) this.props[key] = restored
  }

  #handler(setter, meta) {
    const typeMap = meta.#typeMap

    return {
      set(obj, prop, value) {
        const oldValue = obj[prop]

        if (!(prop in typeMap)) {
          typeMap[prop] = typeof value
        }

        if (typeMap[prop] !== typeof value) {
          throw TypeError(
            `Cannot assign ${typeof value} to ${
              typeMap[prop]
            } property (setting '${prop}' of ${meta.constructor.name})`
          )
        } else if (oldValue !== value) {
          obj[prop] = value
          const kebab = getKebabCase(prop)
          setter(kebab, serialize(value))
        }

        return true
      },
      get(obj, prop) {
        return obj[prop]
      },
    }
  }

  #initializeProps() {
    let initialProps = structuredClone(this.constructor.props) ?? {}
    Object.keys(initialProps).forEach((camelCase) => {
      const value = initialProps[camelCase]
      this.#typeMap[camelCase] = typeof value
      this.setAttribute(getKebabCase(camelCase), serialize(value))
    })
    if (!this.#props) {
      this.#props = new Proxy(
        initialProps,
        this.#handler((key, value) => this.setAttribute(key, value), this)
      )
    }
  }
  #initializeHost() {
    this.#host = this
    if (this.constructor.shadowRootInit) {
      this.#host = this.attachShadow(this.constructor.shadowRootInit)
    }
  }

  render() {
    if (typeof this.template === 'string') {
      this.innerHTML = this.template
    } else if (typeof this.template === 'object') {
      const tree = this.template

      // TODO: smart diffing
      if (JSON.stringify(this.#prevDOM) !== JSON.stringify(tree)) {
        this.#applyStyles()

        /**
         * create element
         * - resolve prop values
         * - attach event listeners
         */
        const el = createElement(tree)

        if (el) {
          if (Array.isArray(el)) this.#host.replaceChildren(...el)
          else this.#host.replaceChildren(el)
        }
        this.#prevDOM = tree
      }
    }
  }

  #applyStyles() {
    if (this.constructor.styles !== undefined)
      try {
        const styleObj = new CSSStyleSheet()
        styleObj.replaceSync(this.constructor.styles)
        console.log(this.constructor.styles, this.constructor.props)
        this.#host.adoptedStyleSheets = [
          ...this.#host.adoptedStyleSheets,
          styleObj,
        ]
      } catch (e) {
        console.error(
          'ERR: Constructable stylesheets are only supported in shadow roots',
          e
        )
      }
  }
}
