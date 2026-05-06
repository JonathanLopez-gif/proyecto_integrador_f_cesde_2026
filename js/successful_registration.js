// Obtenemos el elemento del DOM donde se mostrarán los usuarios
const contenedor = document.getElementById('result');

// Obtenemos los usuarios guardados en localStorage y los convertimos de JSON a objeto
// Si no hay usuarios, inicializamos un arreglo vacío
const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

// Insertamos un título dentro del contenedor
contenedor.innerHTML = "<h2>Usuarios registrados</h2>";

// Recorremos cada usuario del arreglo
usuarios.forEach((usuario, index) => {

    // Creamos un nuevo div para cada usuario
    const div = document.createElement("div");

    // Insertamos la información del usuario dentro del div
    div.innerHTML = `
        <p><strong>ID:</strong> ${usuario.id}</p>
        <p><strong>Nombre:</strong> ${usuario.nombre}</p>
        <p><strong>Rol:</strong> ${usuario.rol}</p>
        <!-- Botón para editar el usuario -->
        <button onclick="editarUsuario(${index})">Editar</button>
        <!-- Botón para eliminar el usuario -->
        <button onclick="eliminarUsuario(${index})">Eliminar</button>
        <hr>
    `;

    // Agregamos el div al contenedor principal
    contenedor.appendChild(div);
});

// Función para eliminar un usuario
function eliminarUsuario(index) {

    // Obtenemos nuevamente los usuarios desde localStorage
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Eliminamos el usuario en la posición indicada
    usuarios.splice(index, 1);

    // Guardamos el nuevo arreglo actualizado en localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    // Recargamos la página para actualizar la vista
    location.reload();
}

// Función para editar un usuario
function editarUsuario(index) {

    // Obtenemos los usuarios desde localStorage
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Solicitamos al usuario un nuevo nombre (con valor por defecto)
    let nuevoNombre = prompt("Nuevo nombre:", usuarios[index].nombre);

    // Solicitamos un nuevo rol (con valor por defecto)
    let nuevoRol = prompt("Nuevo rol (Maestro/Estudiante):", usuarios[index].rol);

    // Validación básica: si no se ingresan datos, no se hace nada
    if (!nuevoNombre || !nuevoRol) {
        alert("No se hicieron cambios");
        return;
    }

    // Validación: el rol debe ser solo "Maestro" o "Estudiante"
    if (nuevoRol !== "Maestro" && nuevoRol !== "Estudiante") {
        alert("El rol debe ser 'Maestro' o 'Estudiante'");
        return;
    }

    // Actualizamos los datos del usuario
    usuarios[index].nombre = nuevoNombre;
    usuarios[index].rol = nuevoRol;

    // Guardamos los cambios en localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    // Recargamos la página para reflejar los cambios
    location.reload();
}