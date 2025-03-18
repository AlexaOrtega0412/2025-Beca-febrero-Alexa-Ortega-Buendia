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