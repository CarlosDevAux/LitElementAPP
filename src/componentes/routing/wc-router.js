import { LitElement, html } from "lit-element";

class WCRouter extends LitElement {
  static get properties() {
    return {
      name: { type: String, attribute: true },
    };
  }

  constructor() {
    super();
    this._listenerEventRouting = this._listenerEventRouting.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    this.viewportList = this.querySelectorAll("wc-viewport");
    this.addEventListener("eventRouting", this._listenerEventRouting);
  }

  render() {
    return html` <slot></slot>`;
  }

  _listenerEventRouting(event) {
    let { to, routerName } = event.detail;
    if (routerName === undefined || routerName === this.name) {
      this.viewportList.forEach((viewport) => {
        viewport.renderView(to);
      });
      event.stopPropagation();
    }
  }
}

customElements.define("wc-router", WCRouter);
