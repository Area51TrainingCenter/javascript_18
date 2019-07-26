var dato1;
dato1=30;
var dato2=20;
var texto="Bienvenido";
var texto2=texto;
var estado=true;
var estado=false;

var fecha=new Date();
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Date

fecha.getFullYear();

var anio=fecha.getFullYear();
var mes=fecha.getMonth();
var dia=fecha.getDate();
//25/07/2019

var fecha_formato=dia+"/"+mes+"/"+anio;

var horas=fecha.getHours();
var minutes=fecha.getMinutes();
var seconds=fecha.getSeconds();
var hora_formato=horas+":"+minutes+":"+seconds;
console.log(hora_formato);

var nombre1;
var nombre2;
var nombre3;

var listado;
listado=["Diego","Carlos","Martin"]; // 3 valores
//listado=["Diego,Carlos,Martin"] // 1

var datos=["Juan",20,true,"RT",20];

var nuevos_datos=["juan","RT",datos];



var listado;
listado=["Diego",
		 "Carlos",
		 "Martin"];
		 var ultimo_indice=listado.length-1;
		 listado[ultimo_indice]
console.log(listado);
//el indice de un elemento es igual a su posicion -1 
/*
console.log(listado[0]);
console.log(listado[1]);
console.log(listado[2]);
console.log(listado[3]);
*/
// listado.length  -> cantidad de elementos del arreglo
listado.push("Juan"); // agrega un elemento al final de la lista
console.log(listado);
listado.unshift("Mariana") // agrega un elemento al inicio de la lista
console.log(listado);


listado.pop(); // elimina el último elemento de la lista ;
console.log(listado);
listado.shift(); // elimina el primer elemento de la lista;
console.log(listado);

var datos=["Telefono1",2000,1239,"nuevo",1990];
datos[0];
datos[4];

var telefono={
	marca:"Apple",
	precio:2000,
	codigo:1239,
	estado:"nuevo",
	fecha_fabricacion:1990,
	activado:false,
	promociones:["L","M","V"]
}

console.log(telefono);
console.log(telefono.marca);
console.log(telefono.codigo);
console.log(telefono.promociones[2]);