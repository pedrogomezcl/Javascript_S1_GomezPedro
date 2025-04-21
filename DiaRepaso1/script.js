console.log("Holii");

//JSON Estático
/**const json={
	"file": "https://coffee.alexflipnote.dev/pbpCaYbtJJI_coffee.jpg"
};


console.log(json["file"]); */

function fetchCoffee(){
    let xhr = new XMLHttpRequest();

    let link= `https://coffee.alexflipnote.dev/random.json`;
    //Primer paso es crear(abrir) la solicitud
    xhr.open('GET',link,true);
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    //Segundo paso es decir qué hacer con esa solicitud
    xhr.onreadystatechange = function(){
        if(this.status ==200){
            let respuesta = JSON.parse(this.responseText);
            console.log(respuesta);
        }
    };
    //El tercer paso es ejecutar la solicitud
    xhr.send();
}

fetchCoffee();
