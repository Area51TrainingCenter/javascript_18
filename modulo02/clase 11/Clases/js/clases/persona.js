class Persona{
	constructor(valor1,valor2,valor3=false){
		this.nombre=valor1;
		this.apellido=valor2;
		this.estado=valor3;
	}
	obtenerDni(){

	}
	obtenerNombreCompleto(){
		return this.nombre+" "+this.apellido;
	}
}

let obj_persona=new Persona("juan","Ramos");

console.log(obj_persona.obtenerNombreCompleto());