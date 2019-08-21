let num1=document.getElementById('num1');
let num2=document.getElementById('num2');
let num3=document.getElementById('num3');
let num4=document.getElementById('num4');

let btn=document.getElementById("ingresar");

num1.addEventListener("keyup",function(){
	num2.focus();
})
num2.addEventListener("keyup",function(){
	num3.focus();
})
num3.addEventListener("keyup",function(){
	num4.focus();
})

num4.addEventListener("keyup",function(){
	btn.focus();
})


btn.addEventListener("click",function(){
	let numero=num1.value+num2.value+num3.value+num4.value;
	//numero
	localStorage.codigo=numero;
	window.location="./tareas.html"

})