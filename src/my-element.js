import { LitElement, html } from "lit";
import { unsafeCSS } from "lit";
import globalStyles from "./index.css?inline";

export class MyElement extends LitElement {
  static styles = [unsafeCSS(globalStyles)];
  render() {
    return html`
      <slot></slot>
      <button class="btn">daisyUI button</button>
      <a class="link link-primary block mt-4" href="/sample-ui.html">Sample UI</a>
    `;
  }
}

window.customElements.define("my-element", MyElement);
