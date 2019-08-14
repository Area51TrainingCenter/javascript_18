/*
let alumno1={
	nombre:"Juan",
	apellido:"Rt",
	codigo:"0001",
	estado:true
}


let alumno2={
	nombre:"Maria",
	apellido:"Rt",
	codigo:"0002",
	estado:false
}



let alumno3={
	nombre:"Luis",
	apellido:"Rt",
	codigo:"0002",
	estado:true
}


let listado_alumnos=[alumno1,alumno2,alumno3]

*/

let listado_alumnos=[{
	nombre:"Juan",
	apellido:"Rt",
	codigo:"0001",
	estado:true
}
,{
	nombre:"Maria",
	apellido:"Rt",
	codigo:"0002",
	estado:false
}
,{
	nombre:"Luis",
	apellido:"Rt",
	codigo:"0003",
	estado:false
}
]

listado_alumnos.push({
	nombre:"Martín",
	apellido:"Rt",
	codigo:"0004",
	estado:false
})

let notas=[13,10,17];

notas.forEach(function(valor){

})
listado_alumnos[0].nombre;
listado_alumnos[0].estado;

for(let item of listado_alumnos) {

	if(item.estado==true){
		console.log("El nombre del elemento es:")
		console.log(item.nombre);
		console.log("y su estado es:")
		console.log(item.estado);	

	}
	


}

let persona={
	nombre:"jc",
	apellido:"rt",
	edad:22
}

for (let item in persona){
	console.log(item)
}

