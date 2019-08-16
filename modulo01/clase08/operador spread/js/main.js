function sumar(...valores) // parametro rest aparece en la declaracion de la funcion
{
	console.log(valores); // [ n elementos]

}

sumar(1,2,3,4,65,4,5,6,3,3);


let notas=[19,10,18];

console.log(...notas); // operador spread , aparece en cualquier parte del codigo 


let notas_finales=[10,13,...notas]; // [10,13,19,10,18];
console.log(notas_finales);



function calcular(...valor){
	console.log(valor); // [[10,20,14]];
}

let valores=[10,20,14,10,45];
// calcular(valores); [10,20,14,10,45]
calcular(valores);
// calcular(...valores); 10,20,14,10,45
calcular(...valores);





