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
let possuiHobbies = false;
// possuiHobbies = 1; Gera erro pelo mesmo motivo descrito acima.
console.log(possuiHobbies);
