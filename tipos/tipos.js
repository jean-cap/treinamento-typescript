"use strict";
// string
let nome = 'Jean Carlos';
console.log(nome);
// nome = 42; Gera erro, pois quando a variável é inicializada como string, o tipo é inferido à variável, não permitindo a troca de tipo.
// number
let idade = 42;
// idade = 'Jean Carlos'; Gera erro pelo mesmo motivo descrito acima.
idade = 42.5; // Permitido, assim como o JavaScript, o Typescript não faz diferenciação entre inteiro e ponto flutuante, é tudo Number.
console.log(idade);
// boolean
let possuiHobbies = true;
// possuiHobbies = 1; Gera erro pelo mesmo motivo descrito acima.
console.log(possuiHobbies);
// A inferência de tipos não ocorre quando se declara a variável mas inicializa ela mais tarde.
let minhaIdade;
minhaIdade = 42;
console.log(typeof minhaIdade); // number
minhaIdade = 'Jean Carlos';
console.log(typeof minhaIdade); // string
// Para evitar isso, é necessário utilizar tipos explícitos:
let meuNome;
meuNome = 'Jean Carlos';
// meuNome = 42; Gera erro
console.log(typeof meuNome);
// array
let hobbies = ['Ver filmes', 'Jogar videogame'];
console.log(hobbies[1]);
console.log(typeof hobbies);
// hobbies = [100]; Gera erro pois foi inferido o tipo string no momento da declaração do array.
// Isso pode ser contornado utilizando o tipo any.
let diversos = ['Abacate', 'Morango'];
diversos = [10, 20]; // Não gera mais erro.
// tuplas - tuplas devem respeitar o tipo e ordem, neste caso, só é permitido um array contendo uma string seguida de um número
let endereco = ['Rua XV de novembro', 100];
console.log(endereco);
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Azul"] = 0] = "Azul";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Cinza"] = 2] = "Cinza";
})(Cor || (Cor = {}));
let minhaCor = Cor.Azul;
console.log(minhaCor); // 0
// any (aceita qualquer tipo)
let carro = 'BMW';
console.log(carro);
carro = {
    marca: 'BMW',
    ano: 2022
};
console.log(carro);
