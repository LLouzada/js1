console.log(`\nTrabalhando com Condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const destino = `São Paulo`;

const idadeComprador = 18;
let estaAcompanhada = false;
let temPassagemComprada = false;

console.log("\nDestinos Possíveis: " + listaDeDestinos + "\n");

const podeComprar = idadeComprador >= 18 || estaAcompanhada;
    
let destinoExiste = false;

for(let cont = 0 ; cont < 3; cont++){
    
    if(destino == listaDeDestinos[cont]){
        destinoExiste = true;
        break;
    }
    
}

if(podeComprar && destinoExiste){
    console.log("Boa Viagem!");
}else{
    console.log("Desculpe, tivemos um erro!");
}