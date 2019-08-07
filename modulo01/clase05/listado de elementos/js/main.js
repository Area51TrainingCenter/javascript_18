let btn_registro=document.getElementById('btn-registrar');

let listado_personas=[];

btn_registro.addEventListener("click",function(){
	
	let inp_nombres=document.getElementById('inp-nombres').value;
	let inp_apellidos=document.getElementById('inp-apellidos').value;
	let inp_correo=document.getElementById('inp-correo').value;
	let inp_telefono=document.getElementById('inp-telefono').value;
 	// etapa de validacion 
	let persona={
		nombres:inp_nombres,
		apellido:inp_apellidos,
		correo:inp_correo,
		telefono:inp_telefono
	}
	
	listado_personas.push(persona);
	
	
	listar();
	
})



let btn_limpiar=document.getElementById('btn-limpiar');
btn_limpiar.addEventListener("click",function(){
	
	let elementos=document.getElementsByClassName('inp-form');
	for(let i=0;i<elementos.length;i++){
		elementos[i].value=""
	}

})




function listar(){
	let listado=document.getElementById('lista-contactos');
	//let temporal=listado.innerHTML;
	let temporal_elementos="";
	for (let i = 0 ; i < listado_personas.length; i++) {
		let item=listado_personas[i];

		temporal_elementos=temporal_elementos+'<li class="mt-4 mb-4" onclick="ver_detalle('+i+')" >'+item.nombres+' ' +item.apellido+' <button class="btn btn-info float-right">Ver más</button></li>';

	}
	listado.innerHTML=temporal_elementos;


}

function ver_detalle(indice){
 let elemento=listado_personas[indice];
console.log(elemento.nombres)
console.log(elemento.apellido)	
console.log(elemento.correo)
console.log(elemento.telefono)
}
