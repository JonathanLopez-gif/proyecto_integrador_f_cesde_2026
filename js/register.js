// Seleccionamos el formulario por su ID y escuchamos el evento 'submit'
document.getElementById('form-register').addEventListener('submit', function(e) {

    // Evitamos que la página se recargue
    e.preventDefault();

    // Obtenemos el valor del input 'nombre'
    const nombre = document.getElementById('name').value;

    // Obtenemos el valor del input 'contraseña'
    const contrasena = document.getElementById('password').value;

    // Obtenemos el valor del input/select 'rol'
    const rol = document.getElementById('role').value;

    // OBTENEMOS EL ÚLTIMO ID GUARDADO
    // Buscamos en localStorage el último ID registrado o usa 0 si no existe
    let ultimoId = localStorage.getItem('ultimoIdRegistrado') || 0;

    // INCREMENTAMOS EL ID
    // Convertimos a número porque localStorage siempre es string, y sumamos 1
    let nuevoId = parseInt(ultimoId) + 1;

    // ACTUALIZAMOS EL CONTADOR
    // Guardamos el nuevo ID en localStorage
    localStorage.setItem('ultimoIdRegistrado', nuevoId);

    // ESTRUCTURAMOS DATOS CON EL ID NUEVO
    const datosUsuario = {
        nombre: nombre,
        contraseña: contrasena,
        rol: rol,
        id: nuevoId
    };

    // OBTENEMOS ARRAY DE USUARIOS
    // Si no existe, creamos un array vacío
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // AGREGAMOS EL NUEVO USUARIO AL ARRAY
    usuarios.push(datosUsuario);

    // GUARDAMOS EL ARRAY ACTUALIZADO
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    // REDIRIGIMOS A PÁGINA DE CONFIRMACIÓN
    window.location.href = "successful_registration.html";
});

