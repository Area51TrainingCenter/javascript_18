let datos=["Juan Carlos",
			"Ramos Torricccelli",
			"Profesor",
			10001]
var [nombre]=datos;
// desestructurando los datos del arreglo

/*var [nombre,,,codigo]=datos;
///[nombre,apellido,cargo,codigo]=["Juan Carlos","Ramos Torricccelli","Profesor",10001]
console.log(nombre);
console.log(codigo);
*/

var [nombre,apellido,cargo,codigo,estado=true]=datos;
//console.log(estado)
 
let notas=[10,,,20];
let [nota1,nota2=0,nota3=0,nota4]=notas;




let calcular=(nombre,apellido,correo)=>{
	console.log(nombre);
	console.log(apellido);
	console.log(correo);
}

let calcular_variante=([nombre,apellido,correo,estado="activo"])=>{
	console.log(nombre);
	console.log(apellido);
	console.log(correo);
	console.log(estado);
}

let alumno=["jc","rt","jc@gmail.com"];

calcular_variante(alumno);

//caclular(alumno[0],alumno[1],alumno[2]);


//registrarDatos(datos);


function registrarDatos(nombre,apellido,cargo,codigo){
// tarea
}