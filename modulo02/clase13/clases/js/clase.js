class Persona {
	constructor(...datos){
		this.nombre=datos[0];
		this.apellido=datos[1];
	}
	updateName(valor){
		this.nombre=valor;
	}
	updateLastName(valor){
		this.apellido=valor;
	}
	static hora(){
		console.log("hora actual"+ Date.now());
	}

}

/*
let objeto=new Persona();
console.log(objeto)
objeto.nombre="JUAN CARLOS";
objeto.apellido="RAMOS T.";*/
/*
objeto.updateName("JUAN CARLOS");
objeto.updateLastName("RAMOS TORRICCELLI");
*/
/*
console.log(objeto)*/
Persona.hora();

let objeto=new Persona("Juan","Ramos",19,"jtorriccelli1986@gmail.com");

