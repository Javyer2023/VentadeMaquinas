const formulario = document.querySelector("form");
formulario.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    //continuar
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("mail").value.trim();
    const mensaje = document.getElementById("mensaje").value;
    const atributoMail = document.getElementById("mail");
    const asteriscos = document.querySelectorAll("span");

    let procesar = false;

    if (nombre) {
        procesar = true;
        asteriscos[0].style.color = "green";
    }
    else {
        procesar = false;
        asteriscos[0].style.color ="red";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)){
        procesar = false;
        asteriscos[1].style.color ="red";
        
        atributoMail.setAttribute("placeholder", "juanperez@gmail.com");
    }
    else {
        asteriscos[1].style.color="green";
    }

    if (mensaje.length > 10) {
        asteriscos[2].style.color = "green";
    }
    else {
        asteriscos[2].style.color = "red";
        procesar = false;
        mensaje.placeholder = "Escriba su mensaje mayor a 10 caracteres";
    }

    if (procesar) {
        Swal.fire({
            title: "Enviado",
            text: "Ingreso de datos exitoso!",
            icon: "success",
            draggable: true
          });
         //reseteo el formulario y dejo los colores de los asteriscos como al inicio 
        formulario.reset();
        asteriscos.forEach((elemento) => elemento.style.color="black");
        atributoMail.removeAttribute("placeholder");
    }
    else {
        Swal.fire({
            title: "Error!",
            text: "Hay campos mal ingresados o vacios. Los mismos tienen un asterisco rojo",
            icon: "error",
            draggable: true
          });
    }
});