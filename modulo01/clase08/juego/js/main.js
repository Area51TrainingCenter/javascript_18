let palabra="sol";


let content_palabra=document.getElementById('palabra');

// separo la cadena en un arreglo
let letras=palabra.split("");
//let letras_resutaldo=[];
let letras_resutaldo=new Array(letras.length);
// recorro el arreglo para agregar el span
let letra_temporal="";
for(let letra of letras){
	

	letra_temporal=letra_temporal+`<span></span>`
}
content_palabra.innerHTML=letra_temporal;





let btn_jugar=document.getElementById("btn-jugar");
btn_jugar.addEventListener("click",function(){

	let letra_ingresada=document.getElementById("inp-letra").value;
	
	buscarletra(letra_ingresada);
	imprimirResultado();
})


function buscarletra(valor){ 
	//letras_resutaldo=[];
	// letras = [o,p,o,r,t,u,n,i,d,a,d]
/*
	for(let item of letras){
		if(item==valor){
			letras_resutaldo.push(item); 
		}
		else{
			letras_resutaldo.push(""); 
		}
		//letras_resutaldo=["",p,"","","","","",""];
	}*/

	for(let i=0;i<letras.length;i++){
		console.log(letras[i]);
		if(letras[i]==valor){
			letras_resutaldo[i]=valor;
			//console.log("el valor fue encontrado en la cadena");
		}
		else{

		}

	}
}

function imprimirResultado(){
	//letras_resutaldo=[o,"",o,"","","","",""]
	let letra_temporal="";
for(let letra of letras_resutaldo){
	if(letra==undefined){
		letra="";
	}

	letra_temporal=letra_temporal+`<span>${letra}</span>`
}
content_palabra.innerHTML=letra_temporal;


}










