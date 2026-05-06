// Arrays de credenciales

let usersNames = ["Jonathan Lopez", "Carlos Tamayo", "Jacobo Piedrahita", "Kevin Pelaez"]

let passwords = [1036929175, 1036952699, 1001015558, 1037972782]

// Contador de intentos
let attempts = 0

// Solicitamos al usuario el ingreso del nombre de usuario y la contraseña

// Seleccionamos el formulario usando su ID
document.getElementById("form-register")

    // Agregamos un "escuchador de eventos" que se ejecuta cuando el formulario se envía
    .addEventListener("submit", function (e) {

        // Evitamos que el formulario se envíe y recargue la página automáticamente
        e.preventDefault()

        // Obtenemos el valor que el usuario escribió en el campo "Nombre de usuario"
        const userName = document.getElementById("user").value

        // Obtenemos el valor que el usuario escribió en el campo "Contraseña"
        const password = document.getElementById("password").value

        // Verificamos mediante condicionales si las credenciales son correctas

        let access = false // Variable para controlar el acceso


        // Recorremos los arrays de usuarios y contraseñas para verificar las credenciales
        for (let i = 0; i < usersNames.length; i++) {

            if (userName === usersNames[i] && password == passwords[i]) {
                access = true
                break
            }

        }

        // Si las credenciales son correctas, redirigimos a la página "#". De lo contrario, mostramos un mensaje de error.
        if (access) {

            alert("Credenciales correctas 👍 \nACCESO CONCEDIDO ✅")
            
            setTimeout(function() {
                window.location.href = "#"
            }, 2000) // Esperamos 2 segundos para cargar nueva página

        } else {

            attempts++

            if (attempts < 3) {
                alert("Credenciales incorrectas 👎 \nINTENTE DE NUEVO 🤔")
            } else {
                alert("Has excedido el máximo de intentos 🤦‍♂️ \nACCESO DENEGADO 🫸")
            }

        }

    })

