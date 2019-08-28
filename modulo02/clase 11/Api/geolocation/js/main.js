let ubicacion=navigator.geolocation;
/*
ubicacion.getCurrentPosition(function(data){
	console.log(data);
},function(error){
	console.log(error)
});
*/

function exito(data){
	console.log("esta funcion se llama cuando el navegador acepto el uso de la posicion")
	console.log(data.coords.latitude);
	console.log(data.coords.longitude);

	pintar_mapa(data.coords.latitude,data.coords.longitude)
}
function error(data){
	console.log("Esta funcion se llama cuando el navegador no acepta el uso de la posicion");
}
let opciones={
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0
}

ubicacion.getCurrentPosition(exito,error,opciones);
let id_escucha1=ubicacion.watchPosition((data)=>{
	
	pintar_mapa(data.coords.latitude,data.coords.longitude)


},(error)=>{
	console.log(error)
})


// **  llego a la ruta destino **/
ubicacion.clearWatch(id_escucha1);

/*
setInterval(function(){
	console.log(ubicacion)
},10000)
AIzaSyATGQZzpCce9cWZTLhhwTG-FLcnUUMDDpM
*/
// getCurrentPosition(function exito,function error,option)


function pintar_mapa(latitud,longitud){

	 let elemento=document.getElementById("mapa");
        let options={
          center:{lat:latitud, lng: longitud},
          zoom:12
        }         
        let mapa=new google.maps.Map(elemento,options);
        // mapa virtual de lo que estas viendo


        let opciones_marker={
          position:{lat:latitud, lng: longitud},
          map:mapa
        }


        let marker=new google.maps.Marker(opciones_marker)
}