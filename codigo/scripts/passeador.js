document.addEventListener("DOMContentLoaded", function () {
  const perfilFoto = document.getElementById("perfil-foto");
  const perfilNome = document.getElementById("perfil-nome");
  const perfilDescricao = document.getElementById("perfil-descricao");
  const perfilEmail = document.getElementById("perfil-email");

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const passeadorId = urlParams.get("id");

  if (!passeadorId) {
    alert("Passeador não encontrado!");
    window.location.href = "passeadores.html";
    return;
  }

  const passeadores = JSON.parse(localStorage.getItem("passeadores")) || [];
  const user = passeadores.find(
    (passeador) => passeador.nomeUsuario === passeadorId
  );

  if (user) {
    perfilFoto.src = user.foto;
    perfilNome.textContent = user.nome;
    perfilDescricao.textContent = user.descricao;
    perfilEmail.textContent = user.email;
    document
      .getElementById("enviar-email-btn")
      .addEventListener("click", function () {
        window.location.href = `mailto:${user.email}`;
      });
  } else {
    alert("Passeador não encontrado!");
    window.location.href = "passeadores.html";
  }
});
