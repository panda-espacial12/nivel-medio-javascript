// const img =document.querySelector(".prueba.jpg")
 const input = document.querySelector(".prueba.jpg")


img.addEventListener("error"),()=>{     //occure cuando hay algun error
    console.log("ha sucedido un error") //en el archivo multimedia 
}

window.body.addEventListener("a cargado el sitio"),()=>{//ocurre cuando
    console.log("ha sucedido un error")           //el objeto a cargado 
}

window.body.addEventListener("unload"),()=>{//ocurre cuando 
    console.log("te estas por ir del sitio")      //te estas llendo 
                                                 //del sitio 
}

window.body.addEventListener("resize"),()=>{//ocurre cuando
    console.log("se ha actualizado la resolucion")//cambia la resolucion 
}

window.body.addEventListener("scroll"),()=>{//ocurre cuando
    console.log("se ha scrolleado")//se desplaza la barra de 
                                   //elementos
}

input.addEventListener("select"),(e)=>{//ocurre cuando
    console.log(e.querySelectorStart)
    console.log("se ha selecionado")//
}




