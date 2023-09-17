Web Component Base
---
This is a very minimal base class for creating reactive custom elements easily.

When you extend the `WebComponent` class for your component, you only have to define the `template()` and `observedAttributes()`, and changes in any attribute value will automatically cause the UI to render.

The result is a reactive UI on attribute changes.

## Table of Contents
1. [Vanilla JS import](#vanilla-js-import)
1. [Installation](#installation)
1. [Usage](#usage)
1. [Life-Cycle Hooks](#life-cycle-hooks)
    1. [`onInit`](#oninit) - the component is connected to the DOM
    1. [`onChanges`](#onchanges) - an attribute value changed

## Vanilla JS import
Import using [unpkg](https://unpkg.com/web-component-base) in your component. We will use this in the rest of our [usage examples](#usage).

```js
import WebComponent from "https://unpkg.com/web-component-base";
```

## Installation 
If you have a bundler to help resolving imports:

```bash
npm i web-component-base
```

## Usage


In your component class:

```js
// HelloWorld.mjs
import WebComponent from "https://unpkg.com/web-component-base";

class HelloWorld extends WebComponent {
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

## Life-Cycle Hooks

Define behavior when certain events in the component's life cycle is triggered by providing hook methods

### onInit()
- gets triggered when the component is connected to the DOM
- best for setting up the component

```js
import WebComponent from "https://unpkg.com/web-component-base";

class ClickableText extends WebComponent {
  // gets called when the component is used in an HTML document
  onInit() {
    this.onclick = () => console.log(">>> click!");
  }

  get template() {
    return `<span style="cursor:pointer">Click me!</span>`;
  }
}
```

### onChanges()
- gets triggered when an attribute value changed

```js
import WebComponent from "https://unpkg.com/web-component-base";

class ClickableText extends WebComponent {
  // gets called when an attribute value changes
  onChanges({attr, prev, curr}) {
    console.log('>>> something changed', {attr, prev, curr})
  }

  get template() {
    return `<span style="cursor:pointer">Click me!</span>`;
  }
}
```
