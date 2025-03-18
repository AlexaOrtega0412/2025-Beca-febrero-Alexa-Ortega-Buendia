//FUNCIONES CONSTRUCTORAS
/**
 * funcion que construye ( pueden ser objetos)
 */

function Persona(nombre, edad, sexo) {
    let persona= {
        nombre: nombre,
        edad: edad,
        sexo: sexo,
        saludar(){
            console.log('Hola')
        }
    };//LITERAL OBJECT
    return persona;
}
const alberto = Persona('Alberto', 40, 'M');//objetos
alberto.saludar();
const monse = Persona('Monse', 22, 'F')//objetos
monse.saludar();
const ana = Persona('Ana', 22, 'F');//objetos
ana.saludar();
console.log(alberto.nombre);

//THIS EN UNA FUNCION

function Persona1 (nombre, edad, sexo){
    this.nombre = nombre,
    this.edad = edad,
    this.sexo = sexo,
    this.saludar = function(){
        console.log('Hola soy:', this.nombre)
    }
    //AQUI SE HACE UN RETORNO IMPLICITO Y RETORNA UNDEFINED
}


const emilio = new Persona1 ('Emilio', 29 , 'M'); // PARA SABER EL CONTENIDO TENEMOS QUE PONER LA PALABRA NEW
console.log(emilio);//emilio
emilio.saludar(); 

const juan = new Persona1 ('Juan', 24 , 'M'); // PARA SABER EL CONTENIDO TENEMOS QUE PONER LA PALABRA NEW
console.log(juan);// juan
emilio.saludar(); 
//this ligar las propiedades a  un objeto (la variable que creeas), y siempre que usamos this se usara new
//y this se usa para crear etiquetas 
//las arrow function no funcionan con this

//Sugar Syntax
class Persona2 {
    constructor(nombre,edad,sexo){
        this.nombre = nombre;
        this.edad = edad,
        this.sexo = sexo
    }
    //METODOS: Acciones que puede hacer un objeto de tipo persona
    saludar(){
        console.log(`Hola soy: ${this.nombre}`);
    }
}
//instancia= objeto creado de un clase
const jeronimo = new Persona2('jeronimo', 29, 'M');
console.log(jeronimo);
jeronimo.saludar();

let telefono = 5567890987;
telefono.toFixed(); //tofixed esta dentro del prototipo
const aa = [1,2,3];
aa.reduce(un);// reduce esta dentro del prototipo
console.log(aa);
//las funciones son un prototipo y define las caracteristas 
//Objeto: abstaccion de la vida real
//CLASE: Mecanismo donde puedes crear un objeto


class Carro {
    constructor(puertas = 4, anio){
        this.puertas = puertas;
        this._modelo = 'generico';
        this.__anio = anio ? anio : 2025; // this.__anio = anio ?? 2025 nullis coleasing operator
    }
    mover(){
        if(this.__anio > 2024){
            this._modelo = '54'
        }
        console.log(`El ${this._modelo} hacce RUN, RUN, RUN`);
    }
}
const bmw = new Carro(5, 2024);
bmw.mover();
///////////////////AQUI INICIA LA HERENCIA  DE PERSONA Y CARRO//////////////////////
// sugar syntax
class Persona extends Carro {
    constructor(nombre, edad, sexo) {
        super(4, 2024);
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }
    // acciones que puede hacer un objeto de tipo Persona
    saludar() {
        console.log(`Hola soy: ${this.nombre}`);
    }
}
// instancia
const jeronimo1 = new Persona('Jeronimo', 29, 'M');
jeronimo1.saludar();
jeronimo1.mover();
console.log(jeronimo1);

Array.prototype.myOwnReduce = function(callback, initialValue){
    //this = window
        let acumulador = initialValue;
        for(let i = 0; i < array.length ; i++){
    acumulador = callback(acumulador, array[i]);
    }
    return acumulador;
}
// [].method
//los metodos estaticos se mandan a llamar   no se puede usar this

const resultRed = [1,2,3].myOwnReduce((acumulador,item) => {
    acumulador += item;
    return acumulador;
}, 0 );

console.log(resultRed);
const aaa = 0;
aaa.toFixed();


// let telefono = 5513044563;
// telefono.toFixed(); // toFixed esta dentro del prototipo
// const aa = [1,2,3];
// console.log(aa);

const bmw1 = new Carro(5);
bmw.mover();

//La herencia en JS se maneja en cadena de prototipos = lista simplemente enlazada 
//y la herencia tambien en Js se refiere a extender, va creciendo 

