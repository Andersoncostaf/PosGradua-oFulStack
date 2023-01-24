/*
  function mensagem(nome) {
  return `Olá ${nome}!`;
}
function soma() {
  return arguments[0] + arguments[1];
}

console.log(soma(1, 3, 4, 5));

*/

/*----------------------------------------------------------------*/
/*
function soma(a, b) {
  let resultado = a + b;
  return resultado;
}

let nome = "Anderson";
function mensagem(nome) {
  console.log(`Olá` + nome);
}
mensagem(' Costa');
*/

/*----------------------------------------------------------------*/
/*
function soma(a, b) {
  return a + b;
}

// let soma = function (a,b) {
// return a + b;
//}

console.log(soma(3, 5));
*/

/*-----------------------CALCULADORA-----------------------------------------*/
/*
let soma = function(a, b) {
  return a + b;
}

let subtrai = function(a, b) {
  return a - b;
}

let multiplica = function(a, b) {
  return a * b;
}

let divide = function(a, b) {
  return a / b;
}

function executa(fn, a, b) {
  return fn(a, b);
}

let resultado = executa(divide, 15, 3);
console.log(resultado);
*/

/*-----------------------fatorial -----------------------------------------*/
/*
function fatorial(n) {
  if (n <= 1)
    return 1;
  return n * fatorial(n - 1);
}

console.log(fatorial(6));*/

/*----------------------- -----------------------------------------*/

let f = function fatorial(n) {
  if (n <= 1) return 1;
  return n * fatorial(n - 1);
};

let g = f;
f = null;

console.log(g(6));