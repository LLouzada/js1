console.log("Atribuição de Variáveis");

const idade = 30;
const primeiroNome = "Lucas";
const sobrenome = "Louzada";

console.log(primeiroNome,sobrenome);
console.log(primeiroNome + " " + sobrenome);
//crase (template literals)
console.log(`Meu nome é ${primeiroNome} ${sobrenome}`); 

const nomeCompleto = primeiroNome + sobrenome;
console.log(nomeCompleto);

//const = constante
//let = variavel
//boa pratica: usar o máximo possivel de const

let contador = 0;
contador += 1;