import { LitElement, html } from "lit-element";
import "./wc-tabla";
import "./wc-registro";

class WCHome extends LitElement {
  static get properties() {
    return {
      lista: { type: Array },
    };
  }

  constructor() {
    super();
    this.lista = [
      { nombre: "Carlos 1", apellido: "Apellido 1", edad: "30" },
      { nombre: "Carlos 2", apellido: "Apellido 2", edad: "40" },
      { nombre: "Carlos 3", apellido: "Apellido 3", edad: "50" },
    ];
  }

  render() {
    return html`
      <wc-registro @guardarRegistro="${this.agregarRegistro}"></wc-registro>
      <wc-tabla .lista=${this.lista}></wc-tabla>
    `;
  }

  agregarRegistro(event) {
    const nuevaLista = Object.assign([], this.lista);
    nuevaLista.push(event.detail);
    this.lista = nuevaLista;
  }
}

customElements.define("wc-home", WCHome);
