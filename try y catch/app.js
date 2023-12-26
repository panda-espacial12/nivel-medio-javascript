//try y catch
try{
 afafgad   //el try tiene que estar aconpañado del catch o del finaly
}

catch(errror){ //esto muestra el error 
    if (3 > 5){
        console.log("has ocurrido un error");
    }else{
        console.log("viejo")
    }
     }finally{ 
         console.log("me muestro igual")
   
   console.log("lo siento ocurio un error de referencia")  
}

const pruebaTry = ()=>{
    try{
        return 1;
    }
    catch(e){
        return 2;
    }finally{
        return 3;
    }
}
console.log(pruebaTry())
