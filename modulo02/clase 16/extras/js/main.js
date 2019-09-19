

function operacion(valor1,valor2){

}

//operacion(1,2);

function operaciones(...valores){
	console.log(valores) // [n valores]
}

//operaciones(1,2,3,4,5,6)












function sumar(valor1){
	console.log(valor1);
	console.log(arguments)
}

sumar(1,2,3,4,5);