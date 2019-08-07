/*
let dni;
let estado_financiero=consultarEstado(dni) 

if(estado_financiero){
	credito="aceptado"
}
else{
	credito="rechazado";
}

console.log(credito);




function consultarEstado(){
	// validacion con servicios de SBS;

	//demora 10 segundo en resolver;
}
*/

$("#cargarDatos").click(function(){

	let configuracion={
		url:"https://jsonplaceholder.typicode.com/users",
		type:"get",
		success:function(data){
			console.log("exitosa")
			console.log(data);
			for(let i=0;i<data.length;i++){
				console.log(data[i].name)
				$("#listado").append("<li>"+data[i].name+"</li>");
			}
			// data equivale a la informacion que es devuleta
		},
		error:function(data){
			console.log("error")
			// data equivale al contenido del error 
		},
		complete:function(data){
			console.log("la petición finalizo")
			// se ejecuta cuando termina la operacion
		}
	}


	$.ajax(configuracion);



})


$.ajax(url);

XMLHttpRequest










