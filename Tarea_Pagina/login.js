document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Validación de los campos usuario y contraseña
    if (username === 'Alexa' && password === '12345') { 
        // Inicio de sesión exitoso
        errorMessage.textContent = ''; 
        alert('Inicio de sesión exitoso');
        // Redirige a la pagina principal de la informacion
        window.location.href='pagina.html'
    } else {
        // Inicio de sesión fallido, manda el mensaje de error 
        errorMessage.textContent = 'Usuario o contraseña incorrectos';
    }
});