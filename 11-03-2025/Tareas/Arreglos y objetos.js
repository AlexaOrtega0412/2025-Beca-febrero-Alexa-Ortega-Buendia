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
