if(localStorage.login=="true"){
	window.location="./listado.html"
}
else{
	
}

/*
4>3 = true
4>4 = false
4 >= 4 = true
4 == 4 true // verifica el valor
4 === '4'  false
4 != 3 true

&&  y 
||  o

(4>3 && 4>2 && 4>5) 
(true && true && false)
(false)

(4>3 || 4>2 || 4>5)
(true || true || false)
(true)


valor1="admin"
valor2="1234"

(valor1=="admin" || valor2=="123")

(true)



*/
/*
let num1=13;
let num2=10;
if(num1>num2){
	console.log('num 1 es mayor');
	 // codigo a ejecutar si la condicion es true
}	
else{
	console.log("num2 es mayor")
	// codigo a ejecutar si la condicion es false
}
*/

let registro=document.getElementById('inp-registrar');
registro.addEventListener("click",function(){
	//event.preventDefault();
	let inp_usuario=document.getElementById('inp-usuario').value;
	let inp_password=document.getElementById('inp-password').value;

	//inp_usuario.value
	//inp_password.value

	//let valor_usuario=document.getElementById('inp-usuario').value;

	// mensaje usuario correcto

	// mensaje de usuari incorrecto
	if(inp_usuario=="admin" && inp_password=="123"){
		//console.log("datos correcto");
		localStorage.login=true;
		window.location="./listado.html";
	}
	else{
		let error=document.getElementById('mensaje-error')
		error.style.display="block";
		limpiarDatos();
	}



})

let inp_usuario=document.getElementById('inp-usuario');

inp_usuario.addEventListener("focus",function(){
	let error=document.getElementById('mensaje-error')
	error.style.display="none";
})


let inp_password=document.getElementById('inp-password');
inp_password.addEventListener("focus",function(){
	let error=document.getElementById('mensaje-error')
	error.style.display="none";
})



function limpiarDatos(){
	let inp_usuario=document.getElementById('inp-usuario');
	let inp_password=document.getElementById('inp-password');
	inp_usuario.value="";
	inp_password.value="";
	
}



