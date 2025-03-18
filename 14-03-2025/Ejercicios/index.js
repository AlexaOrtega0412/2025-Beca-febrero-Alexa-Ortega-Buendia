//Ejercicio 1
function animales(especie, nombre, edad){
    let pets = {
        especie: especie,
        nombre: nombre,
        edad: edad
    };
    return pets;
}
const perro = animales('Canino', 'Tobby', 2);
const gato = animales('Felino', 'Manchas', 5);
console.log(perro,gato);

//Ejercicio 2
function casas(dueño,lugar,metros){
    let home = {
        dueño: dueño,
        lugar: lugar,
        metros: metros
    };
    return home;
}
const depto = casas('Juan','CDMX', 180);
const casa = casas('Mia','Puebla',200)
console.log(depto, casa);

//Ejercicio 3
function carro(modelo, numserie, parte){
    let car= {
        modelo: modelo,
        numserie: numserie,
        parte,parte
    };
    return car;
}
const vehiculo1 = carro('CX-30',67678, 'puerta');
const vehiculo2 = carro('Mazda-3',313904, 'faros');
console.log(vehiculo1, vehiculo2);

//Ejercicio 4
function hospital(paciente, numcama,diagnostico){
    let lugar = {
        paciente: paciente,
        numcama: numcama,
        diagnostico: diagnostico
    };
    return lugar;
}
const pac1 = hospital('Norma',345,'Asma');
const pac2 = hospital('Angel',987, 'Fractura Clavicula');
console.log(pac1,pac2);

//Ejercicio 5
function cine(pelicula, sala, categoria){
    let pelis = {
        pelicula: pelicula,
        sala: sala,
        categoria: categoria
    };
    return pelis;
}
const cinta1 = cine('wicked', 6, 'Musical');
const cinta2 = cine('La sustancia', 10, 'Terror');
console.log(cinta1,cinta2);