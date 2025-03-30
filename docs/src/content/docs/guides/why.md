---
title: Why use this base class?
slug: 'why'
---

Often times, when simple websites need a quick custom element, the best way is still to create one extending from `HTMLElement`. However, it can quickly reach a point where writing the code from scratch can seem confusing and hard to maintain especially when compared to other projects with more advanced setups.

Also, when coming from frameworks with an easy declarative coding experience (using templates), the default imperative way (e.g., creating instances of elements, manually attaching event handlers, and other DOM manipulations) is a frequent pain point we see.

This project aims to address these with virtually zero tooling required and thin abstractions from vanilla custom element APIs – giving you only the bare minimum code to be productive.

It works on current-day browsers without needing compilers, transpilers, or polyfills.
