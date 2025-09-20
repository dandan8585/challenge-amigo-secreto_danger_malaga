// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigos = [];
let amigosSorteados = [];

// Función para agregar un amigo
function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value.trim(); // Elimina espacios en blanco al inicio y final

    // Validación con regex: solo letras y espacios
    const regex = /^[A-Za-z\s]+$/;
    if (nombreAmigo === "" || !regex.test(nombreAmigo)) {
        alert("Ingrese un nombre válido (solo letras y espacios)");
        return; // Detiene la función si el nombre no es válido
    }

    // Evita nombres duplicados
    if (amigos.includes(nombreAmigo)) {
        alert("Este nombre ya fue agregado");
        return;
    }

    amigos.push(nombreAmigo);
    document.getElementById('amigo').value = ""; // Limpia el campo de entrada
    mostrarAmigos();
}


// Función para mostrar la lista de amigos
function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpia la lista antes de actualizarla

    amigos.forEach((amigo) => {
        let elemento = document.createElement('li');
        elemento.textContent = amigo;
        lista.appendChild(elemento);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear");
        return; // Detiene la función si no hay amigos
    }

    if (amigosSorteados.length === amigos.length) {
        alert("Ya se sortearon todos los nombres");
        reiniciarSorteo(); // Reinicia automáticamente
        return; // Detiene la función
    }

    let amigoSorteado;
    do {
        amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    } while (amigosSorteados.includes(amigoSorteado));

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = "El amigo secreto sorteado es: " + amigoSorteado;
    amigosSorteados.push(amigoSorteado);

    // Reinicia automáticamente si ya se sortearon todos
    if (amigosSorteados.length === amigos.length) {
        setTimeout(() => {
            alert("Ya se sortearon todos los nombres");
            reiniciarSorteo();
        }, 100); // Pequeño retraso para que el usuario vea el último nombre sorteado
    }
}

// Función para reiniciar el sorteo
function reiniciarSorteo() {
    amigos = [];
    amigosSorteados = [];
    mostrarAmigos();
    document.getElementById('resultado').innerHTML = "";
}

// Detectar tecla Enter en el input
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("amigo").addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault(); // Evita el comportamiento por defecto (ej. enviar formularios)
            agregarAmigo();
        }
    });
});