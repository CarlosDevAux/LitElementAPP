import { LitElement, html } from 'lit-element';
import './wc-tabla';

class WCHome extends LitElement {

    constructor() {
        super();
        this.lista = [
            { "nombre": "Carlos 1", "apellido": "ACarlos 1", "edad": "30" },
            { "nombre": "Carlos 2", "apellido": "ACarlos 2", "edad": "40" },
            { "nombre": "Carlos 3", "apellido": "ACarlos 3", "edad": "50" }
        ]
    }

    render() {
        return html`
            <wc-tabla .lista=${this.lista}></wc-tabla>
        `;
    }

}

customElements.define("wc-home", WCHome);