import { LitElement, html } from "lit-element";

class WCTabla extends LitElement {
  static get properties() {
    return {
      lista: { type: Array },
    };
  }

  render() {
    return html`
      <h1>Registro</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
          </tr>
        </thead>
        <tbody>
          ${this.lista.map((elemento) => {
            return html`
              <tr>
                <td>${elemento.nombre}</td>
                <td>${elemento.apellido}</td>
                <td>${elemento.edad}</td>
              </tr>
            `;
          })}
        </tbody>
      </table>
    `;
  }
}

customElements.define("wc-tabla", WCTabla);
