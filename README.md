> [!NOTE]
> The project is now in [SourceHut](https://git.sr.ht/~ayoayco/wcb). Please submit issues or requests via our [Todo Page](https://todo.sr.ht/~ayoayco/wcb) or [via email](mailto:~ayoayco/wcb@todo.sr.ht).

# Web Component Base

[![Package information: NPM version](https://img.shields.io/npm/v/web-component-base)](https://www.npmjs.com/package/web-component-base)
[![Package information: NPM license](https://img.shields.io/npm/l/web-component-base)](https://www.npmjs.com/package/web-component-base)
[![Package information: NPM downloads](https://img.shields.io/npm/dt/web-component-base)](https://www.npmjs.com/package/web-component-base)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/web-component-base)](#library-size)

🤷‍♂️ zero-dependency, 🤏 tiny JS base class for creating reactive [custom elements](https://developer.mozilla.org/en-US/docs/Web/API/Web_Components/Using_custom_elements) easily ✨

![counter example code snippet](https://git.sr.ht/~ayoayco/wcb/blob/main/assets/IMG_0682.png)

When you extend the `WebComponent` class for your component, you only have to define the `template` and `properties`. Any change in any property value will automatically cause just the component UI to render.

The result is a reactive UI on property changes.

There's a trade off between productivity & lightweight-ness here, and it is somewhere between [Microsoft's FASTElement](https://github.com/microsoft/fast) & [Google's LitElement](https://github.com/lit/lit/).

## Links

- [Documentation](https://webcomponent.io)
- [Main Repo at SourceHut](https://git.sr.ht/~ayoayco/wcb)
  - [GitHub Mirror](https://github.com/ayoayco/wcb)
  - ...more mirrors coming
- [To Do](https://todo.sr.ht/~ayoayco/wcb)
- [Read a blog explaining the reactivity](https://ayos.blog/reactive-custom-elements-with-html-dataset/)
- [View demo on CodePen](https://codepen.io/ayoayco-the-styleful/pen/ZEwoNOz?editors=1010)

## Want to get in touch?

There are many ways to get in touch:

1. Email a ticket: [~ayoayco/wcb@todo.sr.ht](mailto:~ayoayco/wcb@todo.sr.ht)
1. Submit via [SourceHut todo](https://todo.sr.ht/~ayoayco/wcb)
1. Start a [GitHub discussion](https://github.com/ayoayco/wcb/discussions)
1. Email me: [ayo@ayco.io](mailto:ayo@ayco.io)

## Inspirations and thanks

1. [htm](https://github.com/developit/htm) - I use it for the `html` function for tagged templates, and take a lot of inspiration in building the rendering implementation. It is highly likely that I will go for what Preact is doing... but we'll see.
1. [fast](https://github.com/microsoft/fast) - When I found that Microsoft has their own base class (super cool!) and I thought: okay, I don't feel bad about forgetting Lit exists now
1. [lit](https://github.com/lit/lit) - `lit-html` continues to amaze me and I worked to make `wcb` generic so I (and others) can continue to use it
