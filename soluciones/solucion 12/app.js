const materiasHTML = document.querySelector(".materias")

const materias = [
    {
        nombre:"lengua",
        nota: 7
    },{
        nombre:"matematica",
        nota: 8
    },{
        nombre:"programacion",
        nota: 9
    },{
        nombre:"rexona",
        nota: 10
    },{
        nombre:"ingles",
        nota: 7
    },
];


const obtenerMateria = (id)=>{
    return new Promise((resolve,reyect)=>{
    materia = materias[id];
    if (materia == undefined) reyect("la materia no existe");
    else resolve(materia);
    })
}

const devolverMateria = async ()=>{
    let materia = []; 
    for (var i = 0; i < materias.length; i++){
        materia[i] = obtenerMateria(i)
        materia[i] = await obtenerMateria(i);
        let newHTMLcode ='
        '<div class="materia">'
'           <div class="nombre">${materias[i].nombre</div>'
'           <div class="nota">2</div>'
        </div
        
    }
}

devolverMateria()
