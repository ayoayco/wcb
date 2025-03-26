---
title: Life-Cycle Hooks
slug: life-cycle-hooks
---

Define behavior when certain events in the component's life cycle is triggered by providing hook methods

### onInit()

- Triggered when the component is connected to the DOM
- Best for setting up the component

```js
import { WebComponent } from 'https://unpkg.com/web-component-base@latest/index.js'

class ClickableText extends WebComponent {
  // gets called when the component is used in an HTML document
  onInit() {
    this.onclick = () => console.log('>>> click!')
  }

  get template() {
    return `<span style="cursor:pointer">Click me!</span>`
  }
}
```

### afterViewInit()

- Triggered after the view is first initialized

```js
class ClickableText extends WebComponent {
  // gets called when the component's innerHTML is first filled
  afterViewInit() {
    const footer = this.querySelector('footer')
    // do stuff to footer after view is initialized
  }

  get template() {
    return `<footer>Awesome site &copy; 2023</footer>`
  }
}
```

### onDestroy()

- Triggered when the component is disconnected from the DOM
- best for undoing any setup done in `onInit()`

```js
import { WebComponent } from 'https://unpkg.com/web-component-base@latest/index.js'

class ClickableText extends WebComponent {
  clickCallback() {
    console.log('>>> click!')
  }

  onInit() {
    this.onclick = this.clickCallback
  }

  onDestroy() {
    console.log('>>> removing event listener')
    this.removeEventListener('click', this.clickCallback)
  }

  get template() {
    return `<span style="cursor:pointer">Click me!</span>`
  }
}
```

### onChanges()

- Triggered when an attribute value changed

```js
import { WebComponent } from 'https://unpkg.com/web-component-base@latest/index.js'

class ClickableText extends WebComponent {
  // gets called when an attribute value changes
  onChanges(changes) {
    const { property, previousValue, currentValue } = changes
    console.log('>>> ', { property, previousValue, currentValue })
  }

  get template() {
    return `<span style="cursor:pointer">Click me!</span>`
  }
}
```
