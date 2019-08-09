

let xhr=new XMLHttpRequest();  //readyState 0

let url ="https://reqres.in/api/users?page=1";

xhr.open("GET",url,true);   //readeyState 1
xhr.send();

            // readyState 2. // 20seg
xhr.onreadystatechange=function(){
	let estado=xhr.readyState;
	if(estado==4){
		if(xhr.status==200){
			console.log(xhr);
			let resultado=JSON.parse(xhr.response);
			
			console.log(resultado);	
			// yo estoy seguro que tengo respuesta
		}
		
		
	}
	//console.log(xhr.responseText);
}
//console.log(xhr);  // readyState 4;



console.log("hola");


{
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
}

let login="https://reqres.in/api/users"






/*
console.log(xhr);

console.log(xhr.readyState);
console.log(xhr.responseText); // aquí esta la info de respuesta;
console.log(xhr.status); // información acerca de la petición;
*/


/*

class Persona{
	nombre,
	apellido,
	edad;

	correr(){
		//tareas
	}
	dormir(){
		// tareas
	}
}


let elemento1=new Persona();

elemento1.nombre;
elemento1.apellido;
elemento1.edad;
elemento1.correr();
elemento1.dormir();

*/


