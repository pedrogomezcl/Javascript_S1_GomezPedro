const daticos = [{ "id": "1", "name": "Pedro Felipe", "user": "pedrogomez.campuslands@gmail.com", "pass": "campus2025", "favorites": ["76386190", "76386178", "76386162"] }, { "id": "2", "name": "Laura Martínez", "user": "laura.martinez@correo.com", "pass": "laura2025", "favorites": ["76386201", "76386215"] }, { "id": "3", "name": "Carlos Ramírez", "user": "carlos.ramirez@correo.com", "pass": "carlos2025", "favorites": ["76386222", "76386199", "76386175"] }, { "id": "4", "name": "Andrea Torres", "user": "andrea.torres@correo.com", "pass": "andrea2025", "favorites": ["76386233"] }, { "id": "5", "name": "Miguel Ángel", "user": "miguel.angel@correo.com", "pass": "miguel2025", "favorites": ["76386241", "76386244", "76386250"] }, { "id": "6", "name": "Sofía Herrera", "user": "sofia.herrera@correo.com", "pass": "sofia2025", "favorites": ["76386255", "76386259"] }, { "id": "7", "name": "David Castillo", "user": "david.castillo@correo.com", "pass": "david2025", "favorites": ["76386265"] }, { "id": "8", "name": "Natalia Ríos", "user": "natalia.rios@correo.com", "pass": "natalia2025", "favorites": ["76386272", "76386278"] }, { "id": "9", "name": "Juan Camilo", "user": "juan.camilo@correo.com", "pass": "juan2025", "favorites": ["76386285", "76386291", "76386297"] }, { "id": "10", "name": "Valentina Gómez", "user": "valentina.gomez@correo.com", "pass": "valentina2025", "favorites": ["76386301"] }];
//localStorage.setItem("id",daticos[0]["id"]);
//localStorage.setItem("name",daticos[0]["name"]);
document.getElementById("holi").innerHTML=`El id del usuario es: ${localStorage.getItem("id")}`;
document.cookie=`El primer usuario guardado es ${daticos[0]["name"]};expires=Tue, 13 May 2025 07:49:00 GMT-5`;

class MiElementoPersonalizado extends HTMLElement {
    constructor() {
      super();
  
      // Lógica de inicialización
      this.innerHTML = '¡Hola, soy un Custom Element!';
    }
  
    // Puedes agregar más métodos y lógica según sea necesario
  }
customElements.define('mi-elemento-personalizado', MiElementoPersonalizado);