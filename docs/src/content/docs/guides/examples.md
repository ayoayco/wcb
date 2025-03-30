---
title: Examples
slug: examples
---

### 1. To-Do App

A simple app that allows adding / completing tasks:
[View on CodePen ↗](https://codepen.io/ayoayco-the-styleful/pen/GRegyVe?editors=1010)

![To-Do App screen recording](https://raw.githubusercontent.com/ayoayco/web-component-base/main/assets/todo-app.gif)

### 2. Single HTML file Example

Here is an example of using a custom element in a single .html file.

```html
<!doctype html>
<html lang="en">
  <head>
    <title>WC Base Test</title>
    <script type="module">
      import { WebComponent } from 'https://unpkg.com/web-component-base@latest/index.js'

      class HelloWorld extends WebComponent {
        static props = {
          myName: 'World',
        }
        get template() {
          return `<h1>Hello ${this.props.myName}!</h1>`
        }
      }

      customElements.define('hello-world', HelloWorld)
    </script>
  </head>
  <body>
    <hello-world my-name="Ayo"></hello-world>
    <script>
      const helloWorld = document.querySelector('hello-world')
      setTimeout(() => {
        helloWorld.props.myName = 'Ayo zzzZzzz'
      }, 2500)
    </script>
  </body>
</html>
```

### 3. Feature Demos

Some feature-specific demos:

1. [Context-Aware Post-Apocalyptic Human](https://codepen.io/ayoayco-the-styleful/pen/WNqJMNG?editors=1010)
1. [Simple reactive property](https://codepen.io/ayoayco-the-styleful/pen/ZEwoNOz?editors=1010)
1. [Counter & Toggle](https://codepen.io/ayoayco-the-styleful/pen/PoVegBK?editors=1010)
1. [Using custom templating (lit-html)](https://codepen.io/ayoayco-the-styleful/pen/ZEwNJBR?editors=1010)
1. [Using dynamic style objects](https://codepen.io/ayoayco-the-styleful/pen/bGzXjwQ?editors=1010)
1. [Using the Shadow DOM](https://codepen.io/ayoayco-the-styleful/pen/VwRYVPv?editors=1010)
1. [Using tagged templates in your vanilla custom element](https://codepen.io/ayoayco-the-styleful/pen/bGzJQJg?editors=1010)
