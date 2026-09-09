import { LitElement, html } from "lit";
import { unsafeCSS } from "lit";
import globalStyles from "./index.css?inline";

export class MyElement extends LitElement {
  static styles = [unsafeCSS(globalStyles)];
  render() {
    return html`
      <div class="sn-shell">
        <header class="sn-header">
          <a href="/" class="sn-brand" aria-label="ServiceNow inspired home">
            <span>serveus</span><strong>wow</strong>
          </a>
          <a href="/sample-ui.html" class="btn btn-primary btn-sm">Explore UI</a>
        </header>

        <main>
          <section class="event-feature" aria-labelledby="event-feature-title">
            <img
              class="event-feature__image"
              src="https://www.servicenow.com/community/image/serverpage/image-id/528165iA78B812BB59A5DDF/image-size/large?v=v2&px=999"
              alt="Developers collaborating at a ServiceNow event"
            />
            <div class="event-feature__content">
              <p class="event-feature__eyebrow">now[dev]26</p>
              <h1 id="event-feature-title">Registration for now[dev]26 is open!</h1>
              <p class="event-feature__description">
                Whether you've been on the platform for years or you're shipping your first app,
                now[dev] is a two-day event for the people who write the code and make the build calls.
                Join us Nov. 4–5 in San Jose.
              </p>
              <p class="event-feature__date">November 4–5, 2026 <span aria-hidden="true">·</span> San Jose</p>
              <a class="event-feature__button" href="https://devlink.sn/nowdevcommunityhub" target="_blank" rel="noreferrer">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </section>
        </main>
      </div>
    `;
  }
}

window.customElements.define("my-element", MyElement);
