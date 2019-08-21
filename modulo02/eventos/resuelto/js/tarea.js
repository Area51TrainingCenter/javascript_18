let btn=document.getElementById('registrar_tarea');
let inp_nombre=document.getElementById("nombre_tarea");


let listado=document.getElementById("listado_tareas");

let tareas=[];





btn.addEventListener("click",function(){

	let nombre=inp_nombre.value;
	

	let obj_tarea={
		nombre_tarea:nombre,
		terminada:false
	}

	tareas.push(obj_tarea);

	listarTareas();
})
function terminar_tarea(){
alert("click");
}

function listarTareas(){
	let temporal="";



	for(let item of tareas){
	
		let elemento=` <li class="list-group-item">${item.nombre_tarea}`;
		let estado="";
		if(item.terminada==true){
			estado=`<span class="terminada">Terminada</span></li>`
		}
		else{
			estado=`<button class="btn-info float-right" onclick="terminar_tarea()">Teminar Tarea</button>
							</li>`
		}


		elemento=elemento+estado;

		temporal=temporal+elemento;
	}
	listado.innerHTML=temporal;
}