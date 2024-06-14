document.addEventListener("DOMContentLoaded", function () {
  const loginLink = document.getElementById("login-link");
  const logoutLink = document.getElementById("logout-link");

  // Verifica o estado de login
  const logged = localStorage.getItem("logged");

  if (logged === "true") {
    loginLink.href = "perfil.html"; // Link para a página de perfil
    loginLink.innerHTML = '<i class="fa-solid fa-user"></i> Perfil';
    logoutLink.style.display = "block";
  } else {
    loginLink.href = "login.html"; // Link para a página de login
    loginLink.innerHTML = '<i class="fa-solid fa-user"></i> Login';
    logoutLink.style.display = "none";
  }

  // Adiciona funcionalidade ao botão de logout
  logoutLink.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.setItem("logged", "false");
    alert("Você saiu com sucesso!");
    window.location.href = "index.html"; // Redireciona para a página inicial após logout
  });
});
