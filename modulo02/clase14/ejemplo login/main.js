
let btn=document.getElementById('btn-login');
let url_login="https://sminnova.com/recurso_clase/api/usuario/login"

let formulario_login=document.getElementById('formulario');
let datos_login=new FormData(formulario_login);

btn.addEventListener("click",async function(){
	console.log("se inicia la validacion")
	await validarLogin();
	console.log("se termino la validacion");
})


async function validarLogin(){
	let estado=false;
	let usuario;
	let config={
		method:"POST",
		body:datos_login
	}
	
	let peticion= await fetch(url_login,config);
	let resultado= await peticion.json();
	
	console.log(resultado);

}

