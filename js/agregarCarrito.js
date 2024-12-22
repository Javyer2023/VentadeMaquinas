document.addEventListener("DOMContentLoaded", () => {
    
    const botonesAgregar = document.querySelectorAll("input");
    console.log(botonesAgregar);
    
    botonesAgregar.forEach(boton => {
        
        boton.addEventListener("click", (event) => {
            event.preventDefault();

            // Obtener datos del producto
            const nombre = boton.getAttribute("data-nombre");
            const precio = boton.getAttribute("data-precio");
            console.log(nombre);
            console.log(precio);

            // Obtener el carrito actual de localStorage
            // dame el item carrito de la memoria local del navegador y sino dame un array vacio
            const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
            
            
            // Agregar el producto al carrito
            carrito.push({ nombre, precio });

            // Guardar el carrito actualizado en localStorage
            localStorage.setItem("carrito", JSON.stringify(carrito));

            Swal.fire({
                title: "Agregado al carrito",
                text:`${nombre}`,
                icon: "success",
                draggable: true
              });
            //alert(`${nombre} agregado al carrito.`);
        });
    });
});
