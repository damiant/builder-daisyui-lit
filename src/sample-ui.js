import { LitElement, html } from "lit";
import { unsafeCSS } from "lit";
import globalStyles from "./index.css?inline";

export class SampleUi extends LitElement {
  static styles = [unsafeCSS(globalStyles)];

  _openModal(id) {
    this.shadowRoot.getElementById(id).showModal();
  }

  render() {
    return html`
      <div class="sn-shell">
        <header class="sn-header">
          <a href="/" class="sn-brand" aria-label="ServiceNow inspired component gallery home">
            <span>service</span><strong>now</strong>
          </a>
          <nav class="sn-nav" aria-label="Component categories">
            <a href="#actions">Actions</a>
            <a href="#data-display">Data display</a>
            <a href="#navigation">Navigation</a>
            <a href="#inputs">Inputs</a>
          </nav>
          <a href="#actions" class="btn btn-primary btn-sm">Explore UI</a>
        </header>

        <div class="sn-hero">
          <a href="/" class="sn-back">&larr; Back to home</a>
          <p class="sn-eyebrow">Component library</p>
          <h1>Work flows better when <span>design feels effortless.</span></h1>
          <p class="sn-lede">A complete DaisyUI component gallery reimagined with ServiceNow’s bold, clear, and human-centered visual language.</p>
        </div>

        <main class="sn-content">

        <section id="actions" class="space-y-6">
          <h2 class="text-2xl font-semibold border-b pb-2">Actions</h2>

          <div>
            <h3 class="font-medium mb-2">Button</h3>
            <button class="btn btn-primary">Button</button>
          </div>

          <div>
            <h3 class="font-medium mb-2">Dropdown</h3>
            <details class="dropdown">
              <summary class="btn m-1">Dropdown</summary>
              <ul class="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
              </ul>
            </details>
          </div>

          <div>
            <h3 class="font-medium mb-2">FAB / Speed Dial</h3>
            <div class="fab">
              <div tabindex="0" role="button" class="btn btn-circle btn-primary">+</div>
              <button class="btn btn-circle">A</button>
              <button class="btn btn-circle">B</button>
            </div>
          </div>

          <div>
            <h3 class="font-medium mb-2">Modal</h3>
            <button class="btn" @click=${() => this._openModal("sample_modal")}>Open modal</button>
            <dialog id="sample_modal" class="modal">
              <div class="modal-box">
                <h3 class="text-lg font-bold">Hello!</h3>
                <p class="py-4">Press ESC key or click outside to close</p>
                <div class="modal-action">
                  <form method="dialog">
                    <button class="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>

          <div>
            <h3 class="font-medium mb-2">Swap</h3>
            <label class="swap">
              <input type="checkbox" />
              <div class="swap-on">ON</div>
              <div class="swap-off">OFF</div>
            </label>
          </div>

          <div>
            <h3 class="font-medium mb-2">Theme Controller</h3>
            <label class="toggle text-base-content">
              <input type="checkbox" value="dark" class="theme-controller" />
              Dark theme
            </label>
          </div>
        </section>

        <section id="data-display" class="space-y-6">
          <h2 class="text-2xl font-semibold border-b pb-2">Data display</h2>

          <div>
            <h3 class="font-medium mb-2">Accordion</h3>
            <div class="join join-vertical w-full">
              <div class="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="sample-accordion" checked />
                <div class="collapse-title font-medium">Accordion item 1</div>
                <div class="collapse-content text-sm">Content 1</div>
              </div>
              <div class="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="sample-accordion" />
                <div class="collapse-title font-medium">Accordion item 2</div>
                <div class="collapse-content text-sm">Content 2</div>
              </div>
            </div>
          </div>

          <div>
            <h3 class="font-medium mb-2">Avatar</h3>
            <div class="avatar">
              <div class="w-16 rounded-full">
                <img src="https://img.daisyui.com/images/profile/demo/2@94.webp" alt="avatar" />
              </div>
            </div>
          </div>

          <div>
            <h3 class="font-medium mb-2">Aura</h3>
            <div class="aura">
              <button class="btn">Button with aura</button>
            </div>
          </div>

          <div>
            <h3 class="font-medium mb-2">Badge</h3>
            <span class="badge badge-primary">Badge</span>
          </div>

          <div>
            <h3 class="font-medium mb-2">Card</h3>
            <div class="card bg-base-100 w-72 shadow-sm">
              <figure>
                <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="card" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">Card title</h2>
                <p>Card content</p>
              </div>
            </div>
          </div>

          <div>
            <h3 class="font-medium mb-2">Carousel</h3>
            <div class="carousel w-72 rounded-box">
              <div class="carousel-item w-full">
                <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" class="w-full" alt="1" />
              </div>
              <div class="carousel-item w-full">
                <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" class="w-full" alt="2" />
              </div>
            </div>
          </div>

          <div>
            <h3 class="font-medium mb-2">Chat bubble</h3>
            <div class="chat chat-start">
              <div class="chat-bubble">Hi there!</div>
            </div>
            <div class="chat chat-end">
              <div class="chat-bubble">Hello!</div>
            </div>
          </div>

          <div>
            <h3 class="font-medium mb-2">Collapse</h3>
            <div class="collapse bg-base-100 border border-base-300">
              <input type="checkbox" />
              <div class="collapse-title font-medium">Click to open</div>
              <div class="collapse-content text-sm">Collapsed content</div>
            </div>
          </div>

          <div>
            <h3 class="font-medium mb-2">Countdown</h3>
            <span class="countdown">
              <span style="--value:59;" aria-live="polite" aria-label="59">59</span>
            </span>
          </div>

          <div>
            <h3 class="font-medium mb-2">Diff</h3>
            <figure class="diff aspect-16/9">
              <div class="diff-item-1">
                <div class="bg-primary text-primary-content grid place-content-center">Before</div>
              </div>
              <div class="diff-item-2">
                <div class="bg-base-200 grid place-content-center">After</div>
              </div>
              <div class="diff-resizer"></div>
            </figure>
          </div>

          <div>
            <h3 class="font-medium mb-2">Hover 3D card</h3>
            <div class="hover-3d">
              <figure class="w-60 rounded-2xl">
                <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="3D card" />
              </figure>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>

          <div>
            <h3 class="font-medium mb-2">Hover Gallery</h3>
            <figure class="hover-gallery max-w-60">
              <img src="https://img.daisyui.com/images/stock/daisyui-hat-1.webp" alt="1" />
              <img src="https://img.daisyui.com/images/stock/daisyui-hat-2.webp" alt="2" />
              <img src="https://img.daisyui.com/images/stock/daisyui-hat-3.webp" alt="3" />
              <img src="https://img.daisyui.com/images/stock/daisyui-hat-4.webp" alt="4" />
            </figure>
          </div>

          <div>
            <h3 class="font-medium mb-2">Kbd</h3>
            <kbd class="kbd">Ctrl</kbd> + <kbd class="kbd">C</kbd>
          </div>

          <div>
            <h3 class="font-medium mb-2">List</h3>
            <ul class="list bg-base-100 rounded-box shadow-md">
              <li class="list-row">Item 1</li>
              <li class="list-row">Item 2</li>
              <li class="list-row">Item 3</li>
            </ul>
          </div>

          <div>
            <h3 class="font-medium mb-2">Stat</h3>
            <div class="stats shadow">
              <div class="stat">
                <div class="stat-title">Downloads</div>
                <div class="stat-value">31K</div>
              </div>
            </div>
          </div>

          <div>
            <h3 class="font-medium mb-2">Status</h3>
            <span class="status status-success"></span>
          </div>

          <div>
            <h3 class="font-medium mb-2">Table</h3>
            <div class="overflow-x-auto">
              <table class="table">
                <thead>
                  <tr><th>Name</th><th>Job</th></tr>
                </thead>
                <tbody>
                  <tr><td>Cy Ganderton</td><td>Developer</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 class="font-medium mb-2">Text Rotate</h3>
            <span class="text-rotate">
              <span>
                <span>ONE</span>
                <span>TWO</span>
                <span>THREE</span>
              </span>
            </span>
          </div>

          <div>
            <h3 class="font-medium mb-2">Timeline</h3>
            <ul class="timeline">
              <li>
                <div class="timeline-start">Step 1</div>
                <div class="timeline-middle">&bull;</div>
                <hr />
              </li>
              <li>
                <hr />
                <div class="timeline-start">Step 2</div>
                <div class="timeline-middle">&bull;</div>
              </li>
            </ul>
          </div>
        </section>

        <section id="navigation" class="space-y-6">
          <h2 class="text-2xl font-semibold border-b pb-2">Navigation</h2>

          <div>
            <h3 class="font-medium mb-2">Breadcrumbs</h3>
            <div class="breadcrumbs text-sm">
              <ul>
                <li><a>Home</a></li>
                <li><a>Documents</a></li>
                <li>Add Document</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 class="font-medium mb-2">Dock</h3>
            <div class="dock relative">
              <button>Home</button>
              <button class="dock-active">Inbox</button>
              <button>Settings</button>
            </div>
          </div>

          <div>
            <h3 class="font-medium mb-2">Link</h3>
            <a class="link link-primary">Click me</a>
          </div>

          <div>
            <h3 class="font-medium mb-2">Megamenu</h3>
            <div class="megamenu">
              <span class="megamenu-active"></span>
              <button popovertarget="sample-menu-items" class="btn">Menu</button>
              <div id="sample-menu-items" popover>
                <ul class="menu">
                  <li><a href="#">Item 1</a></li>
                  <li><a href="#">Item 2</a></li>
                  <li><a href="#">Item 3</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 class="font-medium mb-2">Menu</h3>
            <ul class="menu bg-base-200 w-56 rounded-box">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div>

          <div>
            <h3 class="font-medium mb-2">Navbar</h3>
            <div class="navbar bg-base-200 rounded-box">
              <div class="flex-1">
                <a class="btn btn-ghost text-xl">service<strong>now</strong></a>
              </div>
            </div>
          </div>

          <div>
            <h3 class="font-medium mb-2">Pagination</h3>
            <div class="join">
              <button class="join-item btn">1</button>
              <button class="join-item btn btn-active">2</button>
              <button class="join-item btn">3</button>
            </div>
          </div>

          <div>
            <h3 class="font-medium mb-2">Steps</h3>
            <ul class="steps">
              <li class="step step-primary">Register</li>
              <li class="step step-primary">Choose plan</li>
              <li class="step">Purchase</li>
            </ul>
          </div>

          <div>
            <h3 class="font-medium mb-2">Tab</h3>
            <div class="tabs tabs-border">
              <input type="radio" name="sample_tabs" class="tab" aria-label="Tab 1" checked />
              <div class="tab-content border-base-300 bg-base-100 p-6">Tab content 1</div>
              <input type="radio" name="sample_tabs" class="tab" aria-label="Tab 2" />
              <div class="tab-content border-base-300 bg-base-100 p-6">Tab content 2</div>
            </div>
          </div>
        </section>

        <section class="space-y-6">
          <h2 class="text-2xl font-semibold border-b pb-2">Feedback</h2>

          <div>
            <h3 class="font-medium mb-2">Alert</h3>
            <div class="alert alert-info">Alert message</div>
          </div>

          <div>
            <h3 class="font-medium mb-2">Loading</h3>
            <span class="loading loading-spinner loading-lg"></span>
          </div>

          <div>
            <h3 class="font-medium mb-2">Progress</h3>
            <progress class="progress progress-primary w-56" value="40" max="100"></progress>
          </div>

          <div>
            <h3 class="font-medium mb-2">Radial progress</h3>
            <div class="radial-progress" style="--value:70;" role="progressbar">70%</div>
          </div>

          <div>
            <h3 class="font-medium mb-2">Skeleton</h3>
            <div class="skeleton h-10 w-full"></div>
          </div>

          <div>
            <h3 class="font-medium mb-2">Toast</h3>
            <div class="toast toast-top toast-end static">
              <div class="alert alert-info">
                <span>New message</span>
              </div>
            </div>
          </div>

          <div>
            <h3 class="font-medium mb-2">Tooltip</h3>
            <div class="tooltip" data-tip="Hello there">
              <button class="btn">Hover me</button>
            </div>
          </div>
        </section>

        <section id="inputs" class="space-y-6">
          <h2 class="text-2xl font-semibold border-b pb-2">Data input</h2>

          <div>
            <h3 class="font-medium mb-2">Calendar</h3>
            <calendar-date class="cally bg-base-100 border border-base-300 shadow-lg rounded-box">
              <calendar-month></calendar-month>
            </calendar-date>
          </div>

          <div>
            <h3 class="font-medium mb-2">Checkbox</h3>
            <input type="checkbox" checked class="checkbox" />
          </div>

          <div>
            <h3 class="font-medium mb-2">Fieldset</h3>
            <fieldset class="fieldset bg-base-200 border border-base-300 rounded-box p-4">
              <legend class="fieldset-legend">Page title</legend>
              <input type="text" class="input" placeholder="My title" />
            </fieldset>
          </div>

          <div>
            <h3 class="font-medium mb-2">File Input</h3>
            <input type="file" class="file-input" />
          </div>

          <div>
            <h3 class="font-medium mb-2">Filter</h3>
            <form class="filter">
              <input class="btn btn-square" type="reset" value="&times;" />
              <input class="btn" type="radio" name="sample-frameworks" aria-label="Svelte" />
              <input class="btn" type="radio" name="sample-frameworks" aria-label="Vue" />
              <input class="btn" type="radio" name="sample-frameworks" aria-label="React" />
            </form>
          </div>

          <div>
            <h3 class="font-medium mb-2">Label</h3>
            <label class="label">Email address</label>
          </div>

          <div>
            <h3 class="font-medium mb-2">Radio</h3>
            <input type="radio" name="sample-radio" class="radio" checked />
            <input type="radio" name="sample-radio" class="radio" />
          </div>

          <div>
            <h3 class="font-medium mb-2">Range</h3>
            <input type="range" min="0" max="100" value="40" class="range" />
          </div>

          <div>
            <h3 class="font-medium mb-2">Rating</h3>
            <div class="rating">
              <input type="radio" name="sample-rating" class="mask mask-star" />
              <input type="radio" name="sample-rating" class="mask mask-star" checked />
              <input type="radio" name="sample-rating" class="mask mask-star" />
            </div>
          </div>

          <div>
            <h3 class="font-medium mb-2">Select</h3>
            <select class="select">
              <option disabled selected>Pick one</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </div>

          <div>
            <h3 class="font-medium mb-2">Input field</h3>
            <input type="text" placeholder="Type here" class="input" />
          </div>

          <div>
            <h3 class="font-medium mb-2">Textarea</h3>
            <textarea class="textarea" placeholder="Bio"></textarea>
          </div>

          <div>
            <h3 class="font-medium mb-2">Toggle</h3>
            <input type="checkbox" checked class="toggle" />
          </div>

          <div>
            <h3 class="font-medium mb-2">Validator</h3>
            <input class="input validator" type="email" required placeholder="mail@site.com" />
          </div>

          <div>
            <h3 class="font-medium mb-2">OTP</h3>
            <label class="otp">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <input type="text" autocomplete="one-time-code" inputmode="numeric" maxlength="4" pattern="[0-9]{4}" required />
            </label>
          </div>
        </section>

        <section class="space-y-6">
          <h2 class="text-2xl font-semibold border-b pb-2">Layout</h2>

          <div>
            <h3 class="font-medium mb-2">Divider</h3>
            <div class="divider">OR</div>
          </div>

          <div>
            <h3 class="font-medium mb-2">Drawer sidebar</h3>
            <div class="drawer">
              <input id="sample-drawer" type="checkbox" class="drawer-toggle" />
              <div class="drawer-content">
                <label for="sample-drawer" class="btn btn-primary drawer-button">Open drawer</label>
              </div>
              <div class="drawer-side">
                <label for="sample-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
                <ul class="menu bg-base-200 min-h-full w-80 p-4">
                  <li><a>Sidebar Item 1</a></li>
                  <li><a>Sidebar Item 2</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 class="font-medium mb-2">Footer</h3>
            <footer class="footer bg-base-200 p-10">
              <nav>
                <h6 class="footer-title">Services</h6>
                <a class="link link-hover">Branding</a>
                <a class="link link-hover">Design</a>
              </nav>
            </footer>
          </div>

          <div>
            <h3 class="font-medium mb-2">Hero</h3>
            <div class="hero bg-base-200 rounded-box">
              <div class="hero-content text-center">
                <div class="max-w-md">
                  <h1 class="text-3xl font-bold">Hello there</h1>
                  <p class="py-4">This is a hero section.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 class="font-medium mb-2">Indicator</h3>
            <div class="indicator">
              <span class="indicator-item badge badge-secondary">new</span>
              <button class="btn">Inbox</button>
            </div>
          </div>

          <div>
            <h3 class="font-medium mb-2">Join (group items)</h3>
            <div class="join">
              <button class="btn join-item">Button 1</button>
              <button class="btn join-item">Button 2</button>
            </div>
          </div>

          <div>
            <h3 class="font-medium mb-2">Mask</h3>
            <img class="mask mask-squircle w-24" src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" alt="mask" />
          </div>

          <div>
            <h3 class="font-medium mb-2">Stack</h3>
            <div class="stack w-24 h-24">
              <div class="bg-primary text-primary-content grid place-content-center">1</div>
              <div class="bg-secondary text-secondary-content grid place-content-center">2</div>
            </div>
          </div>
        </section>

        <section class="space-y-6">
          <h2 class="text-2xl font-semibold border-b pb-2">Mockup</h2>

          <div>
            <h3 class="font-medium mb-2">Browser</h3>
            <div class="mockup-browser border border-base-300 w-full">
              <div class="mockup-browser-toolbar">
                <div class="input">https://servicenow.com</div>
              </div>
              <div class="grid place-content-center border-t border-base-300 h-40">Content</div>
            </div>
          </div>

          <div>
            <h3 class="font-medium mb-2">Code</h3>
            <pre class="mockup-code">
<code>Design for better workflows.</code></pre>
          </div>

          <div>
            <h3 class="font-medium mb-2">Phone</h3>
            <div class="mockup-phone">
              <div class="mockup-phone-camera"></div>
              <div class="mockup-phone-display bg-base-200 grid place-content-center">Hi</div>
            </div>
          </div>

          <div>
            <h3 class="font-medium mb-2">Window</h3>
            <div class="mockup-window border border-base-300 w-full">
              <div class="grid place-content-center border-t border-base-300 h-40">Content</div>
            </div>
          </div>
        </section>
        </main>
      </div>
    `;
  }
}

window.customElements.define("sample-ui", SampleUi);
