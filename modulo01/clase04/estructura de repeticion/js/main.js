var dato;
dato=4;

dato=dato+5;
dato+=5


dato // 9


let dias=[
	"Domingo",
	"Lunes",
	"Martes",
	"Miercoles",
	"Jueves",
	"Viernes",
	"Sabado",
	"Feriado"
]
console.log("cantidad de elementos en el arreglo: " + dias.length);
/*dias[0];
dias[1];
dias[2];
dias[3];
dias[4];
dias[5];
dias[6];
*/

let lista=document.getElementById('dias-semana');
let elemento="";
for(let i=0;i<dias.length;i++){
		elemento=elemento+"<li>" +dias[i] +"</li>";


	console.log(dias[i]);
	// console.log(dias[0])
}
lista.innerHTML=elemento;
console.log(elemento)


/*
suma(4,5)
function suma(valor1,valor2){
 // ambito de la funcion
 var suma =valor1+valor2;

}
*/

let alumno1={
	 nombre:"JC",
	 apellidos:"RT",
	 estado:true,
	 correo:"jc@gmail.com"
}

let alumno2={
	nombre:"Diego",
	apellidos:"RT",
	 estado:true,
	 correo:"d@gmail.com"
}

let alumnos=[alumno1,alumno2]


for (var i = 0; i <alumnos.length; i++) {
	console.log(alumnos[i].estado)
	console.log(alumnos[i].correo)

}




