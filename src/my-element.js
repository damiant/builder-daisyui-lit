import { LitElement, html } from "lit";
import { unsafeCSS } from "lit";
import globalStyles from "./index.css?inline";

export class MyElement extends LitElement {
  static styles = [unsafeCSS(globalStyles)];
  render() {
    return html`
      <main class="min-h-screen grid place-items-center bg-base-200 p-6">
        <a class="btn btn-primary btn-lg" href="/sample-ui.html">Sample UI</a>
      </main>
    `;
  }
}

window.customElements.define("my-element", MyElement);
