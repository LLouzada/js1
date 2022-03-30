console.log(`Trabalhando com Lista`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`); //adicionando item à lista
console.log("Destinos Possíveis");
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);
console.log(listaDeDestinos[1], listaDeDestinos[2]);