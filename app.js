// Lista de amigos vacía
let amigos = [];
let amigosSorteados = [];

// Función para agregar un amigo
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    // Validación de entrada vacía
    if (nombreAmigo === "") {
        alert("Ingrese un nombre válido");
        return;
    }

    // Validación de solo letras y espacios
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    if (!regex.test(nombreAmigo)) {
        alert("Ingrese solo letras y espacios");
        return;
    }

    // Verificar que el nombre no esté duplicado
    if (amigos.includes(nombreAmigo)) {
        alert("Este nombre ya fue ingresado");
        return;
    }

    // Agregar nombre al array
    amigos.push(nombreAmigo);

    // Actualizar la lista en la interfaz
    actualizarLista();

    // Limpiar el campo de entrada y enfocar
    inputAmigo.value = "";
    inputAmigo.focus();
}

// Función para actualizar la lista de amigos en el HTML
function actualizarLista() {
    const listaAmigosUI = document.getElementById("listaAmigos");
    listaAmigosUI.innerHTML = ""; // Limpiar la lista antes de actualizar

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigosUI.appendChild(li);
    });
}

// Función para sortear un amigo al azar sin repetir
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debes ingresar al menos 2 nombres para poder sortear.");
        return;
    }

    // Si ya se han sorteado todos, mostrar el botón de reinicio
    if (amigosSorteados.length === amigos.length) {
        alert("Todos los amigos han sido sorteados.");
        document.getElementById("botonReiniciar").style.display = "block"; // Mostrar el botón
        return;
    }

    let amigoSorteado;
    do {
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        amigoSorteado = amigos[indiceAleatorio];
    } while (amigosSorteados.includes(amigoSorteado)); // Evita repetir nombres ya sorteados

    amigosSorteados.push(amigoSorteado); // Agregar el amigo sorteado a la lista de sorteados

    const resultadoI = document.getElementById("resultado");
    resultadoI.innerHTML = `<li>${amigoSorteado}</li>`;
}

// Función para reiniciar completamente (borrar amigos y sorteos)
function reiniciarSorteo() {
    amigos = []; // Vaciar la lista de amigos
    amigosSorteados = []; // Vaciar la lista de sorteados

    document.getElementById("listaAmigos").innerHTML = ""; // Borrar lista en la interfaz
    document.getElementById("resultado").innerHTML = ""; // Borrar resultado
    document.getElementById("botonReiniciar").style.display = "none"; // Ocultar el botón de reinicio

    alert("Sorteo reiniciado. La lista de amigos ha sido borrada.");
}

// Ocultar el botón de reinicio al cargar la página
window.onload = function() {
    document.getElementById("botonReiniciar").style.display = "none"; // Asegurarse de que esté oculto
};
