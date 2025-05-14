const personas = [
    { nombre: 'Ana Gómez', edad: 28, correo: 'ana@gmail.com' },
    { nombre: 'Luis Pérez', edad: 35, correo: 'luis@hotmail.com' },
    { nombre: 'María Rodríguez', edad: 22, correo: 'maria@yahoo.com' },
    { nombre: 'Carlos Mendoza', edad: 40, correo: 'carlos@outlook.com' }
  ];

  const tabla = document.getElementById('tabla-personas');

  personas.forEach((persona, index) => {
    const fila = document.createElement('tr');

    fila.innerHTML = `
      <td>${index + 1}</td>
      <td>${persona.nombre}</td>
      <td>${persona.edad}</td>
      <td>${persona.correo}</td>
    `;

    tabla.appendChild(fila);
  });