/*function mensagem(nome) {
  console.log('Olá ${nome}!');

}

mensagem('Anderson');*/
/*
let resultado;

function soma(a, b) {
  resultado = a + b;
  return resultado;
}
console.log(soma(2, 3));
//console.log(resultado);
*/
/*----------------------------------------------------------------*/
/*
let resultado = 4 + 4;

function soma(a, b) {
  let resultado = a + b;
  return resultado;
}

console.log(1, resultado);
console.log(2, soma(2, 3));
console.log(3, resultado);
*/

/*-------------------------1.8 Objetos---------------------------------------*/
/*
let usuário = {
  nome: "Anderson",
  idade: 35
};

if ('idade' in usuário)
  console.log(`${usuário.nome} tem ${usuário.idade} anos.`);//anderson tem 35 anos.
*/


//--------É possível percorrer um objeto, acessando todas as suas propriedades:
/*
let usuário = {
  nome: "Beatriz",
  idade: 11
};

for (let chave in usuário)
  console.log(`${chave} = ${usuário[chave]}`);

*/

/*
let usuário = {
  nome: "João",
  idade: 35
};

let cliente = {};
for (let chave in usuário)
  cliente[chave] = usuário[chave];
*/
/*
// criando uma função que retorna um objeto

function criaUsuário(n, i) {
  let maior = i >= 18;
  return {
    nome: n,
    idade: i,
    maiorIdade: maior
  };
}

let usuário = criaUsuário('João', 35);
console.log(usuário);
*/
/*
//Propriedade que são funções
function criaUsuário(n, i) {
  return {
    nome: n,
    idade: i,
    maiorIdade: function() {
      return this.idade >= 18;
    }
  };
}

let usuário = criaUsuário('João', 35);
console.log(usuário.maiorIdade());
*/
// FUNÇÃO CONSTRUTORA
function Usuário(n, i) {
  this.nome = n;
  this.idade = i;
  this.maiorIdade = function() {
    return this.idade >= 18;

  }
}

let usuário = new Usuário('João', 35);

console.log(usuário);
console.log(usuário.maiorIdade());
