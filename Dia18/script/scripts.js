
class UserCard extends HTMLElement{
    constructor(){
        let estilos=`<style>
            .card {
              font-family: 'Arial', sans-serif;
              background: #f9f9f9;
              border: 1px solid #ddd;
              border-radius: 8px;
              padding: 16px;
              width: 250px;
              box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            .name {
              font-size: 1.2em;
              font-weight: bold;
              margin-bottom: 4px;
            }
            .email {
              color: #555;
            }
          </style>`;

        super();//Va a coger todas las características que "HTMLElement" tiene

        //Este módulo de ShadowDom va a ser de tipo "abierto"
        //, lo cual significa que va a tener acceso desde afuera.
        this.attachShadow({mode:'open'});


        this.shadowRoot.innerHTML =`
        ${estilos}
        <div class="card">
            <div class="name"></div>
            <div class="email"></div>
          </div>`;
        
    }
    //Es una función la cual acciona post-implementación, para
    //volver a ser modificada o alterada después de haber sido creada.
    connectedCallback(){
            //Llene el contenido de manera dinámica desde los atributos
            this.shadowRoot.querySelector('.name').textContent = this.getAttribute('name')|| "Nombre desconocido";
            this.shadowRoot.querySelector('.email').textContent = this.getAttribute('email')|| "Nombre desconocido";
    }
    
}
//Registrar el componente
customElements.define('user-card',UserCard);