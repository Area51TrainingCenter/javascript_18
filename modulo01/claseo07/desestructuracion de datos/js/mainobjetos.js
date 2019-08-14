


var dato="estado";

persona.dato; // persona.dato  no existe esta propiedad 
persona[dato]; // persona["estado"]  si existe esta propiedad

persona.nombre;
persona["nombre"];

persona.apellido;
persona["apellido"]

persona.correo;
persona["correo"];
persona.nombre_completo();

let persona={
	nombre:"Jc",
	appelido:"RT",
	estado:false,
	correo:"jc@gmail.com",
	nombre_completo:function(){
		console.log("Hola");
	}
}

let{nombre,codigo=001}=persona;
console.log(nombre);
console.log(correo);

let usuario={
	nombre:"jc",
	apellido:"Rt",
	cargo:"Profesor"
}


let validarNombre=(nombre,cargo,estado=true)=>{

}
validarNombre(usuario.nombre,usuario.cargo,usuario.estado);




let validarNombre_mod=({nombre,apellido,estado=true})=>{

}

validarNombre_mod(usuario);




