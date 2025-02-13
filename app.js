// Lista de amigos vacía
let amigos = [];
let amigosSorteados = []; // Lista para llevar el control de los sorteos

// Función para agregar un amigo
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    // Validación de entrada vacía
    if (nombreAmigo === "") {
        alert("Ingrese un nombre válido");
        return;
    }

    // Validación de solo letras (sin números ni caracteres especiales)
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

// Función para sortear un amigo al azar sin repetir hasta que todos sean sorteados
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear, agrega los nombres de ellos.");
        return;
    }

    // Si ya se han sorteado todos, reiniciar la lista de sorteos
    if (amigosSorteados.length === amigos.length) {
        alert("Todos los amigos han sido sorteados. Se reiniciará el sorteo.");
        amigosSorteados = [];
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
