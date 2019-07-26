let elemento=document.getElementById('btn-cambiar');
elemento.addEventListener("click",tarea);
let elemento_titulo=document.getElementById('title');

let titulo_inicial=elemento_titulo.innerText;

function tarea(){
	elemento_titulo.innerText="Texto Modificado en JS";
	//let valor_incial=elemento_titulo.innerText; // devuelve el texto;
	//console.log(valor_incial);
	//elemento_titulo.innerText="actualizarr" // actualiza el valor
}

let elemento_regresar=document.getElementById('btn-regresar');
elemento_regresar.addEventListener("click",regresar)
function regresar(){
	elemento_titulo.innerText=titulo_inicial;
}
