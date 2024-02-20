const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function (valor) {
        this.saldo += valor
        const obj = {
            tipo: "Depósito",
            valor 
        }
        this.historicos.push(obj)
        return console.log(`Deposito de R$${(valor / 100).toFixed(2)} realizado para o cliente: ${this.nome}`);
    },
    sacar: function (valor) {
        const obj = {
            tipo: "Saque",
            valor
        }
        this.saldo < valor ? console.log(`Saldo insuficiente para o saque de: ${this.nome}`) : (this.saldo -= valor, this.historicos.push(obj),console.log(`Saque de R$${(valor / 100).toFixed(2)} realizado para o cliente: ${this.nome}`))
    },
    extrato: function () {
        console.log(`Extrato de ${this.nome} - Saldo R$${(this.saldo / 100).toFixed(2)}`)
        console.log(`Histórico:`)
        for (const movimentação of this.historicos) {
            console.log(`${movimentação.tipo} de ${(movimentação.valor / 100).toFixed(2)}`);
        }
    }
}
console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.sacar(50000));
console.log(contaBancaria.sacar(5000));
console.log(contaBancaria.extrato());