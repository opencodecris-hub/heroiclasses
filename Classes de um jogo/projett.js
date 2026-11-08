// Criando a função
function calcularRankeadas(vitoriaInicial, derrotaInicial) {
    
    //Criando as variáveis 
    let vitorias = victoriaInicial;
    let derrotas = derrotaInicial;
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    //criamdo um laço 
    while (vitorias < 0) {
        vitorias = 0; 
    }

    //Classificando o nível com base nas vitórias
    if (vitorias <= 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

// Executando a função e exibindo no console
let resultado = calcularRankeadas(75, 15);
console.log(resultado);

