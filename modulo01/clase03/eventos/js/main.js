//console.log("mensaje desde JS")

let boton=document.getElementById('btn-ver-mas');

boton.addEventListener("click",tarea);

function tarea(){
	let caja=document.getElementById('contenido');
	//propiedad style nos permite acceder al conjunto de propiedades css del elemento
	//caja.style.display="block";
	
	// classList te permite acceder al conjunto de clases asignadas
	//caja.classList.remove("ocultar");
	//caja.classList.add("ocultar");
	caja.classList.add("nueva-clase");
}