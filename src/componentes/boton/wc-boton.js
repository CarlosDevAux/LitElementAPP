import { LitElement, html, css } from 'lit-element';

class WCBoton extends LitElement {

    static get styles() {
        return css`
        button {
            all:initial;
            background-color: #9292b5;
            font-family:cursive; 
            margin-right:20px;
            width: 150px;
            border-radius:10px;
            text-align:center;
            padding: 2px;
            cursor: pointer;
        };
    `;
    }

    static get properties() {
        return {
            texto: { type: String, attributes: true }
        }
    }

    constructor() {
        super();
        this.texto = "click";
    }

    render() {
        return html`
            <button @mousedown=${this.mouseClickDown} @mouseup=${this.mouseClickUp}>
                ${this.texto}
            </button>
        `;
    }

    firstUpdated() {
        this.button = this.shadowRoot.querySelector("button");
    }

    mouseClickUp() {
        this.button.style.backgroundColor = "#9292b5";
    }

    mouseClickDown() {
        this.button.style.backgroundColor = "red";
    }

}

customElements.define("wc-boton", WCBoton);