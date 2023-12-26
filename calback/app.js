//calback es una funcion que llama a otra funcion 

function prueba (calback){//esto es una fuction 
 calback("pedro");        //esto ejecuta la fuction
}

function decirnombre(nombre){
    console.log(nombre)
}

prueba(decirnombre)
//fin de calback que es una funcion que llama a otra funcion 


class persona{
    constructor(nombre,intagram,twitter){
        this.nombre = nombre;
        this.intagram = intagram;
        this.twitter = twitter;
    }
} 
console.log (new persona("alexander","@alex_ander45p","@alexander_45p"))


