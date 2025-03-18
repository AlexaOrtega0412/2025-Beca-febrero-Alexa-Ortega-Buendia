var dinero;

let carro = 'BMW';  //tokens let, carro, = , 'BMW'
                    // format control character ; , salto de linea , retorno de carro
                    //witespaces no importan 
                    //si usamos var dentro de una funcion solo va a vivir dentro de esta misma
                    /**
                     * multiline comments
                     */
                    //online comments
let persona = 'Aldo';//Statement
let nombrePersona = [1,2,3,].map((i) => {
    return i*3;
});//Expressions 'Aldo'

//(true)boolean,'' string, 10 number, object, array
{nombre: 'Aldo'} //objeto
[{nombre: 'Aldo'}]//array

let aldo= 'Alberto';
let alberto = aldo;
function obtenerNombre(){
    return 'Aldo'
}
const fun= function(){};

//ReferenceError

//VARIABLES= espacio reservado para guardar un valor
//Tipos: 
//VAR
function miFuncion (){ //SCOPE
    var dinero = 5;  // declaracion = 'var dinero' , asignación = '5'
    var dinero = 10; // redeclarar = volvemos a declarar y reasignación podemos poner un nuevo valor
    var dinero; //variable sin valor
    console.log(dinero);
}
miFuncion(); // si tenemos var sin valor no se acepta 
dinero = 'mucho'; //scope es window, ensucia el scope global(window) objeto global(window)
console.log(dinero); // hoisting = va a declar la variable por ti ya que en este ejemplo dinero no tiene 'VAR'

//LET
let juan = 'Guillermo';//Transpilacion => Babel 
{//Bloque de codigo = conjunto de codigo definido por llaves inicia el scope 
    let juan ;
    juan = 'JUAN';
    console.log(juan);
}//Hasta aqui termina el Scope
console.log(juan);// esto es otro scope
//let no se puede redeclarar, declaracion sin valor
//let y const hoisting TDZ



//CONST
//una varia tiene que tener un valor para inicializarla
//no pueden ser redecladaras 