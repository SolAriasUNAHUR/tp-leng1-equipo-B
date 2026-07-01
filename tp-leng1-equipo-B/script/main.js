const btnadopcion = document.getElementById("btn-adopcion");
const adopcion = document.getElementById("imp-adopcion");

btnadopcion.addEventListener("click", () =>{
    adopcion.classList.toggle("hidden")
})

const btncastracion = document.getElementById("btn-castracion");
const castracion = document.getElementById("imp-castracion");

btncastracion.addEventListener("click", () =>{
    castracion.classList.toggle("hidden")
})

const btneducacion = document.getElementById("btn-educacion");
const educacion = document.getElementById("imp-educacion");

btneducacion.addEventListener("click", () =>{
    educacion.classList.toggle("hidden")
})

