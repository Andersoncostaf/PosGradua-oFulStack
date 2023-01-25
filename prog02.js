function mensagem(nome) {
  return `Olá ${nome}!`;

}


function soma(a = 0, b = 0) {
  //  console.log(a, typeof a);
  //  console.log(b, typeof b);
  return a + b;
}

console.log(1, soma(1, 3));