let obj=new Usuario();
let cerrar=document.getElementById('cerrar');
cerrar.addEventListener("click",function(){
	obj.deslogearUsuario();
})