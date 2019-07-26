sumaDatos();



function sumaDatos(){
	// ambito de la funcion
	var n1=10;
	var n2=30;
	var s1=n1+n2;
	console.log(s1);
} 

function sumarValores(valor1,valor2,valor3){
	var suma;
	suma=valor1+valor2+valor3;
	console.log(suma);
}

sumarValores(10,20,35);
 

//funcion con retorno
function operacion(){
	//existe la palabra return
	return 1;
}
//funcion sin retorno
function datos(){
	// no existe la palabra return
}

function calcularIGV(monto){
	igv=monto*0.18;
	return igv;
}


let igv_calculado;
igv_calculado=calcularIGV(100);

console.log(igv_calculado);



// crear una funciona que devuelva el nombre de mes el año
function nombreMes(idioma){
	let fecha=new Date();
	let indice_mes=fecha.getMonth();
	let meses=[
		"Enero",
		"Febrero",
		"Marzo",
		"Abril",
		"Mayo",
		"Junio",
		"Julio",
		"Agosto",
		"Septiembre",
		"Octubre",
		"Noviembre",
		"Diciembre"
	]

	return meses[indice_mes]
}


let mes_actual=nombreMes();
console.log(mes_actual);