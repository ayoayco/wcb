---
title: Styling
slug: styling
---

When using the built-in `html` function for tagged templates, a style object of type `Partial<CSSStyleDeclaration>` can be passed to any element's `style` attribute. This allows for calculated and conditional styles. Read more on style objects [on MDN](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration).

Try it now with this [example on CodePen ↗](https://codepen.io/ayoayco-the-styleful/pen/bGzXjwQ?editors=1010)

```js
import { WebComponent } from 'https://unpkg.com/web-component-base@latest/index.js'

class StyledElements extends WebComponent {
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

customElements.define('styled-elements', StyledElements)
```
