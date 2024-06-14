document.addEventListener("DOMContentLoaded", function () {
  const cardsContainer = document.getElementById("cardsContainer");

  let passeadores = JSON.parse(localStorage.getItem("passeadores")) || [];

  passeadores.forEach((passeador) => {
    const card = document.createElement("div");
    card.className = "card-walkers";

    const img = document.createElement("img");
    img.src = passeador.foto;
    img.alt = passeador.nome;

    const starsDiv = document.createElement("div");
    starsDiv.className = "stars";

    const name = document.createElement("h2");
    name.textContent = passeador.nome;

    // Placeholder para as estrelas de classificação (todas preenchidas por enquanto)
    const starCount = 5; // Este é um placeholder. Altere conforme necessário
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("i");
      star.className = "fa-solid fa-star";
      starsDiv.appendChild(star);
    }

    const button = document.createElement("button");
    button.textContent = "Saiba mais";

    starsDiv.appendChild(name);
    starsDiv.appendChild(button);

    card.appendChild(img);
    card.appendChild(starsDiv);

    cardsContainer.appendChild(card);
  });
});
