//promesas
let nombre ="pedro";

const promesa =new Promise((resolve,reject)=>{
if (nombre !== "pedro")reject("lo siento el nombre no es pedro");
else resolve(nombre)
})

promesa.then((resultado)=>{
    console.log(resultado)
}).catch((e)=>{
    console.log(e)
})


