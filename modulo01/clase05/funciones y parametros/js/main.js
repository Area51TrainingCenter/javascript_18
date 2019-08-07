
function suma_3(valor1,valor2,valor3){
	let suma=valor1+valor2;
	return suma;
}

function suma_2(valor1,valor2){
	let suma=valor1+valor2;
	return suma;
}

let resultado1=suma_3(12,39,34);



let resultado2=suma_2(12,39);



function tarea(valor1,valor2,valor3){

 // valor existe dentro de la función
 console.log(valor1); //10
 console.log(valor2); //30
 console.log(valor3); //20
}


// tarea(10,30,20);



function tarea1(valor){
	console.log(valor) // [1,2,3];
}

let numeros=[1,2,3,6,4,56,45,45]; // arreglo


//tarea1(numeros);




function calcular_func(...valores){
	console.log(valores) //[1,23,45,778,3,4,"hola","adios"]
}

//calcular_func(1,23,45,778,3,4,"hola","adios");


function sumar_func(...datos){
	let acumulado=0;

	console.log(datos); //[1,3,5,673,5,7,3,35,6];
	
	for(let i=0;i<datos.length;i++){
		//console.log(i) // 0 -- 4
		//console.log(datos[i]); // datos[0]
		acumulado=acumulado+datos[i];
	}

	console.log(acumulado);

}

sumar_func(1,2,4,10,30) 
//sumar_func(1,23,34);
//sumar_func(1,3,5,673,5,7,3,35,6);



function calcularIGV(monto,igv=0.18){
	let igv=monto*igv;
	return igv;
}

calcularIGV(100,0.19);
















