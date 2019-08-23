
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBryurBCjqTOdDk4OD_hUZuc3GMXpByD5s",
    authDomain: "democlase-9be36.firebaseapp.com",
    databaseURL: "https://democlase-9be36.firebaseio.com",
    projectId: "democlase-9be36",
    storageBucket: "",
    messagingSenderId: "1082219424850",
    appId: "1:1082219424850:web:64cdbf087f80b717"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  let bd=firebase.database();

  let btn=document.getElementById('registrar_tarea')
  let nombre=document.getElementById("nombre_tarea");
  let listado=document.getElementById("listado_tareas");

  btn.addEventListener("click",function(){
    
    let obj={
      nombre_tarea:nombre.value,
      estado_tarea:false
    }
    bd.ref("/tareas").push(obj);

  })
  let ref_listado=bd.ref("/tareas");
  ref_listado.on("value",function(data){
      
      let valores=data.val();
      temporal="";
      for(let propiedad in valores){
        let tarea=valores[propiedad];
        temporal=temporal+`<li class="list-group-item">${tarea.nombre_tarea}</li>`
      }

      listado.innerHTML=temporal;
  })
