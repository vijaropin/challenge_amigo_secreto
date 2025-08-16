/*  1. Crear una lista vacía para guardar los nombres de los amigos.
Usaremos un "let" porque el contenido de la lista va a cambiar. */
let amigos = [];

// 2. Función para agregar un amigo a la lista cuando se presiona el botón "Añadir".
function agregarAmigo() {
    // 3. Obtener el campo de texto donde se escribe el nombre.
    let nombreInput = document.getElementById('amigo');

    /* 4. Obtener el nombre que el usuario escribió.
    Usamos ".value" para obtener el texto del campo de entrada. */
    let nombre = nombreInput.value;

    /* 5. validar que el campo no este vacio.
    ".trim()" elimina los espacios en blanco del principio y del final. */
    if (nombre.trim() === '') {
        alert('Por favor, escribe un nombre válido.');
        return; // Salimos de la función si el nombre está vacío.
    }

    // 6. Agregar el nombre a nuestra lista de amigos.
    amigos.push(nombre);

    // 7. Mostrar la lista de amigos actualizada en la página.
    mostrarAmigos();

    // 8. Limpiar el campo de texto para que el usuario pueda escribir otro nombre.
    nombreInput.value = '';
}
// 9. Función para mostrar la lista de amigos en la página.
function mostrarAmigos() {
    // 10. Obtener el elemento de la lista (el <ul>) en la página.
    let listaHTML = document.getElementById('listaAmigos');

    // 11. Limpiar la lista actual para evitar que los nombres se dupliquen.
    listaHTML.innerHTML = '';

    // 12. Recorrer nuestra lista de amigos y agregar cada nombre a la página.
    for (let i = 0; i < amigos.length; i++) {
        // 13. Crear un nuevo elemento de lista (<li>) para cada amigo.
        let li = document.createElement('li');

        // 14. Asignar el nombre del amigo como texto del elemento.
        li.textContent = amigos[i];

        // 15. Agregar el nuevo elemento de lista a la lista principal en la página.
        listaHTML.appendChild(li);
    }
}

// 16. Función para realizar el sorteo del amigo secreto.
function sortearAmigo() {
    // 17. Validar que haya al menos dos amigos para sortear.
    if (amigos.length < 2) {
        alert('Necesitas al menos dos amigos para hacer el sorteo.');
        return;
    }
    /* 18. Elegir un número aleatorio que sea un índice de nuestra lista.
    "Math.random()" da un número entre 0 y 1.
    Lo multiplicamos por la cantidad de amigos para que el resultado esté dentro del rango.
    "Math.floor()" redondea el número hacia abajo para obtener un número entero. */
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // 19. Usar el índice aleatorio para obtener el nombre del amigo secreto.
    let amigoSecreto = amigos[indiceAleatorio];

    // 20. Obtener el elemento donde mostraremos el resultado.
    let resultadoHTML = document.getElementById('resultado');

    // 21. Limpiar el resultado anterior.
    resultadoHTML.innerHTML = '';

    // 22. Mostrar el resultado del sorteo en la página.
    let p = document.createElement('p');
    p.textContent = `¡El amigo secreto es: ${amigoSecreto}!`;
    resultadoHTML.appendChild(p);
}