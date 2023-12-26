const tenporizador = setTimeout(() => { 
    document.write("hola1")//primer parametro 
}, 2000);//segundo parametro el tiempo de aparicion


// clearTimeout(tenporizador) //evita que se ejecute


const Intervalo =setInterval(()=>{ //lo ejecuta infinas veces
        document.write("hola 2")//primer parametro 
    },2000);//segundo parametro el tiempo de aparicion
clearInterval(Intervalo)//hace que se pare la ejecucion del intervalo


//setTimeout(()=>{            //
//   clearInterval(Intervalo)//se para de jecutar despues de 
//},5000)                     //tantos segundo


