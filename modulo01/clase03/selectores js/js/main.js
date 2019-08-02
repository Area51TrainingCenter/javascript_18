let title=document.getElementById('title') 
title.innerText="Texto modfiicado";
// elemento directo

let title2=document.getElementsByTagName('h1');
title2[0].innerText="Texto modificado";
console.log(title2);

// arreglo de elementos

let title=document.getElementsByClassName('texto')
// arreglo de elementos

let title=document.getQuerySelector("nav.menu-site ul li")
// un solo elemento

let title=document.getQuerySelectorAll("nav.menu-site ul li")
// Arreglo de elemento 


