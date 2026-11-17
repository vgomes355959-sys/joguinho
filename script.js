const botoes =
  document.querySelectorAll(".jogada");

const resultado =  document.getElementById("resultado");

const opcoes = [
  "Pedra",
  "Papel",
  "Tesoura"
];

// ADICIONA EVENTO EM CADA BOTÃO
botoes.forEach((botao) => {

  botao.addEventListener("click", () => {

    const jogador =
      botao.dataset.jogada;

    jogar(jogador);

  });

});

function jogar(jogador) {

  // ESCOLHA DO COMPUTADOR
  const computador =
    opcoes[Math.floor(Math.random() * 3)];

  let mensagem = "";

  // EMPATE
  if (jogador === computador) {

    mensagem = "😐 Empate!";

  }

  // VITÓRIA
  else if (

    (jogador === "Pedra" && computador === "Tesoura") ||

    (jogador === "Papel" && computador === "Pedra") ||

    (jogador === "Tesoura" && computador === "Papel")

  ) {

    mensagem = "🎉 Você venceu!";

  }

  // DERROTA
  else {

    mensagem = "💻 Computador venceu!";
  }

  // ATUALIZA TELA
  resultado.innerHTML = `

    <div class="card">

      <h2>Você escolheu:</h2>
      <p>${jogador}</p>

      <h2>Computador escolheu:</h2>
      <p>${computador}</p>

      <h1>${mensagem}</h1>

    </div>

  `;
}