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