document.addEventListener("DOMContentLoaded", function () {
  const perfilFoto = document.getElementById("perfil-foto");
  const perfilNome = document.getElementById("perfil-nome");
  const perfilDescricao = document.getElementById("perfil-descricao");
  const perfilEmail = document.getElementById("perfil-email");

  const loggedUser = localStorage.getItem("loggedUser");
  if (!loggedUser) {
    alert("Usuário não encontrado!");
    window.location.href = "index.html";
    return;
  }

  const passeadores = JSON.parse(localStorage.getItem("passeadores")) || [];
  const user = passeadores.find(
    (passeador) => passeador.nomeUsuario === loggedUser
  );

  if (user) {
    perfilFoto.src = user.foto;
    perfilNome.textContent = user.nome;
    perfilDescricao.textContent = user.descricao;
    perfilEmail.textContent = user.email;
  } else {
    alert("Usuário não encontrado!");
    window.location.href = "index.html";
  }
});
