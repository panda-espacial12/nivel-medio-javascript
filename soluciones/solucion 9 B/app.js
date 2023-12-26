let alumno =[{
    nombre: "alexander seisdedos",
    email: "alexsanderseisdedos@gmail.com",
    materia: "matematica"
},]

alumno =[{
    nombre: "peter parker",
    email: "peterbyparker@gmail.com",
    materia: "ficica"
},]

alumno =[{
    nombre: "thrawn nuruodo ",
    email: "thrawnnuruodo@gmail.com",
    materia: "literatura"
},]

alumno =[{
    nombre: "anakin skywalker",
    email: "anakinskywalker@gmail.com",
    materia: "calculo"
},]

alumno =[{
    nombre: "luk skywalker",
    email: "lukskywalker@gmail.com",
    materia: "geografia"
},]

for (alumno in alumno){
    let datos = alumno[alumno];
    let nombre  = datos[nombre]
    let email = da[email]
    let htmlcode =' 
    <div class="grid-container">
    <div class="grid-item nombre">${nombre}</div>
<div class="grid-item email">${email}</div>
    <div class="grid-item materia">${materia}</div>
    <div class="grid-item semana">
        <select  class="semana-elegida">
          <option value="1">semana 1</option>
          <option value="2">semana 2</option>
        </select>
    </div>'
document.querySelector(".grid-container").innerHTML+= htmlcode;
}

