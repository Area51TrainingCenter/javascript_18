var datos=["jc","rt","profesor"];
datos // ["jc","rt","profesor"];

var datos=[1];
datos // [1];


var datos2=new Array("uno","dos","tres");
datos2 // ["uno","dos","tres"]

var datos2=new Array(3);  // la cantidad de elementos que tiene ese arreglo
datos2 //[, , ] 


datos2.push(1);
datos2 //[, , ,1] 
//console.log(datos2);

datos2.push(2);
datos2 //[, , ,1,2] 
//console.log(datos2);
datos2[0]=44;

datos2 //[44, , ,1,2] 







let datos_arreglo=[];

// agregar  al final de arreglo

datos_arreglo.push(4) // devuelve la longitud del arreglo 1

// [4]
// agregar valores al inicio
 
datos_arreglo.unshift(2) //  devulve la longitud del arreglo 2
 
// [2,4];

let dias=["lun","mar","mie","jue","vie","sab","dom"]
//metodo pop quita el ultimo elemento de la lista. retorna el contenido eliminado
let elemento_eliminado=dias.pop();
// ["lun","mar","mie","jue","vie","sab"]
// metodo shift  quita el primer elmenento de la lista. retorna el contenido eliminado  
let elemento_eliminado_2=dias.shift();

/*
let datos=["Jc","Rt","jc@gamil.com"]

datos[0] => Jc
datos[1] => Rt
datos[2] => jc@gmail.com

datos["nombre"]=>Jc
datos["apelliods"]=>Rt
datos["correo"]=>"jc@gmail.com"

$lista=array(nombre=>Jc,appelido=>rt);
$lista["nombre"]
*/



let dato1=[2,3,4];
console.log(typeof dato1);


console.log(Array.isArray(dato1));

console.log(dato1.constructor.toString().indexOf("Array")>-1);

console.log(dato1 instanceof Array);


dato1.length;  // longitud de elementos de un arreglo 



// Map
let numeros=[3.5,8.4,34.3,4.4];

let enteros=numeros.map(function(num){
	return Math.round(num);
})

console.log(enteros);



let palabras=["uno","cinco","seis"]
let resultado=palabras.filter(function(valor){
	let estado=false;

	if(valor=="cinco"){
		estado=true;
	}
	return estado;
})


console.log(resultado);

/*
let notas=[14,16,17,10]

let encontrado=notas.find(function(elemento){
	return elemento>15
})
console.log(encontrado);
*/

let notas=[14,16,17,20]

let encontrado=notas.findIndex(function(elemento){
	return elemento>16
})
console.log(encontrado);




let datos_semana=["lun","mar","mie","jue","vie","sab","dom"];
/*for(let i=0;i<7;i++){
	console.log(datos_semana[i])
}
*/


datos_semana.forEach(function(valor){
	console.log(valor);
})

console.log(datos_semana.join(","));


let dias_string="lun,mar,mie,jue,vie,sab,dom";
let dias_modificado=dias_string.split("")


let fecha="13/08/2019"; 
console.log(dias_modificado);
let datos_fecha=fecha.split("/")
datos_fecha [13,08,2019]
datos_fecha[2];
datos_fecha[0]
let buscar="LUN";
 // lun 
console.log(dias_string.includes(buscar.toLowerCase())); // true




for(let i=0;i<0;i++){

}











