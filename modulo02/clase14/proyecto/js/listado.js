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
			temp=temp+`<li class="list-group-item">${item.nombres}  ${item.apellidos}</li>`;
	}
	lista.innerHTML=temp;
}
else{
	lista.innerHTML='<li class="list-group-item">No tienes contactos registrados</li>';
}
}
obtenerListado();