

let url="http://www.login.com";
fetch(url)
.then((data)=>{return data.json()})
.then((data)=>{
	//data // true o false

	let url_datos="http://www.datos.com/registrados";

	if (data==true){
		fetch(url_datos)
		.then((data)=>{return data.json()})	
		.then((data)=>{
			console.log(data)
			data.rol
			if(data.rol=="ADMIN"){
				fetch()
				.then((data)=>{ return data.json()})
				.then((data)=>{ console.log(data)});

			}
		})
	}



});















/*
let peticion=fetch(url) // promesa

let resultado=peticion.then((data)=>{
	return data.json(); // convertir el resultado en json PROMESA
}); //
peticion.catch(); //

resultado.then((data)=>{
	console.log(data);
})
resultado.catch()


let promesa=new Promise(()=>{
	//resolve();
	//reject();
})
promesa.then(()=>{}) // si ejecuta resolve
promesa.catch(()=>{}) // promesa ejecuta reject
*/


/*
let tarea1= tarea1();
let tarea2=tarea2();
let tarea_25=fetch();
let tarea3=tarea3();
tarea_25
*/








async function calcularArea(){
	//await
}



async function consultarDatos(){

	let login=await fetch(url_login);
	if(login==true){
		let datos=await fetch(url_datos);
		
		if(datos.rol=="admin"){
			let rol=await fetch(url_rol);		
		}
	}
	

	return [login,datos,rol];
}





async function calcularArea(){
 let valor=0;
 valor = await setTimeout(function(){
		return 3*3;		
	},5000)

return valor;
}


let area=calcularArea();


area.then((valor)=>{console.log(valor)});
area.catch((error)=>{console.log(error)})











async function obtenerDatosDNI(){
	let url="http:www.dni/consultardni/jc"; //
	let peticion=await fetch(url)
	let _dni= await peticion.json();
	return _dni // 45160498;	
}
/*async function iniciarmiprograma(){

let respuesta=await obtenerDatosDNI(); // promesa que contiene el resultado

}

iniciarmiprograma();
*/
// funcion autoinvocable
(async function(){

let respuesta=await obtenerDatosDNI(); // promesa que contiene el resultado

})()













