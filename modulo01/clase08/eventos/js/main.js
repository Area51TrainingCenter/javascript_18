let texto="Juan";
console.log(texto.indexOf("1"));

let resultado_busqueda=[];
let datos=[
	{title:"Lince",detalle:"detalle1"},
	{title:"San isidro" ,detalle:"detalle1"},
	{title:"Miraflores" ,detalle:"detalle1"},
	{title:"Jesus Maria" ,detalle:"detalle1"},
	{title:"La molina" ,detalle:"detalle1"},
	{title:"Surco" ,detalle:"detalle1"},
	{title:"Breña" ,detalle:"detalle1"},
	{title:"La victoria" ,detalle:"detalle1"},
	{title:"Pueblo Libre" ,detalle:"detalle1"}
	]
let temporal="";
for (let item of datos){
	temporal=temporal+`<li class="list-group-item">${item.title}</li>`;
}
let lista=document.getElementById('listado');
lista.innerHTML=temporal;



let inp_buscar=document.getElementById("buscar");
inp_buscar.addEventListener("keyup",function(){
	let valor=inp_buscar.value;
	console.log(valor);
	buscarValor(valor);
	listarResultados();

})
/*
inp_buscar.addEventListener("keyup",function(){
	console.log("presionando la tecla");
})

inp_buscar.addEventListener("keydown",function(){
	console.log("presionando la tecla");
})
*/


function buscarValor(texto){
  resultado_busqueda=[];
  
  for(let item of datos){
  		 let nombre_distrito=item.title.toLowerCase();


  		 let estado=nombre_distrito.indexOf(texto.toLowerCase()); // devolver valor entero o -1;
  		 if(estado<0){
  		 	// no se encuentra en esta cadena
  		 }
  		 else{
  		 	resultado_busqueda.push(item);
  		 	// estado si es parte de la busqueda;
  		 }
  }

}


function listarResultados(){
	let temporal="";
	for (let item of resultado_busqueda){
	temporal=temporal+`<li class="list-group-item">${item.title}</li>`;
	}
	lista.innerHTML=temporal;
}


