var isTruthy = function (arg) {
    return !!arg
};

console.log(isTruthy(false));
console.log(isTruthy(null));
console.log(isTruthy(undefined));
console.log(isTruthy(0));
console.log(isTruthy(NaN));
console.log(isTruthy(''), "\n");

console.log(isTruthy(true));
console.log(isTruthy({}));
console.log(isTruthy([]));
console.log(isTruthy(42));
console.log(isTruthy("foo"));
console.log(isTruthy(new Date()));
console.log(isTruthy(-42));
console.log(isTruthy(3.14));
console.log(isTruthy(-3.14));
console.log(isTruthy(Infinity));
console.log(isTruthy(-Infinity));

var Carro = new Object();

Carro.marca = "Tesla";
Carro.modelo = "Cybertruck";
Carro.placa = "1111111A";
Carro.ano = 2020;
Carro.cor = "preto";
Carro.quantasPortas = 4;
Carro.assentos = 6;
Carro.quantidadePessoas = 0;

Carro.mudarCor = function (cor) {
    Carro.cor = cor;
}

Carro.mudarCor("Prata");

Carro.obterCor = function () {
    return console.log(`A cor é ${Carro.cor}`);
}

Carro.obterCor();

Carro.obterModelo = function () {
    return console.log(`A modelo é ${Carro.modelo}`);
}

Carro.obterModelo();

Carro.obterMarca = function () {
    return console.log(`A marca é ${Carro.marca}`);
}

Carro.obterMarca();

Carro.obterMarcaModelo = function () {
    return console.log(`Esse carro é um ${Carro.marca} ${Carro.modelo}`);
}

Carro.obterMarcaModelo();

Carro.adicionarPessoas = function(pessoas){
    if (pessoas > 6) {
        let lugarVago = Carro.assentos - Carro.quantidadePessoas

        if (lugarVago == 1) {
            return console.log(`Só cabe mais ${lugarVago} pessoa`)
        }

        return console.log(`Só cabem ${lugarVago} pessoas`)
    }
    if (Carro.quantidadePessoas >= 6) {
        return console.log("O carro já está lotado!")
    }

    Carro.quantidadePessoas += pessoas;

    return console.log(`Já temos ${Carro.quantidadePessoas} pessoas no carro`)
}

Carro.sair = function(pessoas){
    Carro.quantidadePessoas -= pessoas;

    return console.log(`${pessoas} sairam do carro`)
};

Carro.obterCor();

Carro.mudarCor("Vermelho");

Carro.obterCor();

Carro.mudarCor("Verde Musgo");

Carro.obterMarcaModelo();

Carro.adicionarPessoas(2);

Carro.adicionarPessoas(4);

Carro.sair(4);

Carro.adicionarPessoas(10);
