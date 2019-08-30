/*
let url="servicios.com/alumnos" // lista de alumnos
 	fecth(url) // promesa
   .then((data)=>{ return data.json()  })
   .then((data)=>{ console.log(data)});
*/
  // .catch((data)=>{})
/*
  let url="https://jsonplaceholder.typicode.com/todos/1";

  fetch(url)
  .then((data)=>{ return data.json() })
  .then((data)=>{ console.log(data)});
  */
  /*
  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))*/
  

  let url="https://jsonplaceholder.typicode.com/todos/1";
  
  let cabezera=new Headers();
  // agrego valores a mi cabezera
  cabezera.append("Content-Type","application/json")

  cabezera.has("Header-usuario") // true o false;
  
  // obtiene el valor de la cabezera
  cabezera.get("Content-Type") // "application/json"
  
  // actualiza el valor de la cabezera
  cabezera.set("Content-Type","text/plain");


  opciones = {
        method: 'GET', 
        headers: new Headers( {
            'Content-Type': 'application/json',
            'HEADER-usuario':"Jc",
        	'HEADER-DOMINIO':"LATINA.PE"
        } )
  };     
 
  let peticion=new Request(url,opciones) 

  fetch(peticion)
  .then((data)=>{return data.json()})
  .then((data)=>{console.log(data)});




  // POST -> le estoy mandando datos

  let urlRegistro="dominio.com/servicio.php"
  let valor={
  	nombre:"JC",
  	apellido:"RAMOS",
  	correo:"jramos@gmail.com"
  }
  let valor_cadena=JSON.stringify(valor);
 
  let opciones={
  	method:"POST",
  	headers:new Headers({"Content-Type":"application/json"}),
  //	body:'{ nombre:"JC",apellido;"RAMOS" ,correo:"jramos@gmail.com"}'
 	body:valor_cadena
  }
  fetch(url,opciones)
  .then((data)=>{
  	return data.json();
  })
  .then((data)=>{
  	console.log(data);
  })






let datosFormulario=new FormData()
datosFormulario.append("usuario","jtorriccelli");
datosFormulario.append("correo","jramos@gmail.com")

let opciones={
	method:"POST",
	Headers:new Headers(),
	body:datosFormulario
}











