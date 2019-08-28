class Helpers{
	constructor(){

	}
	static getFecha(){
		this.date=new Date();
		//return now();
		//var date=new Date();
		return this.date.getDate()+"/"+this.date.getMonth()+"/"+this.date.getFullYear();
	}
	static getHora(){
		return this.date.getHours()+":"+this.date.getMinutes()+":"+this.date.getSeconds();

	}
	static convertirBajas(valor){
		return valor.toLowerCase();
	}

	static removeSpace(valor){
		let borrando_espacios=valor.split(" ");
		return borrando_espacios.join("");
	}

	static roundNumber(valor){
		return Math.round(valor);
	}
	static numeroAleatorio(valor){
		return Math.random()*valor;
	}
}