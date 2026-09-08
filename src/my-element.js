import { LitElement, html } from "lit";
import { unsafeCSS } from "lit";
import globalStyles from "./index.css?inline";

export class MyElement extends LitElement {
  static styles = [unsafeCSS(globalStyles)];
  render() {
    return html`<button class="btn">daisyUI button</button> `;
  }
}

window.customElements.define("my-element", MyElement);
