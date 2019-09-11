/*let obj=new Usuario();
let cerrar=document.getElementById('cerrar');
cerrar.addEventListener("click",function(){
	obj.deslogearUsuario();
})*/
let lista=document.getElementById("lista-contacto");
async function obtenerListado(){


let url="https://sminnova.com/recurso_clase/api/contacto/listado";
let datos=new FormData();
datos.append("id","24");
let peticion=await fetch(url,{method:"POST",body:datos})
let resultado=await peticion.json();
console.log(resultado);
let res=resultado instanceof Array
let temp=""
if(res){
	for(item of resultado){
			temp=temp+`<li onclick='pagar("${item.nombres}","${item.apellidos}","${item.telefono}" )' class="list-group-item">${item.nombres}  ${item.apellidos}</li>`;
	}
	lista.innerHTML=temp;
}
else{
	lista.innerHTML='<li class="list-group-item">No tienes contactos registrados</li>';
}
}
obtenerListado();



function pagar(nombre,apellido,telefono){
	$("#exampleModal").modal("show");
	console.log(nombre,apellido,telefono)

	document.getElementById("inp-nombre-contacto").value=nombre + " " + apellido;

	document.getElementById("inp-telefono-contacto").value=telefono;
}


let registrar=document.getElementById("registar-pago");
registrar.addEventListener("click",function(){
	let nombre= document.getElementById("inp-nombre-contacto").value
	let telefono=document.getElementById("inp-telefono-contacto").value
	let pago=document.getElementById("inp-monto-pago").value
	let fecha=Date.now();
	console.log(nombre,telefono,pago,fecha);
	let datos=new FormData();
	datos.append("nombres",nombre);
	datos.append("telefono",telefono);
	datos.append("monto",pago);
	datos.append("fecha",fecha);
	datos.append("id_usuario","24");

let url="https://sminnova.com/recurso_clase/api/contacto/pago";
let config={
	method:"POST",
	body:datos
}
fetch(url,config)
.then((data)=>{return data.json()})
.then((data)=>{

	console.log(data)
		$("#exampleModal").modal("hide");
});




	/*let datos=new FormData(document.getElementById("form-pago"));
	datos.append("id_usuario","24");

	console.log(datos.get("nombre_completo"));
*/
})