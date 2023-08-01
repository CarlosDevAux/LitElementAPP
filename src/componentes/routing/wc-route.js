import { LitElement, html } from "lit-element";

class WCRoute extends LitElement {
  render() {
    return html`<slot></slot>`;
  }
}

customElements.define("wc-route", WCRoute);
