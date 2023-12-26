//let alto = window.screen.availHeight;
//let ancho = window.screen.availWidth; 
//
//conprar = confirm(`el alto es ${alto}, el ancho es ${ancho}`);

//if(conprar){
  //  alert("compra realizada exitosamente")
//}else{
  //  alert("compra cancelada")
//}

let href = window.location.href;
let pathame = window.location.pathname;
let hostname = window.location.hostname;
let protocol = window.location.protocol;

let html =`protocol: <b> ${protocol}</b></b><br>`
html +=`hostname <b>pathame ${hostname}</b></b><br>`
html +=`pathame <b>pathame ${pathame}</b></b><br>`
html +=`url completa: <b>pathame ${href}</b></b><br>`

document.write(html)

