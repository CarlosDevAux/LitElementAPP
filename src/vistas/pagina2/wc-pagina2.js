import { LitElement, html } from "lit-element";

class WCPagina2 extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <div>
        <h2>Pagina 2</h2>
      </div>
    `;
  }
}

customElements.define("wc-pagina2", WCPagina2);
