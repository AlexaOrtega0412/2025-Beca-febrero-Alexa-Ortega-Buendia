//1)Palabra Palindroma
function PP(palabra){
    let iz = 0;
    let de = palabra.length -1;
    
    while(iz < de){
        if(palabra[iz] !== palabra[de]){
            return false;
        }
        iz++;
        de--;
    }
    return true;
}
let frase = "reconocer";
let resultado = PP(frase);
console.log( frase + "es palindromo" + resultado);

//2)Calculo Factorial
function fac(n){
    let fracto = n;
    while(--n){
        fracto = fracto*n;
    }
    return fracto;
}
console.log(fac(5))

//3)Fibbonaci
function fibo (n){
   let sec = [0,1];

   for(let i= 2; i < n ; i++){
    sec[i] = sec[i - 1] + sec[i-2];
   }
   return sec;
}
let resul = fibo(3);
console.log(resul);

//4)Arreglo de numeros
function orden(arreglo){
    const n = arreglo.length;

    for(let i = 0; i < n - 1; i++){
        for(let j=i + 1; j<n; j++){
            if(arreglo[j] < arreglo[i]){
            [arreglo[i], arreglo[j]]= [arreglo[j], arreglo[i]];
        }
    }
}
return arreglo;
}
let numeros =[5,4,3,2,1];
let arreglOrde = orden(numeros);
console.log(arreglOrde);

//5) Conteo de Palabras
let tex = prompt("ingresa tu texto");
console.log("el texto tiene" + tex.length + "palabras");
//6) Encontrar el numero que falta
function EncontrarNum(){
    
}
//7) Encontrar la subcadena mas larga

//8) Validar falta de caracteres

//9) Hacer suma hasta que exista un solo numero

//10) Numero repetido