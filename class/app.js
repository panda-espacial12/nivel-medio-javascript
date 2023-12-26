//trabajando com classs pocas personas o pocas variables
class persona{
    constructor(nombre,intagram,twitter){
        this.nombre = nombre;
        this.intagram = intagram;
        this.twitter = twitter;
    }
} 
console.log (new persona("alexander","@alex_ander45p","@alexander_45p"))

//para incluir a una variedad mas grande usamos 

const datospersonas2 =[
                  ["alexander","@alex_ander45p"],
                  ["alejandro","@alexjandro_jodoy"],
                  ["thor","@thor_midgar45p"],
                  ["loki","@loki666"],
                  ["thrawn","@thrawn"],
];
const datospersonas2persona = [];

for (var i = 0; i <datospersonas2.length; i++){
    persona[i] =new persona(datospersonas2[i][0],datospersonas2[i][1])

}
console.log(datospersonas2)
//fin para incluir a una variedad mas grande usamos  

const obtenerpersona = (id,cb)=>{
    if(persona[id] == undefined) { // esto lo que hace es que si no la encuentra manda un mensaje
        cb("no se a encontrado la persona")
    }else{
        cb(null,persona[id].nombre)
    }
}

obtenerpersona(1,(err,persona)=>{
    if(err){
        console.log(err)
    }else{
        console.log(persona)
        console.log(persona.intagram)
    }
})
