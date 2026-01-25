import { beforeEach, describe, expect, it } from 'vitest'
import { WebComponent } from '../src/WebComponent.js'

let componentUnderTest

describe('WebComponent', () => {
  /**
   * We need to define the custom element because
   * browsers throw an error when you instantiate
   * a custom element class that is not in the registry
   */
  window.customElements.define('component-test', WebComponent)

  beforeEach(() => {
    componentUnderTest = new WebComponent()
  })

  it('is instantiated', () => {
    expect(componentUnderTest).toBeDefined()
  })

  it('has a readonly template prop', () => {
    expect(componentUnderTest.template).toBe('')
    const assignToReadonly = () => {
      componentUnderTest.template = 'should error'
    }
    expect(() => assignToReadonly()).toThrowError()
  })
})
