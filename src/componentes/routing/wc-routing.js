import { LitElement, html } from "lit-element";

class WCRouting extends LitElement {
  static get properties() {
    return {
      to: { type: String, attribute: true },
      routerName: { type: String, attribute: true },
    };
  }

  render() {
    return html`
      <div @click="${this._eventClick}">
        <slot></slot>
      </div>
    `;
  }

  _eventClick() {
    let detail = {
      to: this.to,
      routerName: this.routerName,
    };

    this.dispatchEvent(
      new CustomEvent("eventRouting", {
        detail: detail,
        bubbles: true,
        composed: true,
      })
    );
  }
}

customElements.define("wc-routing", WCRouting);
