//exercicio funções
//function minhaFuncao(variavel) {
//    return variavel * 5
//}
//(minhaFuncao(2));
//(minhaFuncao(10));
//1-a:vai ser impresso no console a multiplicação dos numeros 2 e 10 pelo 5.
//1-b:Não apareceria nada no console.

//2
//let textoDoUsuario = prompt("insira um texto");
//const outraFuncao = function(texto) {
//    return texto.toLowerCase().includes("cenoura");
//}
//const resposta = outraFuncao(textoDoUsuario);
//console.log(resposta);
//2-A:essa função vai procurar no texto escrito pelo usuario a palavra que foi inserida na função,nesse caso "cenoura".
//2-B:true,true e true

//exercicio escrita de codigo
//1-A:
function fraseSobreMim() {
    console.log("Eu sou Arthur, tenho 17 anos, moro em São Leopoldo e sou estudante");
}
fraseSobreMim();

//1-B:
function criarMensagemPessoa(nome, idade, cidade, profissao) {
    const mensagem = `eu sou ${nome}, tenho ${idade}, anos, moro em ${cidade}, e sou ${profissao}`;
    return mensagem;
}
const pessoaInfo = criarMensagemPessoa("Lais", 23, "São Paulo", "instrutora");
console.log(pessoaInfo);

//2-A:
function somarNumeros(numero1, numero2) {
    const resultado = numero1 + numero2;
    return resultado;
}
const resultadoSoma = somarNumeros(5, 7);
console.log(resultadoSoma);
//2-B:
function verificarMaiorOuIgual(numeroA, numeroB) {
    return numeroA >= numeroB;
}
const resultadoComparacao = verificarMaiorOuIgual(5, 3);
console.log(resultadoComparacao);

//2-C:
function verificarSeEPar(numeroC) {
    return numeroC % 2 === 0;
}
const resultadoVerificacao = verificarSeEPar(8);
console.log(resultadoVerificacao);

//2-D:
function mensagemMaiuscula(mensagem) {
    const tamanho = mensagem.length;
    const mensagemUpperCase = mensagem.toUpperCase();

    console.log(`Tamanho da mensagem: ${tamanho}`);
    console.log(`Mensagem em letras maiúsculas: ${mensagemUpperCase}`);
}
const minhaMensagem = ("ola mundo!");
mensagemMaiuscula(minhaMensagem);

//3
function somar(primeiroNumero, segundoNumero) {
    return primeiroNumero + segundoNumero;
}
function subtrair(primeiroNumero, segundoNumero) {
    return primeiroNumero - segundoNumero;
}
function multiplicar(primeiroNumero, segundoNumero) {
    return primeiroNumero * segundoNumero;
}
function dividir(primeiroNumero, segundoNumero) {
    return primeiroNumero / segundoNumero;
}
const primeiroNumero = Number(prompt("Digite um numero"));
const segundoNumero = Number(prompt("digite outro numero"));

console.log(`Soma: ${somar(primeiroNumero, segundoNumero)}`);
console.log(`Subtração: ${subtrair(primeiroNumero, segundoNumero)}`);
console.log(`Multiplicação: ${multiplicar(primeiroNumero, segundoNumero)}`);
console.log(`Divisão ${dividir(primeiroNumero, segundoNumero)}`);
