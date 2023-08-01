import { LitElement, html, css } from "lit-element";

class WCNavbar extends LitElement {
  static get styles() {
    return css`
      .contenedor-navbar {
        display: flex;
        justify-content: center;
        margin: auto;
        background-color: #83b983;
        padding: 1px;
      }
    `;
  }

  render() {
    return html`
      <div class="contenedor-navbar">
        <wc-routing to="home">
          <wc-boton texto="Home"></wc-boton>
        </wc-routing>
        <wc-routing to="pagina2">
          <wc-boton texto="Pagina 2"></wc-boton>
        </wc-routing>
        <wc-routing to="pagina3">
          <wc-boton texto="Pagina 3"></wc-boton>
        </wc-routing>
      </div>
    `;
  }
}

customElements.define("wc-navbar", WCNavbar);
