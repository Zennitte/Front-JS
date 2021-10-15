var Pessoa = new Object();

Pessoa.nome = "Nayara";
Pessoa.sobrenome = "Escudeiro";
Pessoa.sexo = "Feminino";
Pessoa.idade = 17;
Pessoa.altura = 1.52;
Pessoa.peso = 65;
Pessoa.andando = false;
Pessoa.caminhouQuantosMetros = 0;

console.log(Pessoa);

Pessoa.fazerAniversario = function () {
    Pessoa.idade += 1;
}

Pessoa.fazerAniversario()

console.log(Pessoa);

Pessoa.andar = function (metrosCaminhados) {
    Pessoa.caminhouQuantosMetros += metrosCaminhados;

    Pessoa.andando = true;
}

Pessoa.andar(10);

console.log(Pessoa);

Pessoa.parar = function () {
    Pessoa.andando = false;
}

Pessoa.parar();

console.log(Pessoa)

Pessoa.nomeCompleto = function () {
    return console.log("Ola! Meu nome é " + Pessoa.nome + " " + Pessoa.sobrenome + "!");
}

Pessoa.nomeCompleto();

Pessoa.mostrarIdade = function () {
    return console.log("Olá, eu tenho " + Pessoa.idade + " anos")
}

Pessoa.mostrarIdade();

Pessoa.mostrarPeso = function () {
    return console.log("Eu peso " + Pessoa.peso + "Kg")
}

Pessoa.mostrarPeso();

Pessoa.mostrarAltura = function () {
    return console.log("Minha altura é " + Pessoa.altura + "m")
}

Pessoa.mostrarAltura();

Pessoa.fazerAniversario();
Pessoa.fazerAniversario();
Pessoa.fazerAniversario();

Pessoa.mostrarIdade();

Pessoa.andar(3);
Pessoa.andar(5);
Pessoa.andar(7);

console.log(`A pessoa está andando: ${Pessoa.andando}`);

Pessoa.continuaAndando = function () {

    if (Pessoa.andando == true) {
        Pessoa.parar();

        return console.log("A pessoa parou");
    }

    else{
        return console.log("A pessoa está parada");
    }

}

Pessoa.continuaAndando();

console.log(`A pessoa andou ${Pessoa.caminhouQuantosMetros}m`);

Pessoa.apresentacao = function()
{
    let pronome = "o";
    let anos = "anos";
    let metros = "metros";

    if (Pessoa.sexo == "Feminino") {
        
        pronome = "a";
    }

    if (Pessoa.idade == 1) {
        anos = "ano";
    }

    if (Pessoa.caminhouQuantosMetros == 1) {
        metros = "metro";
    }

    return console.log(`Ola eu sou ${pronome} ${Pessoa.nome} ${Pessoa.sobrenome}, tenho ${Pessoa.idade} ${anos}, meu peso é ${Pessoa.peso}kg e, só hoje já caminhei ${Pessoa.caminhouQuantosMetros} ${metros}!`);

}

Pessoa.apresentacao();