class Utilitarios{
	constructor(){
		this.date=new Date();
	}
	getFecha(){
		//return now();
		//var date=new Date();
		return this.date.getDate()+"/"+this.date.getMonth()+"/"+this.date.getFullYear();
	}
	getHora(){
		return this.date.getHours()+":"+this.date.getMinutes()+":"+this.date.getSeconds();

	}
	convertirBajas(valor){
		return valor.toLowerCase();
	}

	removeSpace(valor){
		let borrando_espacios=valor.split(" ");
		return borrando_espacios.join("");
	}

	roundNumber(valor){
		return Math.round(valor);
	}
	numeroAleatorio(valor){
		return Math.random()*valor;
	}
}