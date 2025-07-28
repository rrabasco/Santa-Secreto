// VARIABLES
let nombres = [];
// FUNCION REGISTRAR NOMBRE
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }

    if (nombres.includes(nombre)) {
        alert("El nombre ya está en la lista.");
        return;
    }

    nombres.push(nombre);
    input.value = "";
    mostrarLista();
}
// Función para mostrar la lista de amigos en el HTML
 function mostrarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  nombres.forEach((nombre) => {
    const li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);
  });
 }
// Función para sortear un amigo secreto
function sortearAmigo() {
  if (nombres.length === 0) {
    alert("⚠️ No hay nombres en la lista. Agrega al menos uno.");
    return;
  }

  const indice = Math.floor(Math.random() * nombres.length);
  const ganador = nombres[indice];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; // Limpiar resultado anterior

  const li = document.createElement("li");
  li.textContent = `🎉 El amigo secreto es: ${ganador} 🎉`;
  resultado.appendChild(li);
}