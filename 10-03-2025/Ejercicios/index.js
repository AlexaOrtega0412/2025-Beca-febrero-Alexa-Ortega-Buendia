//1)Hola Mundo
let saludo = 'Hola Mundo';
console.log(saludo);

//2)Suma
function suma(a,b){
    return a + b ;
}
let resultado= suma(2,2);
console.log(resultado);

//3)Hola + Nombre Usuario
function ObtenerNombre(nom){
    return nom;
}
let nom = prompt("¿Cuál es tu nombre?");
    console.log("Hola"+ nom);

//4)Numero par e impar
let numero = 5;
if(numero % 2 === 0){
    console.log("el numero es par:");
}else{
    console.log("el numero es impar");
}

//5)suma 1 al 100
let numeros
for(numeros=1; numeros <= 100; numeros= numeros+1){
console.log(numeros)
}

let num=1;
while(num <= 100){
    console.log(num)
    num++
}

//6)Suma del 1 al 100
let nume=1, suma= 0;
while(num <= 100){
    suma = suma + nume;
    num++
}
console.log(suma);

//7)Tablas de Multiplicar
let tabla= prompt("¿Qué tabla de multiplicar deseas consultar? ");
for(let num= 1;num <= 10; num++){
    console.log(tabla +"x" + num + "=" + (tabla*num));
}

//8)Invertir Cadena de texto
let cadena = 'Juan';
let cadenaInv = ' ';
for(let i = cadena.length-1; i >= 0; i--){
    cadenaInv= cadenaInv + cadena[i];
}
console.log(cadenaInv);

//9)Numero Vocales
function contarvocales(frase){
    let contador = 0;
    for(let i= 0; i < frase.length; i++){
        const caracter = frase[i];
        if(
            caracter === "a" ||
            caracter === "e" ||
            caracter === "i" ||
            caracter === "o" ||
            caracter === "u"
        ){
            contador++;
        }
    }
    return contador;
}
const frase = "Hola, ¿como estas?";
const numVoca= contarvocales(frase);
console.log("el numero de vocales es:", numVoca);

//10)Numero primo
function numprim(numero){
    if(numero <= 1) return false;
    for(let i = 2; i < numero; i++){
        if(numero % i === 0) return false;
    }
    return true;
}
const numer= 5;
if(numprim(numer)){
    console.log(numer + "El numero es primo");
}else{
    console.log(numer + "El numero no es primo");
}