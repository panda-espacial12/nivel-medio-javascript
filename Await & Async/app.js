const objeto ={
    propiedad1 : "valor1",
    propiedad2 : "valor2",
    propiedad3 : "valor3"
};

const obtenerinfromacion = ()=>{
    return new Promise((resolve,reyect)=>{
        setTimeout(()=>{resolve(objeto)},3000)

    })   
}            

const mostrarresultado = async ()=>{
    resultado = await obtenerinfromacion();
    console.log(resultado);
}        
mostrarresultado();


const obtenerinfromacion2 = (text)=>{
    return new Promise((resolve,reyect)=>{
        setTimeout(()=>{resolve(text)},3000)

    })   
}  
    
obtenerinfromacion2("tonto").then(resultado => console.log(resultado))
