const sendButton = document.getElementById('snd_nota');

sendButton.addEventListener("click",()=>{
   let resultado,mensaje;
    try {
   prevRes = parseInt(document.getElementById('nota').value);
   if(isNaN(prevRes)){
    throw "gssgddsg";
   }
   mensaje = definirMensaje(prevRes);
   resultado = verufucarAoribacion(prevRes)
   }catch(e){
    resultado = "sos gracioso";
    mensaje = "te e descuebierto "
   }
    abrirModal(resultado,mensaje);
})

const definirMensaje = (pr)=>{
let resultado;
  switch(pr){ 
    case 1: resultado ="no podes ser tan hdp";
    break;

    case 2: resultado ="mu mal";
    break;

    case 3: resultado ="malisimo";
    break;

    case 4: resultado ="estas";
    break;

    case 5: resultado ="orible";
    break;

    case 6: resultado ="regular";
    break;

    case 7: resultado ="aprobado";
    break;

    case 8: resultado ="mejor";
    break;

    case 9: resultado ="bien";
    break;

    case 10: resultado ="muy bien";
    break;
    default: resultado = null;
    }
    return resultado
}
const verufucarAoribacion =(prevRes)=>{
nota1 = 8;
nota2 =5;
promedio = (nota1 + nota2 + prevRes) / 3;
if (promedio >= 7){
    return "<span class='green'>aprobado</span>"
}
return "<span class='green'>desaprobado</span>"
}
const abrirModal = (res,msg)=>{
document.querySelector(".resultado").innerHTML =res;
document.querySelector(".mensaje").innerHTML =msg;
let modal = document.querySelector(".modal_background");
modal.style.display = "flex";
modal.style.animation ="aparecer 1s forwards";
}


