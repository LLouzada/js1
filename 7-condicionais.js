console.log(`Trabalhando com Condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

let destinoComprado;

const idadeComprador = 19;
let estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos Possíveis: " + listaDeDestinos + "\n");

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
// } else if (estaAcompanhada) {
//     console.log("Comprador está acompanhado");
// } else {
//     console.log("Comprador menor de idade e desacompanhado");
// }



if (idadeComprador >= 18 || estaAcompanhada) {
    console.log("Comprador autorizado\n");
    destinoComprado = listaDeDestinos.pop(0, 1);
    console.log("Destino comprado: " + destinoComprado + "\n");
} else {
    console.log("Comprador menor de idade e desacompanhado\n");
}
console.log("Destinos restantes: " + listaDeDestinos);


console.log("Embarque: \n\n");
if(idadeComprador >=18 && temPassagemComprada){
    console.log("Boa Viagem!");
}else {
    console.log("Você não pode embarcar");
}
