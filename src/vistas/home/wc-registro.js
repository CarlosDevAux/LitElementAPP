import { LitElement, html } from "lit-element";

class WCRegistro extends LitElement {
  static get properties() {
    return {
      nombre: { type: String },
      apellido: { type: String },
      edad: { type: Number },
    };
  }

  constructor() {
    super();
    this.nombre = "";
    this.apellido = "";
    this.edad = "";
  }

  render() {
    return html`
      <form>
        <label for="inputNombre">
          Nombre
          <input
            id="inputNombre"
            type="text"
            .value="${this.nombre}"
            @input="${this.manejador("nombre")}"
          />
        </label>

        <label for="inputApellido">
          Apellido
          <input
            id="inputApellido"
            type="text"
            .value="${this.apellido}"
            @input="${this.manejador("apellido")}"
          />
        </label>

        <label for="inputEdad">
          Edad
          <input
            id="inputEdad"
            type="text"
            .value="${this.edad}"
            @input="${this.manejador("edad")}"
          />
        </label>

        <button type="button" @click="${this.guardar}">Guardar</button>
      </form>
    `;
  }

  manejador(nombre) {
    return (event) => {
      this[nombre] = event.target.value;
    };
  }

  guardar() {
    let detail = {
      nombre: this.nombre,
      apellido: this.apellido,
      edad: this.edad,
    };
    let opciones = {
      detail: detail,
      bubble: true,
      composed: true,
    };

    this.dispatchEvent(new CustomEvent("guardarRegistro", opciones));
  }
}

customElements.define("wc-registro", WCRegistro);
