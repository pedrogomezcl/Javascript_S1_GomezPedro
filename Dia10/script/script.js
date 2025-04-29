let titulo = document.getElementById('titulazo');
let variable = "Campuslands"
titulo.innerHTML = `Gatico ${variable}`;

//Con XML
function obtenerXML(){
    let edgar = new XMLHttpRequest();
    let numeritoAfuera = document.getElementById('numeritoCool').value;
    console.log(numeritoAfuera);
    let url= `https://http.cat/${numeritoAfuera}`;
    console.log(url);
    
    
    edgar.open('GET',url,true);
    edgar.onreadystatechange= (function(){
        console.log(this.status);
        if(this.readyState== 4 && this.status === 200){
            console.log(`aja`);
            document.getElementById(`imagenNueva`).src=url;
            document.getElementById(`errorsito`).innerHTML = ``;
        }else{
            console.log(`aja2`);
            document.getElementById(`errorsito`).innerHTML = `Mal! Vuelvelo a intentar!`;
        }
    });
    edgar.send();
}
function obtenerFetch(){
    let numeritoAfuera = document.getElementById('numeritoCool').value;
    console.log(numeritoAfuera);
    let url= `https://http.cat/${numeritoAfuera}`;
    fetch(url)
    .then(response =>{
        if(response.ok){
            console.log("aja3");
            document.getElementById(`imagenNueva`).src=url;
        }
    });
}