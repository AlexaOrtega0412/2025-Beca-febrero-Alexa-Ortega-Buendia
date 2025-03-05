document.addEventListener('DOMContentLoaded', function() {
    // Validación del formulario de contacto
    const form = document.querySelector('form');
    if (form) { // Verifica si el formulario existe
        form.addEventListener('submit', function(event) {
            let nombre = document.getElementById('nombre').value;
            let email = document.getElementById('email').value;
            let mensaje = document.getElementById('mensaje').value;

            if (nombre.trim() === '' || email.trim() === '' || mensaje.trim() === '') {
                alert('Por favor, completa todos los campos.');
                event.preventDefault(); // Evita que se envíe el formulario
            } else if (!isValidEmail(email)) {
                alert('Por favor, introduce un email válido.');
                event.preventDefault();
            }
        });

        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
    }

    const details = document.querySelectorAll('details');
    details.forEach(detail => {
        const summary = detail.querySelector('summary');
        if (summary) { 
            summary.addEventListener('click', function(event) {
                
            });
        }
    });

    
    const header = document.querySelector('header');
    if (header) { 
        header.style.transition = 'background-color 0.5s ease';
        header.addEventListener('mouseover', function() {
            header.style.backgroundColor = '#e0e0e0';
        });
        header.addEventListener('mouseout', function() {
            header.style.backgroundColor = '#789DBC';
        });
    }

   
    const articleInicio = document.querySelector('#inicio article');
    if (articleInicio) {
        const imagenes = ['./accesorios.png', './alimentos.png', './baño.png'];
        let indiceImagen = 0;

        articleInicio.addEventListener('click', function() {
            const imagenPrincipal = articleInicio.querySelector('img');
            if (imagenPrincipal) { 
                indiceImagen = (indiceImagen + 1) % imagenes.length; 
                imagenPrincipal.src = imagenes[indiceImagen]; 
            }
        });
    }

    const productos = [
        {
            nombre: 'Alimento Seco Premium',
            descripcion: 'Alimento completo para perros adultos.',
            detalles: ['Alta digestibilidad', 'Con vitaminas y minerales', 'Sabor irresistible']
        },
        {
            nombre: 'Juguete Interactivo',
            descripcion: 'Juguete para estimular la mente de tu mascota.',
            detalles: ['Resistente', 'Diferentes niveles de dificultad', 'Diversión garantizada']
        },
    ];

    const listaProductos = document.getElementById('listaProductos');
    const plantillaProducto = document.getElementById('plantillaProducto');

    productos.forEach(producto => {
        const clon = plantillaProducto.content.cloneNode(true);
        clon.querySelector('h3').textContent = producto.nombre;
        clon.querySelector('p').textContent = producto.descripcion;
        const detalles = clon.querySelectorAll('li');
        producto.detalles.forEach((detalle, index) => {
            detalles[index].textContent = detalle;
        });
        listaProductos.appendChild(clon);
    });
});