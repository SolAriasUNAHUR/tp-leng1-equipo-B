console.log("¡El archivo form-contacto.js se cargó correctamente!");

const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const telefono = document.getElementById("telefono");
const mensaje = document.getElementById("mensaje");
const form = document.getElementById("register-form");
const cartel = document.getElementById("resultado");

form.addEventListener('submit', (e) => {
    
    e.preventDefault();

    // Limpieza de los campos de error antes de validar 
    const todosLosCampos = form.querySelectorAll('input, textarea');

    todosLosCampos.forEach(campo => {
        campo.classList.remove("is-invalid"); 
        // quitamos el mensaje de erro para cada campo
        const mensajeError = campo.nextElementSibling;
        if (mensajeError && mensajeError.classList.contains('mensage-error')) {
            mensajeError.textContent = "";
        }
    });
    cartel.textContent = ""; // Limpiamos el mensaje de resultado antes de validar

    
    // Aplicamos la clase de Error a los campos que no pasan la validacion HTML
    const invalidos = form.querySelectorAll(':invalid');
    
    if (invalidos.length > 0) {
        invalidos.forEach(campo => {
            campo.classList.add("is-invalid"); //aplica la clase de error a los campos invalidos
            const mensajeError = campo.nextElementSibling;
            if (mensajeError && mensajeError.classList.contains('mensage-error')) {
                mensajeError.textContent = campo.validationMessage; //muestra el mensaje de error para cada campo
                mensajeError.style.color = "red";
            }
        });
        
        
        //Aplicamos la clase de Error a los campos que no pasan la validacion personal
        if (telefono.value.length < 10) {
            telefono.classList.add("is-invalid");
            const mensajeError = telefono.nextElementSibling;
            if (mensajeError && mensajeError.classList.contains('mensage-error')) {
                mensajeError.textContent = "El número de teléfono debe tener al menos 10 dígitos.";
                mensajeError.style.color = "red";
            }
        }
        
        if (nombre.value.length < 3) {
            nombre.classList.add("is-invalid");
            const mensajeError = nombre.nextElementSibling;
            if (mensajeError && mensajeError.classList.contains('mensage-error')) {
                mensajeError.textContent = "El nombre debe tener al menos 3 caracteres.";
                mensajeError.style.color = "red";
            }
        }
        
        return; // No envia el formulario si hay error//
    }

    cartel.textContent = "¡Enviado! Pronto nos pondremos en contacto contigo.";
    cartel.style.color = "green";
    
    form.reset(); // Limpia los campos// 

    
});

form.addEventListener('input', (e) => {
    const campo = e.target;
    
    // Si el campo que se está editando tiene la clase de error, se la quitamos
    if (campo.classList.contains('is-invalid')) {
        campo.classList.remove('is-invalid');
    }
});


