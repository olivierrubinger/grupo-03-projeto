document.addEventListener("DOMContentLoaded", function () {
  if (!localStorage.getItem("passeadores")) {
    const passeadores = [
      {
        nome: "Maria Silva",
        nomeUsuario: "maria.silva",
        senha: "senha123",
        foto: "imgs/perfil1.jpg",
        descricao: "Passeadora experiente com amor por animais.",
        email: "maria.silva@example.com",
      },
      {
        nome: "João Oliveira",
        nomeUsuario: "joao.oliveira",
        senha: "senha456",
        foto: "imgs/perfil2.jpg",
        descricao: "Amo cães e caminhadas ao ar livre.",
        email: "joao.oliveira@example.com",
      },
      {
        nome: "Ana Costa",
        nomeUsuario: "ana.costa",
        senha: "senha789",
        foto: "imgs/perfil3.jpg",
        descricao: "Profissional dedicada e confiável.",
        email: "ana.costa@example.com",
      },
    ];
    localStorage.setItem("passeadores", JSON.stringify(passeadores));
  }
});
