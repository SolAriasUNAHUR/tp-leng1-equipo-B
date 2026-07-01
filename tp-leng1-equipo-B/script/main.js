const btnadopcion = document.getElementById("btn-adopcion");
const adopcion = document.getElementById("imp-adopcion");

btnadopcion.addEventListener("click", () =>{
    adopcion.classList.toggle("hidden")
})

let btncastracion = document.getElementById("btn-castracion");
let castracion = document.getElementById("imp-castracion");

btncastracion.addEventListener("click", () =>{
    castracion.classList.toggle("hidden")
})

let btneducacion = document.getElementById("btn-educacion");
let educacion = document.getElementById("imp-educacion");

btneducacion.addEventListener("click", () =>{
    educacion.classList.toggle("hidden")
})

