let url="https://sminnova.com/recurso_clase/api/usuario/todos";
let init={
	method:"POST"
}
fetch(url,init)
.then((data)=>{return data.json() })
.then((data)=>{ 
	console.log(data)
});


let agregar="https://sminnova.com/recurso_clase/api/usuarios/agregar";

let formulario=document.getElementById('formulario-registro');
let dataFormulario=new FormData(formulario);

let config_agregar={
	method:"POST",
	body:dataFormulario
}

fetch(url,config_agregar)
.then((data)=>{return data.json()})
.then((data)=>{console.log(data)});

