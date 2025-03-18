//Sistema de Inventario de una Tienda
const productos = [
    { nombre: 'Camiseta', precio: 25, stock: 10 },
    { nombre: 'Pantalón', precio: 50, stock: 0 },
    { nombre: 'Zapatos', precio: 80, stock: 5 },
    { nombre: 'Sombrero', precio: 15, stock: 0 },
    { nombre: 'Calcetines', precio: 10, stock: 20 },
  ];
  
  console.log('Productos con stock disponible:');
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].stock > 0) {
      console.log(`- ${productos[i].nombre} (Precio: $${productos[i].precio}, Stock: ${productos[i].stock})`);
    }
  }


///////////////////////////////////////////Lista de Estudiantes y Promedios
const estudiantes = [
    { nombre: 'Ana', notas: [8, 7, 9] },
    { nombre: 'Pedro', notas: [5, 6, 7] },
    { nombre: 'María', notas: [9, 9, 10] },
    { nombre: 'Luis', notas: [6, 5, 4] },
  ];
  
  for (let i = 0; i < estudiantes.length; i++) {
    const estudiante = estudiantes[i];
    let suma = 0;
    for (let j = 0; j < estudiante.notas.length; j++) {
      suma += estudiante.notas[j];
    }
    const promedio = suma / estudiante.notas.length;
    const aprobado = promedio >= 6;
    console.log(`${estudiante.nombre}: Promedio = ${promedio}, ${aprobado ? 'Aprobado' : 'Reprobado'}`);
  }

///////////////////////////////////////////////////////////Gestión de Citas Médicas
let citas = [];

function registrarCita(fecha, paciente, doctor) {
  citas[citas.length] = { fecha, paciente, doctor };
}

function mostrarCitasFuturas() {
  const ahora = new Date();
  console.log("Citas futuras:");
  for (let i = 0; i < citas.length; i++) {
    if (citas[i].fecha >= ahora) {
      const f = citas[i].fecha;
      const fechaStr = `${f.getFullYear()}-${f.getMonth() + 1}-${f.getDate()}`;
      console.log(`- ${fechaStr} ${citas[i].paciente} ${citas[i].doctor}`);
    }
  }
}
registrarCita(new Date(2025, 10, 15), "Ana", "Dr. Pérez"); 
registrarCita(new Date(2025, 10, 20), "Luis", "Dra. García");
mostrarCitasFuturas();

////////////////////////////////////////////////////////////////Filtrar Películas por Género
const peliculas = [
    { titulo: 'Duro de matar', genero: 'Accion' },
    { titulo: 'El padrino', genero: 'Drama' },
    { titulo: 'Avengers: Endgame', genero: 'Accion' },
    { titulo: 'La La Land', genero: 'Musical' },
    { titulo: 'John Wick', genero: 'Accion' },
  ];
  const peliculasAccion = []
  
  for(let i = 0; i < peliculas.length; i++){
    if(peliculas[i].genero === 'Accion'){
        peliculasAccion.push(peliculas[i]);
    }
  }
  console.log('Las peliculas de Accion son:');
  for(let i=0; i<peliculasAccion.length; i++){
    console.log(`* ${peliculasAccion[i].titulo}`);
  }

///////////////////////////////////////////////////Sistema de Biblioteca
let libros = [];
function registrarLibro(titulo, autor, estado) {
  libros.push({ titulo, autor, estado });
}

function mostrarLibrosDisponibles() {
  const librosDisponibles = libros.filter((libro) => libro.estado === 'disponible');

  if (librosDisponibles.length === 0) {
    console.log('No hay libros disponibles en este momento.');
  } else {
    console.log('Libros disponibles:');
    librosDisponibles.forEach((libro) => {
      console.log(`- ${libro.titulo} por ${libro.autor}`);
    });
  }
}
registrarLibro('Cien años de soledad', 'Gabriel García Márquez', 'disponible');
registrarLibro('1984', 'George Orwell', 'prestado');
registrarLibro('Don Quijote de la Mancha', 'Miguel de Cervantes', 'disponible');

mostrarLibrosDisponibles();

///////////////////////////////////////////////////////Registro de Empleados y Sueldos
const empleados = [
    { nombre: 'Juan Pérez', sueldo: 3000 },
    { nombre: 'María García', sueldo: 3500 },
    { nombre: 'Carlos Rodríguez', sueldo: 2800 },
    { nombre: 'Laura Martínez', sueldo: 4000 },
  ];
  
  let sueldoTotal = 0;
  for (let i = 0; i < empleados.length; i++) {
    sueldoTotal= sueldoTotal + empleados[i].sueldo;
  }
  console.log('El sueldo total a pagar es:'+ ' '+ sueldoTotal);

/////////////////////////////////////////////////////////Tienda en Línea - Buscar Productos por Nombre
function buscarProducto(catalogo, nombreProducto) {
    return catalogo.find(producto => producto.nombre === nombreProducto);
  }
  
  const catalogoProductos = [
    { nombre: 'camisa', precio: 25 },
    { nombre: 'pantalon', precio: 50 },
    { nombre: 'zapatos', precio: 80 },
    { nombre: 'playera', precio: 70 },
    { nombre: 'falda', precio: 200 }
  ];
  
  const nombreBuscado = prompt('Ingresa el nombre del producto:');
  const productoEncontrado = buscarProducto(catalogoProductos, nombreBuscado);
  
  if (productoEncontrado) {
    console.log('Producto encontrado:', productoEncontrado);
  } else {
    console.log('Producto no encontrado.');
  }

//Gestión de Usuarios en una Plataforma
const usuarios = [
    { nombre: 'Juan', rol: 'usuario' },
    { nombre: 'María', rol: 'admin' },
    { nombre: 'Pedro', rol: 'usuario' },
    { nombre: 'Laura', rol: 'admin' },
  ];
  const administradores = [];
  
  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].rol === 'admin') {
      administradores.push(usuarios[i]);
    }
  }
  console.log('Administradores:');
  for (let i = 0; i < administradores.length; i++) {
    console.log(administradores[i].nombre);
  }

//Análisis de Ventas en un Restaurante
const ventas = [
    { plato: 'hamburguesa', monto: 70 },
    { plato: 'pizza', monto: 150 },
    { plato: 'ensalada', monto: 80 },
    { plato: 'papas', monto: 50 },
    { plato: 'alitas', monto: 90 },
    { plato: 'boneless', monto: 120 }
  ];
  
  let totalVendido = 0;
  for (let i = 0; i < ventas.length; i++) {
    totalVendido =totalVendido + ventas[i].monto;
  }
  console.log("El total vendido es: $" + '' + totalVendido);

// Registro de Asistencia en una Clase
let asistencia = [];

function registrarAsistencia(alumno, presente) {
  asistencia.push({ alumno, presente });
}

function mostrarAsistencia() {
  let cantidadPresentes = 0; 
  
  for (let i = 0; i < asistencia.length; i++) {
    if (asistencia[i].presente) {
      cantidadPresentes++;
    }
  }

  console.log('Asistieron' + ' '+ cantidadPresentes + ' ' +'alumnos.');
}

registrarAsistencia('Ana García', true);
registrarAsistencia('Pedro López', false);
registrarAsistencia('María Rodríguez', true);
registrarAsistencia('Luis Martínez', true);

mostrarAsistencia();

//***************************************************SET:
//Eliminar Duplicados en una Lista de Productos
const lista = ['pera', 'fresa', 'melon', 'pera', 'limon', 'uva', 'fresa'];
console.log(lista);
const nuevalista = [...new Set(lista)];
console.log(nuevalista);

// Contar Palabras Únicas en un Texto
function contarPalabrasUnicas(texto) {
  return new Set(texto.toLowerCase().split(/\W+/).filter(Boolean)).size;
}

const parrafo = "";
const cantidadPalabrasUnicas = contarPalabrasUnicas(parrafo);

console.log("El párrafo tiene " + cantidadPalabrasUnicas + " palabras únicas.");

//Verificar si un Usuario ya ha Iniciado Sesión
function usuario(){
  const lodUs = ['user1','user2'];

  const log = 'user1';
  console.log('El usuario' + log + `esta intentando ingresar`);

  const ing = new Set(lodUs);
  const logeo = ing.has(log);
  console.log(log + logeo);
}

//Lista de Invitados Únicos en un Evento 
let invitados = new Set(); 

function registrarInvitado(nombre) {
  if (invitados.has(nombre)) {
    console.log(`El invitado ${nombre} ya está registrado.`);
    return false;
  } else {
    invitados.add(nombre);
    console.log(`Invitado ${nombre} registrado con éxito.`);
    return true;
  }
}

registrarInvitado("Ana");
registrarInvitado("Juan");
registrarInvitado("Ana"); 
registrarInvitado("Pedro");

console.log("Lista de invitados:", (invitados));

//Registro de Placas de Autos en un Estacionamiento
let placas = new Set(); 

function registrarPlaca(placa) {
  if (placas.has(placa)) {
    console.log("La placa "+ " "+ placa + "" + "ya está registrada.");
    return false; 
  } else {
    placasRegistradas.add(placa);
    console.log("Placa "+ " "+ placa + "" + "registrada.");
    return true;
  }
}

function obtenerPlacas() {
  return (placas); 
}
registrarPlaca("ABC1234");
registrarPlaca("XYZ5678");
registrarPlaca("ABC1234"); 
registrarPlaca("DEF9012");

console.log("Placas registradas:", obtenerPlacas());

//MAP:
///////////////////////////////////////////////////////Contar la Frecuencia de Palabras en un Texto/////////////////////////////////////////////////////
function contarPalabras(texto) {
  const frecuencia = new Map();
  texto.toLowerCase().split(/\W+/).filter(Boolean).map(palabra => {
    frecuencia.set(palabra, (frecuencia.get(palabra) || 0) + 1);
  });
  return frecuencia;
}

const frase = "Este es un ejemplo de un texto. Este texto tiene palabras repetidas, como este.";
const resultado = contarPalabras(frase);

for (const [palabra, cantidadApariciones] of resultado) {
  console.log(`"${palabra}": ${cantidadApariciones}`);
}
///////////////////////////////////////////////////////Almacenar Precios de Productos//////////////////////////////////////////////
const preciosProductos = new Map();

preciosProductos.set("manzana", 20);
preciosProductos.set("plátano", 75);
preciosProductos.set("naranja", 25);
preciosProductos.set("leche", 50);

function obtenerPrecioProducto(nombreProducto) {
  if (preciosProductos.has(nombreProducto)) {
    const precio = preciosProductos.get(nombreProducto);
    return "El precio de "+" "+nombreProducto+""+ "es : $" +""+precio; 
  } else {
    return "Producto" + " "+ nombreProducto+ " "+ "no encontrado.";
  }
}

console.log(obtenerPrecioProducto("manzana"));
console.log(obtenerPrecioProducto("leche"));
console.log(obtenerPrecioProducto("pan"));
console.log(obtenerPrecioProducto("tortillas"));

//////////////////////////////////////////////////Agenda Telefónica con Búsqueda Rápida///////////////////////////////////////////
const agendaTelefonica = new Map();
agendaTelefonica.set("Ana", "123-456-7890");
agendaTelefonica.set("Juan", "987-654-3210");
agendaTelefonica.set("Pedro", "555-123-4567");


function buscarNumero(nombre) {
  if (agendaTelefonica.has(nombre)) {
    return "El número de"+ " " + nombre + " " + "es:"+ " " + agendaTelefonica.get(nombre);
  } else {
    return "No se encontró a"+ " " +nombre+ " " + "en la agenda.";
  }
}
console.log(buscarNumero("Ana"));
console.log(buscarNumero("Pedro"));
console.log(buscarNumero("Luis"));

/////////////////////////////////////////////////////Registro de Votos en una Elección///////////////////////////////////////////
const candidatos = new Map();
candidatos.set("Ana", 250);
candidatos.set("Beto", 320);
candidatos.set("Carla", 280);
candidatos.set("David", 350);

function encontrarGanador(votoscand) {
  let candidatoGanador = null;
  let votosMaximos = -1;

  for (const [nombre, votos] of votoscand) {
    if (votos > votosMaximos) {
      votosMaximos = votos;
      candidatoGanador = nombre;
    }
  }

  if (candidatoGanadorGanador) {
    return "El ganador es " + " " + candidatoGanador + " " + "con" + " " + votosMaximos+ " "+ "votos.";
  } else {
    return "No hay jugadores en la lista.";
  }
}

console.log(encontrarGanador(candidatos));

////////////////////////////////////////Historial de Compras de un Cliente ///////////////////////////////////////////////

const historialCompras = new Map();

function agregarCompra(cliente, producto) {
  historialCompras.set(cliente, (historialCompras.get(cliente) || []).concat(producto));
}

function mostrarHistorial(cliente) {
  const productos = historialCompras.get(cliente);
  console.log(productos ? `Historial de ${cliente}: ${productos}` : ` ${cliente} No tiene historial de compras`);
}

agregarCompra("Ana", "Laptop");
agregarCompra("Ana", "Mouse");
agregarCompra("Beto", "Teclado");
agregarCompra("Ana", "Audífonos");

mostrarHistorial("Ana");
mostrarHistorial("Beto");
mostrarHistorial("Carlos");