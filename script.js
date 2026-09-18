// Selección de elementos DOM
const inputVerde = document.getElementById('inputVerde');
const rectVerde = document.getElementById('rectVerde');
const hexVerde = document.getElementById('hexVerde');

const inputRojo = document.getElementById('inputRojo');
const rectRojo = document.getElementById('rectRojo');
const hexRojo = document.getElementById('hexRojo');

// Evento para actualizar color Verde
inputVerde.addEventListener('input', (e) => {
    const colorSeleccionado = e.target.value.toUpperCase();
    rectVerde.style.backgroundColor = colorSeleccionado;
    hexVerde.textContent = colorSeleccionado;
});

// Evento para actualizar color Rojo
inputRojo.addEventListener('input', (e) => {
    const colorSeleccionado = e.target.value.toUpperCase();
    rectRojo.style.backgroundColor = colorSeleccionado;
    hexRojo.textContent = colorSeleccionado;
});