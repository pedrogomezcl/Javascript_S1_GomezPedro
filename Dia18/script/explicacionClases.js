class Persona{
    
    //Constructor: La manera básica de cómo se construye esa "Persona"
    constructor(nombre,edad){
        this.nombre = nombre;//Atributos (Características del objeto)
        this.edad=edad;
    }
    
    //Métodos
    saludar(){
        console.log(`${this.nombre} te está saludando!`);
    }
    saludar2(otraPersona){
        console.log(`${this.nombre} lo está acompañando ${otraPersona}!`);
    }
    aumentarEdad(){
        this.edad += 1;
        console.log(`${this.nombre} ahora tiene ${this.edad} años`);
    }
    mostrarEdad(){
        if(this.edad ==14){
            console.log(`La edad de ${this.nombre} es de 12+2 años`);
        }else{
            console.log(`La edad de ${this.nombre} es de ${this.edad} años`);
        }
    }

}


const Edgar = new Persona ("Edgar",32);
Edgar.saludar();
const Daniel = new Persona ("Daniel",17);
Daniel.saludar();
Daniel.saludar2("Naya");
let listaPersonas=[];
Edgar.aumentarEdad();
listaPersonas.push(Edgar,Daniel);
const Pepito = new Persona("Pepito",14);
console.log(listaPersonas);
Pepito.mostrarEdad();
Pepito.aumentarEdad();
Pepito.mostrarEdad();

console.log(listaPersonas[0]["nombre"]);