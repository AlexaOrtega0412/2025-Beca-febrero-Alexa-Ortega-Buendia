const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");


botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const botonApretado = boton.textContent;

        if(boton.id === 'c'){
            pantalla.textContent = '0';
            return;
        }

        if(boton.id === 'borrar'){
            if(pantalla.textContent.length === 1){
                pantalla.textContent = '0';
            } else {
                pantalla.textContent = pantalla.textContent.slice(0,-1);
            }
            return;
        }
//para que el primer valor no sea 0 y si no lo es los va a ir agregando
        if(pantalla.textContent === '0'){
            pantalla.textContent = botonApretado
        } else {
            pantalla.textContent += botonApretado;
        }

        let operador = botonApretado ;
        if (boton.id === 'igual') {
                let resultado;

                switch (operador) {
                    case 'suma':
                        const suma = (a,b) => a+b;
                        resultado = suma;
                        break;
                    case 'resta':
                        const resta = (a,b) => a-b;
                        resultado = resta;
                        break;
                    case 'multiplicacion':
                        const multiplicacion = (a,b) => a*b;
                        resultado = multiplicacion;
                        break;
                    case 'division':
                        const division = (a,b) => a/b;
                        resultado = division;
                        break;
                    case 'residuo':
                        const residuo  = (a,b) => a%b;
                        resultado = residuo;
                        break;

                    default:
                        resultado = operador; 
                }

               pantalla.textContent = resultado;
               console.log(operador)
            
            return;
        }
    });
});