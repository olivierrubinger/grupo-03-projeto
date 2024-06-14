document.addEventListener("DOMContentLoaded", function () {
  const perfilFoto = document.getElementById("perfil-foto");
  const perfilNome = document.getElementById("perfil-nome");
  const perfilDescricao = document.getElementById("perfil-descricao");
  const perfilEmail = document.getElementById("perfil-email");

  const editarPerfilBtn = document.getElementById("editar-perfil-btn");
  const editarPerfilContainer = document.getElementById(
    "editarPerfilContainer"
  );
  const editarPerfilForm = document.getElementById("editarPerfilForm");
  const editarNome = document.getElementById("editarNome");
  const editarEmail = document.getElementById("editarEmail");
  const editarDescricao = document.getElementById("editarDescricao");
  const editarFoto = document.getElementById("editarFoto");
  const editarFotoPreview = document.getElementById("editarFotoPreview");
  const cancelarEdicaoBtn = document.getElementById("cancelarEdicaoBtn");

  const loggedUser = localStorage.getItem("loggedUser");
  if (!loggedUser) {
    alert("Usuário não encontrado!");
    window.location.href = "index.html";
    return;
  }

  const passeadores = JSON.parse(localStorage.getItem("passeadores")) || [];
  let user = passeadores.find(
    (passeador) => passeador.nomeUsuario === loggedUser
  );

  if (user) {
    perfilFoto.src = user.foto;
    perfilNome.textContent = user.nome;
    perfilDescricao.textContent = user.descricao;
    perfilEmail.textContent = user.email;

    editarNome.value = user.nome;
    editarEmail.value = user.email;
    editarDescricao.value = user.descricao;
  } else {
    alert("Usuário não encontrado!");
    window.location.href = "index.html";
  }

  editarPerfilBtn.addEventListener("click", function () {
    editarPerfilContainer.style.display = "block";
  });

  cancelarEdicaoBtn.addEventListener("click", function () {
    editarPerfilContainer.style.display = "none";
  });

  editarFoto.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        editarFotoPreview.src = e.target.result;
        editarFotoPreview.style.display = "block";
      };
      reader.readAsDataURL(file);
    }
  });

  editarPerfilForm.addEventListener("submit", function (event) {
    event.preventDefault();

    user.nome = editarNome.value;
    user.email = editarEmail.value;
    user.descricao = editarDescricao.value;

    if (editarFoto.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        user.foto = e.target.result;
        salvarEdicao();
      };
      reader.readAsDataURL(editarFoto.files[0]);
    } else {
      salvarEdicao();
    }
  });

  function salvarEdicao() {
    const updatedPasseadores = passeadores.map((p) =>
      p.nomeUsuario === loggedUser ? user : p
    );
    localStorage.setItem("passeadores", JSON.stringify(updatedPasseadores));
    alert("Perfil atualizado com sucesso!");
    window.location.reload();
  }
});
