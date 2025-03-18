//TIPOS DE DATOS:
/**
 *  PRIMITIVOS: todos los valores basicos 
 * string
 * number
 * boolean(true,false)
 * null(vacio)
 * undefined(sin valor definido)
 * symbol(crea identificadores unicos e irrepetibles "id")
 * bigInd(sirve para numeros muy muy grandes y al final del numero lleva la letra n para que se identifique)
 * para saber el tipo de dato de una variable con typeof podemos saberlo 
 * Se maneja por su valor
 * y son inmutables = no se le puede cambiar una parte del valor, se le tiene que cambiar todo el valor
 * */
console.log("Hola mi primer script");

let nombre = "Alexa";
nombre[0]= 'Ron'; // no es inmutable
console.log(nombre);
nombre = 'Ronaldo';
let edad = 30;
let masculino = true;
let  sobrinos = null;
let papas = undefined;
let id= Symbol("foo")
let saldo = 456752498565679659837696376n;

console.log(typeof nombre, typeof edad)

console.log(typeof (+'0'));
const number1=  new Number ('0');
const number2 = new Number(2+3);
const number3 = new Number(true);// type cohersion
const number4 = new Number(false);//type cohesion
const number5 = new Number(0);
//const number1= Number ('0');//Funcion contructora, clase o prototipo
//const number2 = Number(2+3);
//const number3 = Number(true);// type cohersion
//const number4 = Number(false);
//const number5 = Number([].length);

console.log(number1,number2,number3,number4,number5.value);

////////////////////////////////////////////////////////////////

/**
 * NO PRIMITIVOS:
 * OBJETOS
 * ARREGLOS
 * CLASES
 * se maneja por su referencia
 * son mutables = transforma una pequeña parte del valor 
 * ¿Qué es un objeto? 
 * POO= abstraccion de un objeto de la vida real 
 */
const persona= {
    nombre: "Alexa",
    edad: 25,
    papas:[{nombre: 'Alexa', edad:25}]
};//literal object
persona.nombre= 'Ronaldo';
//persona['nombre']// 'Ronaldo'
console.log(persona);

const aldo= persona;// Aqui se guarda la direccion de memoria
aldo.nombre='rogelio';
console.log(persona);//ronaldo
console.log(aldo)//rogelio


 //Arreglos = colecciones de llaves y valores (un arreglo es un objeto)
 let coleccion = ['alexa','juan','jose'];
 //coleccion[0]//'alexa'
 //coleccion[1]//'juan'
 //coleccion[2] //'jose'
 console.log(coleccion);
 //coleccion.log(coleccion[0]);//te muestra 'alexa'

 //CLASES 
 /**EN java= Atributos y metodos
 class MiClass{
    constructor(){
    }
 }
*/

//SET
/**
 * 
 */
const arreglo=[0,1,2,3,3,5];

 const set = new Set(arreglo);// arreglo
 console.log(set);
 console.log(set.size);
 set.add('asd');//atributo add agregar
 console.log(set);
 console.log(set.size);
 set.add('5');
 console.log(set);
 console.log(set.size);
 console.log(set.delete(5));
 console.log(set.delete(5));
 console.log(set)
 console.log(set.size);
 console.log(set.has('15'));
 //HAS= funcion con la que validamos si existe un elemento y este retorna TRUE o FALSE 
 //SET = metodo o clase constructora 
 //tambien el set quita valores repetido


 //Local storage = permanece 
 //Session storage = la sesion permanece hasta que se cierre 

 //MAP 
 /**
  * No permite valores repetidos
  * guarda tuplas(llaves, valor)
  * HAS= busca atrabes de llaves y retorna un TRUE o FALSE
  * GET= obtener el valor que esta guardado en la llave
  * SET= sobre escribe el valor
  * Delete= elimina si lo que elimina es correcto retorna TRUE y si no es un FALSE
  * CLEAR= 
  * SIZE=
  * Respeta el orden
  * Cuando quieras claves y valores se usa map 
  */
const map = new Map();
map.set(1, 'uno');
const value = map.has(1)
console.log(value)
const otherValue= map.get(1);
console.log(otherValue);
//let deleteResult = map.delete(0);
//console.log(deleteResult);
console.log(map);
map.clear();
console.log(map);
console.log(map.size);

const otherMap = new Map([
    ['manzana,',2],
    ['banana,',3],
    ['naranja,',1]
]);
console.log(otherMap);
//return es para las funciones y si no existe el motor hace su return 
 