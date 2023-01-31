console.log("Verificando banco..");


var cliente = [];

cliente['nome'] = 'Eduardo Evaristo';
cliente['telefone'] = '14997918312';
cliente['email'] = 'edueevaristo@gmail.com';
cliente['salario'] = 14999.2;

let dinheiroPadraoBrasileiro = dinheiro(cliente['salario']);
let emailValidado = email(cliente['email']);
// const telefoneValidado = telefone(cliente['telefone']);

// console.log(emailValidado);
// console.log(telefoneValidado);
// console.log(dinheiroPadraoBrasileiro);
console.log("Tentativa inicial de cadastro do: " + cliente["nome"] + " - Saldo inicial informado: " + dinheiroPadraoBrasileiro + " \n");


console.log("Validando dados informados... \n");

if (cliente['salario'] < '100') {

    console.log("Sando inicial insuficiente para realizar cadastro. Realize um depósito e tente novamente.");
    return;

} else {

    console.log("Saldo de: " + dinheiroPadraoBrasileiro + " válido para criação da conta, prosseguindo..");
}

if (emailValidado == false && empty(cliente['nome'])) {

    console.log("Obrigatório informar nome e um e-mail válido para prosseguir...");
    return;

} else {

    emailValidado = cliente['email'];
    console.log("E-mail informado: " + emailValidado + " válido pra criação da conta, prosseguindo..");
    console.log("Nome informado: " + cliente['nome'] + " válido pra criação da conta, prosseguindo..");

}




function dinheiro(data) {

    const dinheiroFormatado = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(data);

    return dinheiroFormatado;
}

function email(data) {

    var emailValidacao = /\S+@\S+\.\S+/;

    return emailValidacao.test(data);
}

// function telefone(data) {

//     var regex = new RegExp('/^([14689][0-9]|2[12478]|3([1-5]|[7-8])|5([13-5])|7[193-7])9[0-9]{8}$/');

//     return regex.test(data);
// }
