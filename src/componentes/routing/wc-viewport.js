import { LitElement } from "lit-element";

class WCViewport extends LitElement {
  constructor() {
    super();
    this.viewNow = "home";
  }

  connectedCallback() {
    super.connectedCallback();
    this.viewList = document.querySelectorAll("wc-route");
    this.renderView(this.viewNow);
  }

  renderView(path) {
    this.innerHTML = "";
    this.shadowRoot.innerHTML = "";

    let viewSelect = Array.from(this.viewList).find((view) => {
      return view.getAttribute("path") === path;
    });

    !!viewSelect && this.shadowRoot.append(viewSelect);
    this.viewNow = path;
  }
}

customElements.define("wc-viewport", WCViewport);
