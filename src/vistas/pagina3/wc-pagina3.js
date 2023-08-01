import { LitElement, html } from "lit-element";

class WCPagina3 extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <div>
        <h2>Pagina 3</h2>
      </div>
    `;
  }
}

customElements.define("wc-pagina3", WCPagina3);
