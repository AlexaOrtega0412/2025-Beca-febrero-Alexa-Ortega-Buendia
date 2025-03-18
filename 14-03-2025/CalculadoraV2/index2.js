document.addEventListener("DOMContentLoaded", () => {
    const pantalla = document.querySelector(".pantalla");
    const botones = document.querySelectorAll(".btn");

    let operacion = ""; 

    
    const operaciones = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => (b !== 0 ? a / b : "Error"),
        "%": (a, b) => a % b
    };

    
    const calcularOperacion = (expresion) => {
        let tokens = expresion.match(/(\d+\.?\d*|\+|\-|\*|\/|%)/g); 
        if (!tokens) return "Error";

        let resultado = parseFloat(tokens[0]); // Primer número

        for (let i = 1; i < tokens.length; i += 2) {
            let operador = tokens[i];
            let siguienteNumero = parseFloat(tokens[i + 1]);

            if (operaciones[operador]) {
                resultado = operaciones[operador](resultado, siguienteNumero);
            } else {
                return "Error";
            }
        }

        return resultado;
    };

    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            const botonApretado = boton.textContent.trim();

            
            if (boton.id === "c") {
                pantalla.textContent = "0";
                operacion = "";
                return;
            }

            
            if (boton.id === "ce") {
                operacion = operacion.replace(/(\d+\.?\d*)$/, ""); 
                pantalla.textContent = operacion || "0";
                return;
            }

            
            if (boton.id === "borrar") {
                operacion = operacion.slice(0, -1);
                pantalla.textContent = operacion || "0";
                return;
            }

            
            if (boton.classList.contains("operador")) {
                if (operacion === "" || /[+\-*/%]$/.test(operacion)) return;
                operacion += botonApretado;
                pantalla.textContent = operacion;
                return;
            }

            
            if (boton.id === "igual") {
                let resultado = calcularOperacion(operacion);
                pantalla.textContent = resultado;
                operacion = resultado.toString();
                return;
            }

            
            operacion += botonApretado;
            pantalla.textContent = operacion;
        });
    });
});