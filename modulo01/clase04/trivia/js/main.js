console.log(localStorage.intentos);
if(localStorage.intentos=="2"){
	alert("ya no puedes participar");
}
else{
	
}
let intentos=localStorage.intentos-0;

let resultado=0;


let div_error=document.getElementById("error");

let btn=document.getElementById('btn-participar');
btn.addEventListener("click",function(){
	if(intentos<2){

		if(resultado==0){
			div_error.innerHTML=`
			<div class="alert alert-danger mt-4" role="alert">
	  			Elige una opcion antes de participar
			</div>`;

			//alert("Elegi una opcion antes de participar");
		}
		else{
			// evaluar la opcion elegida
			if(resultado==2){
				//alert("respuesta correcta");
				div_error.innerHTML=
				`<div class="alert alert-success mt-4" role="alert">
	  					Respuesta correcta
				</div>`;

			}
			else{
				
				intentos++;

				localStorage.intentos=intentos;
				div_error.innerHTML=`
			<div class="alert alert-danger mt-4" role="alert">
	  			Respuesta incorrecta
			</div>`;



				//alert("respuesta incorrecta")
			}

		}


	}
	else{
		alert("intentos superados , no puedes participar más")
	}
	
})

let opcion1=document.getElementById("opcion1");
opcion1.addEventListener("click",function(){
	
	limpiarOpciones();

	
	if(intentos==2){
					alert("intentos superados , no puedes participar más")
				}
				else{
					resultado=1;
					opcion1.classList.add("activa");
	div_error.innerHTML="";	
				}


})

let opcion2=document.getElementById("opcion2");
opcion2.addEventListener("click",function(){
	
	
	limpiarOpciones()


	if(intentos==2){
					alert("intentos superados , no puedes participar más")
				}
				else{
				resultado=2;	
					opcion2.classList.add("activa");
	div_error.innerHTML="";
				}
})

let opcion3=document.getElementById("opcion3");
opcion3.addEventListener("click",function(){
	
	limpiarOpciones();


	if(intentos==2){
					alert("intentos superados , no puedes participar más")
				}
				else{
	resultado=3;
	opcion3.classList.add("activa");
	div_error.innerHTML="";
				}
})

function limpiarOpciones(){
	opcion1.classList.remove("activa");
	opcion2.classList.remove("activa");
	opcion3.classList.remove("activa");
}
