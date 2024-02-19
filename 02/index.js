const carro = {
    ligado: false,
    velocidade: Number("0"),

    ligar: function () {
       this.ligado === true ? console.log('Este carro já está ligado.') : ((this.ligado = true), this.status())
    },
    desligar: function () {
        this.ligado === false ? console.log('Este carro já está desligado.'): this.velocidade === 0 ? (this.ligado = false, this.velocidade = 0, this.status()) : console.log('Pare o carro para desliga-lo!');
    },
    acelerar: function () {
       this.ligado === false ? this.startStop(): (this.velocidade += 10, this.status())
    },
    desacelerar: function () {
        this.ligado === false ? console.log('Não é possível desacelerar um carro desligado.'): this.velocidade === 10 ? this.startStop() : (this.velocidade -= 10, this.status())
    },    
    status: function () {
        this.ligado === false ? console.log(`Carro desligado. Velocidade: ${this.velocidade}.`):
        (console.log(`Carro ligado. Velocidade: ${this.velocidade}.`))
    },
    startStop: function () {
        this.ligado === false ? (this.ligado = true, this.velocidade += 10, this.status()) : (this.ligado = false, this.velocidade = 0, this.status())
    } 
}

carro.desligar()
carro.ligar()
carro.ligar()
carro.acelerar()
carro.acelerar()
carro.desacelerar()
carro.desligar()
carro.desacelerar()
carro.desacelerar()
carro.acelerar()
carro.desacelerar()
carro.ligar()