---
title: Prop Access
slug: prop-access
---

The `props` property of the `WebComponent` interface is provided for easy read/write access to a camelCase counterpart of _any_ observed attribute.

```js
class HelloWorld extends WebComponent {
  static props = {
    myProp: 'World',
  }
  get template() {
    return html` <h1>Hello ${this.props.myProp}</h1> `
  }
}
```

Assigning a value to the `props.camelCase` counterpart of an observed attribute will trigger an "attribute change" hook.

For example, assigning a value like so:

```
this.props.myName = 'hello'
```

...is like calling the following:

```
this.setAttribute('my-name','hello');
```

Therefore, this will tell the browser that the UI needs a render if the attribute is one of the component's observed attributes we explicitly provided with `static props`;

> [!NOTE]
> The `props` property of `WebComponent` works like `HTMLElement.dataset`, except `dataset` is only for attributes prefixed with `data-`. A camelCase counterpart using `props` will give read/write access to any attribute, with or without the `data-` prefix.
> Another advantage over `HTMLElement.dataset` is that `WebComponent.props` can hold primitive types 'number', 'boolean', 'object' and 'string'.

### Alternatives

The current alternatives are using what `HTMLElement` provides out-of-the-box, which are:

1. `HTMLElement.dataset` for attributes prefixed with `data-*`. Read more about this [on MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset).
1. Methods for reading/writing attribute values: `setAttribute(...)` and `getAttribute(...)`; note that managing the attribute names as strings can be difficult as the code grows.
