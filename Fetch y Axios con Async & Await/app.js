const getName =()=>{
   let peticion = await fetch("informacion.txt");
   let resultado = await peticion.json()
    }
    


getName()