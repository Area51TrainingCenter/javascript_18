let url ="https://sminnova.com/recurso_clase/api/usuario/todos";

let xhr=new XMLHttpRequest();
xhr.open("POST",url);
xhr.send();
xhr.onreadystatechange=function(){
	console.log(xhr);
	let estado=xhr.readyState;

	if(estado==4){
		if(xhr.status==200){
			console.log(xhr.response);
			let resultado=JSON.parse(xhr.response);
			console.log(resultado);
		}
	}
}
/*



// consumir url 
let registro_login="https://reqres.in/api/register";
let login="https://reqres.in/api/login";
let registro="https://reqres.in/api/users";
let users="https://reqres.in/api/users?page=1"
// datos a enviar
/*
let parametros=JSON.stringify({
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
});
*/

/*
let xhr=new XMLHttpRequest();
xhr.open("GET",users);
xhr.send();


xhr.onreadystatechange=function(){
	let estado=xhr.readyState;
	if(estado==4){
		if(xhr.status==200){
			//console.log(xhr.response);
			let resultado=JSON.parse(xhr.response);
			console.log(resultado);
			//console.log(resultado.data);
			let lista=resultado.data;
			for(let i=0;i<lista.length;i++)
			{
				console.log(lista[i]);
			}
			let temporal="";
			for( let item of lista ){
				let nombre_completo=item.first_name + " " + item.last_name;
				let foto=item.avatar;
				let email=item.email;
				let ele=`
				<div class="item">
					<img src="${foto}">
					<h2>${nombre_completo}</h2>
					<span>${email}</span>	
				</div>
				`;
				temporal=temporal+ele;

			}
			document.getElementById('listado').innerHTML=temporal;





		}
	}
}
*/

// type POST

