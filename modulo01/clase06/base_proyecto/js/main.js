
//https://sminnova.com/recurso_clase/api/usuario/todos
/*
let propiedad={
nombres:"Diego Carlos",
apellidos:"Ramos Torriccelli",
correo:"Diego@gmail.com",
password:"***123",
}

let FD=new FormData();
FD.append("nombres","Diego");
FD.append("apellidos","Ramos Torriccelli");
FD.append("correo","DiegoRt@gmail.com");
FD.append("password","****");


let registro="https://sminnova.com/recurso_clase/api/usuarios/agregar";
var xhr=new XMLHttpRequest();
xhr.open("POST",registro);
xhr.send(FD);


xhr.onreadystatechange=function(){
	console.log(xhr);
	if(xhr.readyState==4){

	}
}
*/
/*

let listado="https://sminnova.com/recurso_clase/api/usuario/todos";
var xhr=new XMLHttpRequest();
xhr.open("POST",listado);
xhr.send();
xhr.onreadystatechange=function(){
	console.log(xhr);
	if(xhr.readyState==4){
		console.log("listado de registros");
		console.log(JSON.parse(xhr.response));
	}
}
*/


/*

let login = "https://sminnova.com/recurso_clase/api/usuario/login";

correo
password
*/


let btn=document.getElementById('btn-registrar');

btn.addEventListener("click",function(){
	//let nombres=document.getElementById('inp-nombres').value;
	let formulario=document.getElementById('datos-registro')
	let datosFormulario=new FormData(formulario);

	let registro="https://sminnova.com/recurso_clase/api/usuarios/agregar";

	let xhr=new XMLHttpRequest();
	xhr.open("POST",registro);
	xhr.send(datosFormulario);

	xhr.onreadystatechange=function(){
		if(xhr.readyState==4){
			if(xhr.status==200){
				console.log(xhr.response);
			}
		}
	}
	//datosFormulario.append("hora",now());


	//datosFormulario.append("nombre","JC")

})


let btn_login=document.getElementById('btn-login');
btn_login.addEventListener("click",function(){
	let login="https://sminnova.com/recurso_clase/api/usuario/login";
	let formulario_login=document.getElementById('datos-login');
	let datos_login=new FormData(formulario_login);

	let xhr=new XMLHttpRequest();
	
	xhr.open("POST",login);
	xhr.send(datos_login);

	xhr.onreadystatechange=function(){
		if(xhr.readyState==4)
		{
			if(xhr.status==200){
				let resultado=JSON.parse(xhr.response);
				if(resultado.length==1){
					console.log("usuario existe");
					window.location="https://www.google.com";
				}
				else{
					
				}
			}
		}
	}

})
