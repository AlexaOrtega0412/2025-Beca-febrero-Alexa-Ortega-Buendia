//FUNCIONES
/**
 * PALABRA reservada => (function)
 * NOMBRE (no se escriben con mayusculas)(camel case = moverCuerpo)
 * (dash case = mover-Cuerpo )(slash case = mover/Cuerpo) y el nombre siempre
 * es con referencia a lo que ser va a realizar 
 * 
 * PARAMETROS = valores de entrada/ variable local que solo vivira 
 *dentro de la funcion, y puedes poner los que sean necesarios,la buena practica 
 es que no pases de 3 parametros
 Buenas practicas:
 SOLID
 KISS
 Dry

 VALOR DE RETORNO = return
 * la respuesta siempre sera un unico valor 
 * 
 */

let nombre = 'ale'; //Variable local
// camel case ,dash case, slash case moverCuerpo, mover-cuerpo /


/**
 * Metodo para mover el cuerpo de una persona 
 * @param {object} persona 
 */


//Declaracion 
function moverCuerpo (persona, nombreNovia){ // persona es el argumento
    //Persona= {nombre: 'Ale', edad: 17, sexo : 'F'}
    // Persona va apuntar a una referencia
    //nombreNovia = 'Milenka' y 'Amanda'
    console.log('Este es un mensaje se imprime desde adentro de la funcion');
    console.log(`Se esta moviendo ${persona.nombre} y su novia es: ${nombreNovia}`);
    if(persona.edad > 18){
        console.log(`${persona.nombre}es mayor de edad y su edad es: ${persona.edad}`);
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
    return function(){console.log('jajajaja')}
    //return [persona] Arreglo
    //return {nombre: persona.nombre}; OBJETO
    //return 'el usuario se llama: ' + persona.nombre; // este es un retorno explicito  y puedes poner objetos tambien en un retorno
    //return; retorno implicito el compilador lo hace por ti ya que tu no lo pusiste
}
//Ejecucion 
const resultado = moverCuerpo({nombre: 'Aldo', edad: 17, sexo : 'M'}, 'Milenka');// todo lo que esta adentro es un argumento
console.log(resultado);
// para imprimir el jajaja de la funcion se tiene que hacer lo siguiente
//console.log(resultado ());
moverCuerpo({nombre: 'Oscar', edad: 20, sexo : 'M'}, 'Amanda');



const result = [1,2,3].reduce(function(acumulador, item){
    acumulador += item;
    return acumulador;
},0);

console.log(result);


//FUNCTION DECLARATION
function myOwnReduce(array  = [], callback , initialValue = 0){ //PARA ASIGNAR UN VALOR POR DEFECTO ES DE ESTS FORMA: array = []
    //this = contexto de ejecucion
    let acumulador = initialValue;
    for(let i =0 ; i < array.length ; i++){
        acumulador = callback(acumulador, array[i]);
    }
    return acumulador;
}
const r = myOwnReduce([1,2,3], function(acumulador,item){
    acumulador += item;
    return acumulador;
}, 0);
console.log(r);

/**
 * 14-03-2025
 * FUNCIONES PARTE 2
 * 
 * para evitar errores de ejecucion se usan los valores por defecto
 * y son para sustituir vareables que no tienen valor definido
 * Y los valores que ponemos son argumentos.
 * 
 * 
 */

//FUNCTION EXPRESSION
/** 
 * 
 * FUNCTION EXPRESSION:
 * 'asnjdak'
 * 0123455
 * true
 *[1,2,3].reduce(function(acumulador, item){
    acumulador += item;
    return acumulador;
},0);
funcionan como valores
*/

//almacenada en una variable 
const baz = function(){
    console.log('ALV')
}
baz();


//una funcion retornada desde otra funcion
function saludar (){
    //valores === expresion
    const variable = function(){
        console.log('Mensaje dentro de la funcion que se retorna');
        console.log('ojo');
        console.log('Estos mensajes solo se ejecutan si.....')
    }
    return variable;
}
const resultadoSaludar = saludar();
resultadoSaludar();

//una funcion pasada como argumento a otra funcion (CALLBACK)
function despedir(obtenerNombre){
    const resultado = obtenerNombre();// 'Este es mi nombre: Aldo'
    console.log(resultado);
}

despedir(function(){
    return 'Este es mi nombre: Aldo';
});


const r1 = myOwnReduce(['array'], /**esto es callback*/function(acumulador,item){
    acumulador += item;
    return acumulador;
}, '');// se puede concatenar strings

console.log(r1);
/** 
function getPokemonData(){
    fetch('https://pokeapi.co/apki/v2/pokemon/ditto')
    .then(function(responde){
        console.log('Informacion del Request');
        console.log(responde);
        return responde.json();
    })
    .then(function(realResponse){
        console.log('Informacion servicio');
        console.log(realResponse);
        const img = document.createElement('img');
        img.src=realResponse.sprites.front_shiny;
        document.body.appendChild(img);
    });
}
getPokemonData();
*/
// para asincronas:
//event loop 
//callback queue


// ARROW FUNCTION
/**
 * METODO PARA SUMAR DOS VALORES A ES EL PRIMER OPREANDO Y B ES EL SEGUNDO OPERANDO
 * @param {Number} a 
 * @param {Number} b 
 */
const sumar = (a, b) => {
    return a + b;
};
const res = sumar(10,10);
console.log(res);


//calculadora('suma','resta','multiplicacion', 'modulo', 'division');

const calculadora = (a,b, operacion) => {
    
}


//ARROW FUNCTION 
const aldo = {
    nombre: 'ALDO',
    saludar: (...arguments) => { //para saber los arguments aqui es con ...arguments
        //this es el contexto de declaracion
        //this = window con bind ya seria Aldo
        console.log(this);
        console.log(arguments);// NO existe aqui y si los quieres saber es con ...arguments
        console.log(`Hola mi nombre es: ${this.nombre}`);
    }
};
aldo.saludar(1,2,3); //1,2,3 este es el arguments es del arrow 
//aldo.saludar.call(aldo); ejecuta la funcion 
//aldo.saludar.apply(aldo); ejecuta la funcion
//const fun = aldo.saludar.bind(aldo); //retorna una nueva referencia
//fun();

//Funcion 
const juan = {
    nombre: 'JUAN', 
    saludar: function(){
        //this es el conexto de ejecucion
        //this = juan
        //arguments = objeto conlo que vas a ejecutar una funcion
        console.log(this);
        console.log(arguments);
        console.log(`Hola mi nombre es: ${this.nombre}`);
    }
};
juan.saludar(1,2,3);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TO DO: bind, call, apply

const btn = document.querySelector('#btn');
const fun1 = function(){
    console.log(this);
}

const fun2 = (obj) => {
    console.log(obj)
}
const obj = {nombre: 'kdjkjfj'}
//btn.addEventListener('click',fun1.bind(obj));
//btn.addEventListener('click',fun2.bind(this.btn));// arrow function son 
//btn.addEventListener('click', obj => fun2(obj));
btn.addEventListener('click', event => {
    //const obj = {nombre: 'kdjkjfj'}
   // console.log(event)
    fun2(obj)
    console.log(btn);
});



//FUNCIONES CONSTRUCTORAS 14 y 15 - 03 - 2025
/**
 * funcion que construye ( pueden ser objetos)
 */

function Persona(nombre, edad, sexo) {
    let persona= {
        nombre: nombre,
        edad: edad,
        sexo: sexo,
        saludar() {
            console.log('Hola soy:', this.nombre)
        }
    };
    return persona;
}
const alberto = Persona('Alberto', 40, 'M');
alberto.saludar();
const monse = Persona('Monse', 22, 'F')
monse.saludar();
console.log(alberto.nombre);