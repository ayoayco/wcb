---
title: Styling
slug: styling
---

There are two ways we can safely have scoped styles:

1. Using style objects
2. Using the Shadow DOM and constructable stylesheets

It is highly recommended to use the second approach, as with it, browsers can assist more for performance.

## Using style objects

When using the built-in `html` function for tagged templates, a style object of type `Partial<CSSStyleDeclaration>` can be passed to any element's `style` attribute. This allows for calculated and conditional styles. Read more on style objects [on MDN](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration).

Try it now with this [example on CodePen ↗](https://codepen.io/ayoayco-the-styleful/pen/bGzXjwQ?editors=1010)

```js
import { WebComponent } from 'https://unpkg.com/web-component-base@latest/index.js'

class StyledElement extends WebComponent {
  static props = {
    emphasize: false,
    type: 'warn',
  }

  #typeStyles = {
    warn: {
      backgroundColor: 'yellow',
      border: '1px solid orange',
    },
    error: {
      backgroundColor: 'orange',
      border: '1px solid red',
    },
  }

  get template() {
    return html`
      <div
        style=${{
          ...this.#typeStyles[this.props.type],
          padding: '1em',
        }}
      >
        <p style=${{ fontStyle: this.props.emphasize && 'italic' }}>Wow!</p>
      </div>
    `
  }
}

customElements.define('styled-elements', StyledElement)
```

## Using the Shadow DOM and Constructable Stylesheets

If you [use the Shadow DOM](/shadow-dom), you can add a `static styles` property of type string which will be added in the `shadowRoot`'s [`adoptedStylesheets`](https://developer.mozilla.org/en-US/docs/Web/API/Document/adoptedStyleSheets).

Try it now with this [example on CodePen ↗](https://codepen.io/ayoayco-the-styleful/pen/JojmeEe?editors=1010)

```js
class StyledElement extends WebComponent {
  static shadowRootInit = {
    mode: 'open',
  }

  static styles = `
    div {
      background-color: yellow;
      border: 1px solid black;
      padding: 1em;

      p {
        text-decoration: underline;
      }
    }
  `

  get template() {
    return html`
      <div>
        <p>Wow!?</p>
      </div>
    `
  }
}

customElements.define('styled-elements', StyledElement)
```
