# Web Component Base

This is a very minimal base class for creating reactive custom elements easily.

When you extend the `WebComponent` class for your component, you only have to define the `template()` and `observedAttributes()`, and changes in any attribute value will automatically cause the UI to render.

The result is a reactive UI on attribute changes.

## Installation

```bash
npm i web-component-base
```

## Usage


In your component class:

```js
// HelloWorld.mjs
import WebComponent from "web-component-base";

export class HelloWorld extends WebComponent {
  name = "World";
  emotion = "excited";

  static get observedAttributes() {
    return ["name", "emotion"];
  }

  get template() {
    return `
        <h1>Hello ${this.name}${this.emotion === "sad" ? ". 😭" : "! 🙌"}</h1>`;
  }
}

customElements.define('hello-world', HelloWorld);
```


In your HTML page:

```html
<head>
  <script type="module" src="HelloWorld.mjs"></script>
</head>
<body>
  <hello-world name="Ayo" emotion="sad">
  <script>
      const helloWorld = document.querySelector('hello-world');

      setTimeout(() => {
        helloWorld.setAttribute('emotion', 'excited');
      }, 2500)
  </script>
</body>
```

The result is a reactive UI that updates on attribute changes:

<img alt="UI showing feeling toward Web Components changing from SAD to EXCITED" src="https://git.sr.ht/~ayoayco/web-component-base/blob/main/assets/wc-base-demo.gif" width="400" />
