document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("loginForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const nomeUsuario = document.getElementById("nomeUsuario").value;
      const senha = document.getElementById("senha").value;

      let passeadores = JSON.parse(localStorage.getItem("passeadores")) || [];

      const user = passeadores.find(
        (passeador) =>
          passeador.nomeUsuario === nomeUsuario && passeador.senha === senha
      );

      if (user) {
        localStorage.setItem("logged", "true");
        alert("Login realizado com sucesso!");
        window.location.href = "index.html"; // Redireciona para a página inicial após login
      } else {
        alert("Nome de usuário ou senha incorretos.");
      }
    });
});
