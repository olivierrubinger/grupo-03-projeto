document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("foto").addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const fotoPreview = document.getElementById("fotoPreview");
        fotoPreview.src = e.target.result;
        fotoPreview.style.display = "block";
        document.getElementById("fotoLabel").textContent = "Foto Selecionada";
      };
      reader.readAsDataURL(file);
    }
  });

  document
    .getElementById("cadastroForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const nome = document.getElementById("nome").value;
      const nomeUsuario = document.getElementById("nomeUsuario").value;
      const email = document.getElementById("email").value;
      const senha = document.getElementById("senha").value;
      const confirmarSenha = document.getElementById("confirmarSenha").value;
      const descricao = document.getElementById("descricao").value;
      const foto = document.getElementById("foto").files[0];

      if (senha !== confirmarSenha) {
        alert("As senhas não coincidem.");
        return;
      }

      const passeador = { nome, nomeUsuario, senha, descricao, email };

      if (foto) {
        const reader = new FileReader();
        reader.onload = function (e) {
          passeador.foto = e.target.result;
          salvarPasseador(passeador);
        };
        reader.readAsDataURL(foto);
      } else {
        salvarPasseador(passeador);
      }
    });
});

function salvarPasseador(passeador) {
  let passeadores = JSON.parse(localStorage.getItem("passeadores")) || [];
  passeadores.push(passeador);
  localStorage.setItem("passeadores", JSON.stringify(passeadores));
  alert("Cadastro realizado com sucesso!");
  document.getElementById("cadastroForm").reset();
  document.getElementById("fotoLabel").textContent = "Upload de Foto";
  document.getElementById("fotoPreview").style.display = "none";
}
