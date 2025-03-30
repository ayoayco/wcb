// @ts-check
import { WebComponent, html } from '../../src/index.js'

class StyledElements extends WebComponent {
  static props = {
    condition: false,
    type: 'info',
  }

  static shadowRootInit = {
    mode: 'open',
  }

  static styles = `
    div {
      background-color: yellow;
      border: 1px solid black;
      padding: 1em;

      p {
        text-decoration: underline;
      }
    }
  `

  get template() {
    return html`
      <div>
        <p>Wow!?</p>
      </div>
    `
  }
}

customElements.define('styled-elements', StyledElements)
