/**
 * OPERADORES
 * es un caracter que nos permite realizar operaciones con operandos
 */
//OPERADORES ARITMETICOS
/**
 * +,-,*, / , Math.pow(2,2), %, ++, --
 */

const resultado = [1,2,3].reduce((acumulador, item) => {
    acumulador += item; // acumulador = acumulador +,-,* item
    return acumulador;
}, 0);//resultado seria 6 
console.log(resultado + 10);//y aqui seria resultado 16
console.log('resultado'+ 11); // JIT , Type chohersion resultado10
console.log(true + 10)// true se toma como numero y seeria 1  11
console.log(10 + 'resultado');//10resultado
console.log([10] + 'resultado');//aqui dio prioridad hacer una concatenacion [10]resultado
console.log([10]+ {});//10[object, object] esta concatenando
console.log(undefined + 10);//NaN (Not a Number)
console.log(typeof NaN); //Number
console.log(typeof undefined)//no tiene un tipo  string P.E 'undefined', NaN, string
const tipo = typeof undefined;
console.log(typeof tipo); //Si es un string


const resultado1 = [1,2,3].reduce((acumulador, item) => {
    acumulador+= item;
    return acumulador;
}, 0.).toString(); 
console.log(resultado + 10); // por que por el .toString() lo vuelve texto y va a concatenar 610
const string = `uhdihidhi ${resultado}` // back ticks => ``
//Reduce =

//ya vimos -,*,/

//% operador Modulo
console.log(4%2);
console.log(`4%2  = ${4%2}`);

//Math

const potencia = Math.pow(2,2);
console.log(potencia);//resultado 4

const potencia1 = Math.pow(2,2);
console.log(2**2);//resultado 4


//OPERADORES DE COMPARACION 
// == , = , >, <, <=, >= RESULTADOS TRUE | FALSE
// == operador de comparacion no estricta ( compara el valor de dos expresiones y el resultado es verdadero o falso, valida solo el valor)y el problema es con el 
//type cohersion ya que cambia el valor del tipo 
0 == 0; //true, non strict operator
0 == '0'; // true, non strict operator, type cohersion
'0' == '0'; // true

const a= typeof 0; // number
const b = typeof '0'; //string
0 === '0' // 0 '0' false => 'number' != 'string' (valor y tipo dato)

// === esto es extricto (valida el valor y el tipo de dato )

//FALSY un valor que se puede tomar como falso
// '' , -1 , undefined, null esto lo traduce en FALSE 
//if (false){
//    console.log('jdhkhdkh')
//} //no entra al if 

//let variable= null;

//if (variable){
//    console.log('jdhkhdkh')
//} //no entra al if 

//let variable1= null;

//if (variable1 == false){
//    console.log('jdhkhdkh')
//} //no entra al if pero tendria que entrar


//let variable2= null;
//!! Doble negacion/ 
//if (!!variable2 == false){
//    console.log('jdhkhdkh')
//} //aqui ya entro e imprime el resultado


let var3 = null;
if(var3){// var 3 es null pero se vuelve false y no entra al if
    console.log('ijioj');
}




//TRUTHY
//1, ' ', 'ashd',[], -1 {} => true
let variableT= 1;

if (!!variableT){
    console.log('var truthy');
} 


//null + null = 0   y esto pasa por que convierte
//false + false = 0 , 0+0 = 0

//true + true = 2 ; 1+1=2 

//[] + [] =



if([]){// aqui se pinta por que es un valor truthy
    console.log('ajsnhjkashdka');
}

if(![]){// aqui ya no se pinto por que lo negamos y se hace Falsy
    console.log('ajsnhjkashdka');
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * PARTE 2 de OPERADORES
 */

//el comparador extricto valida el tipo y valor de una expresion
//el 

//console.log(typeof null);// imprime un object


//OPERADORES LOGICOS
// AND (&&), OR (||) , NOT (!) , Truthy, falsy // y se tienen que hacer boolenas
/** 
 * AND ( && )
1 && 0 = 0  true && false  = false => !!'sdjdjo' && true => true && false = false 
0 && 0 = 0  false && false = false  => !'sdjdjo' && false => false && false = false 
0 && 1 = 0  false && true = false  => !'sdjdjo' && -1 => false && true = false 
1 && 1 = 1  true && true = true  => !!'sdjdjo' && !!'sdjdjo' => true && true = true 
*/

//EJEMPLOS con AND
//console.log ([] && !![]); sale TRUE
// console.log(10 && !!null) Sale False

console.log(10 && 'juan'); // asi imprime juan
console.log('juan' && 10); // asi imprime el 10

const nombre = 'juan';
const edad = 10;
const valor = nombre && edad;

console.log(valor)// imprime 10 
// esto es por que ambos son valores truthy y toma el ultimo valor 

if(!! edad && !!nombre){
    console.log('judisd')
} // y es mejor convertirlo es valores booleanos con la doble negacion(!!)

const nombre1 = 'juan';
const edad1 = 10;
const valor1 = edad1 && null;

console.log(valor1)// imprime falso

if(!! edad && !!nombre){
    console.log('judisd')
} 


/**TRUTHY
 * 0
 * []
 * {} => !!{} 
 * 'sadfd' => !!'asjdjo' asi lo obligamos a que se un valor booleano
 */






// OR ( || )
//0 || 0 = 0 // false || false = false 
//0 || 1 = 1 // false || true = true
//1 || 0 = 1 // true || false = true
//1 || 1 = 1 // true || true = true


console.log( 10 || null)// valor truthy