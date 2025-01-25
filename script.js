// Botón para abrir el enlace de YouTube
document.getElementById('mi-boton').addEventListener('click', () => {
  window.open('https://www.youtube.com/@guisopolvoriento4763', '_blank');
});

// Botón para mostrar la lista de juegos
document.getElementById('mostrar-juegos').addEventListener('click', () => {
  const juegos = [
    "Fran Bow",
    "Fear and hunger/Termina",
    "Minecraft",
    "League of Legends",
    "Stardew Valley",
    "The binding of Isaac(Rebirth)",
    "New super mario bros wii",
    "Grand thef auto 5",
    "Milk inside a bag",
    "Plants versus zombies",
  ];

  const listaJuegos = document.getElementById('lista-juegos');
  listaJuegos.innerHTML = ""; // Limpia la lista por si ya está mostrada

  juegos.forEach(juego => {
    const item = document.createElement('li');
    item.textContent = juego;
    item.style.fontFamily = "'Arial Black', Gadget, sans-serif"; // Tipografía
    item.style.fontWeight = "bold"; // Negrita
    listaJuegos.appendChild(item);
  });

  listaJuegos.style.display = "block"; // Muestra la lista
});
