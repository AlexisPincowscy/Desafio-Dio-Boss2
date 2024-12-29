const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o número de vitórias: ", (vitorias) => {
    rl.question("Digite o número de derrotas: ", (derrotas) => {
        vitorias = parseInt(vitorias);
        derrotas = parseInt(derrotas);

        let saldoFinal = saldoVitorias(vitorias, derrotas);
        let nivelHeroi = nivel(saldoFinal);
        console.log(`Seu saldo de vitórias é ${saldoFinal} e seu nível é ${nivelHeroi}`);

        rl.close();
    });
});

function saldoVitorias (vitorias = 0, derrotas = 0) {
    return vitorias - derrotas;
}

function nivel (saldoVitorias){
    if (saldoVitorias <= 10) {
        return "Ferro";
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        return "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        return "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        return "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        return "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        return "Lendário";
    } else if (saldoVitorias >= 101) {
        return "Imortal";
    } 
}