console.log("¡El archivo form-contacto.js se cargó correctamente!");

const name = document.getElementById("name");
const correo = document.getElementById("correo");
const mensaje = document.getElementById("mensaje");
const form = document.getElementById("register-form");
const cartel = document.getElementById("resultado");

form.addEventListener('submit', function (e) {
    
    e.preventDefault();

    if (name.value.trim() === "" || correo.value.trim() === "" || mensaje.value.trim() === "") {
        cartel.textContent = "Error: Todos los campos son obligatorios.";
        cartel.style.color = "red";
        return; // Frena el código acá si hay error//
    }

    if (!correo.value.includes("@") || !correo.value.includes(".")) {
        cartel.textContent = "Error: ingrese un correo válido (ejemplo@dominio.com)";
        cartel.style.color = "red";
        return; // Frena el código acá si hay error//
    }

    cartel.textContent = "¡Formulario enviado con éxito!";
    cartel.style.color = "green";
    
    form.reset(); // Limpia los campos!!!//
    
    

});   




