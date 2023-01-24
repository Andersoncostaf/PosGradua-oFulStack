function mensagem(nome) {
  return `Olá ${nome}!`;
}

function soma() {
  console.log(arguments);
  return;
}

soma(1, 3, 4, 4, 2, 2, 33, 3232, 3);