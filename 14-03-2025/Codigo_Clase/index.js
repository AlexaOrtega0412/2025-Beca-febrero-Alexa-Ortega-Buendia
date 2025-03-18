//FUNCIONES CONSTRUCTORAS
/**
 * funcion que construye ( pueden ser objetos)
 */

function Persona(nombre, edad, sexo) {
    let persona= {
        nombre: nombre,
        edad: edad,
        sexo: sexo
    };
    return persona;
}
const alberto = Persona('Alberto', 40, 'M');
const monse = Persona('Monse', 22, 'F')
console.log(alberto.nombre);
