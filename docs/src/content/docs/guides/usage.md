---
title: Usage
slug: usage
---

In your component class:

```js
// HelloWorld.mjs
import { WebComponent } from 'https://unpkg.com/web-component-base@latest/index.js'

class HelloWorld extends WebComponent {
  static props = {
    myName: 'World',
    emotion: 'sad',
  }
  get template() {
    return `
      <h1>Hello ${this.props.myName}${this.props.emotion === 'sad' ? '. 😭' : '! 🙌'}</h1>
    `
  }
}

customElements.define('hello-world', HelloWorld)
```

In your HTML page:

```html
<head>
  <script type="module" src="HelloWorld.mjs"></script>
</head>
<body>
  <hello-world my-name="Ayo" emotion="sad">
  <script>
      const helloWorld = document.querySelector('hello-world');

      setTimeout(() => {
        helloWorld.setAttribute('emotion', 'excited');
      }, 2500)
  </script>
</body>
```
