const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    totalPagar: function () {
        let somaDePrecos = 0
        for (const preco of carrinho.produtos) {
            somaDePrecos += preco.precoUnit * preco.qtd;
        }
        return (somaDePrecos / 100).toFixed(2)
    },
    totalItens: () => {
        let somaDeItens = 0
        for (const item of carrinho.produtos) {
            somaDeItens += item.qtd;
        }
        return somaDeItens
    },
    totalPagar: () => {
        let somaDePrecos = 0
        for (const preco of carrinho.produtos) {
            somaDePrecos += preco.precoUnit * preco.qtd;
        }
        return (somaDePrecos / 100).toFixed(2)
    },
    imprimirResumo: function () {
        console.log(`
        Cliente: ${carrinho.nomeDoCliente}
        Total de itens: ${this.totalItens()} itens
        Total a pagar: R$ ${this.totalPagar()}
        `);
    },
    addProduto: function (produto) {
        let isItemInTheShoppingCart = false
        let itemIndex = null
        for (let i = 0; i < this.produtos.length; i++) {
            isItemInTheShoppingCart = this.produtos[i].id === produto.id ? (true, itemIndex = i) : false
        }
        isItemInTheShoppingCart ? this.produtos[itemIndex].qtd += produto.qtd : this.produtos.push(produto)
    },
    imprimirDetalhes: function () {
        console.log(`Cliente: ${this.nomeDoCliente}`)
        for (let i = 0; i < this.produtos.length; i++) {
            console.log(`Item ${i + 1} - ${this.produtos[i].nome} - ${this.produtos[i].qtd} und - R$ ${((this.produtos[i].precoUnit * this.produtos[i].qtd) / 100).toFixed(2)}`);
            
        }
        console.log(`Total de itens: ${this.totalItens()} itens`);
        console.log(`Total a pagar: R$ ${this.totalPagar()}`);
    }
}


function imprimirResumoDoCarrinho(carrinho) {
    const totalItens = () => {
        let somaDeItens = 0
        for (const item of carrinho.produtos) {
            somaDeItens += item.qtd;
        }
        return somaDeItens
    }

    const totalPagar = () => {
        let somaDePrecos = 0
        for (const preco of carrinho.produtos) {
            somaDePrecos += preco.precoUnit * preco.qtd;
        }
        return (somaDePrecos / 100).toFixed(2)
    }

    console.log(`
    Cliente: ${carrinho.nomeDoCliente}
    Total de itens: ${totalItens()} itens
    Total a pagar: R$ ${totalPagar()}
    `);
}

function addProdutoAoCarrinho(carrinho, produto) {
    let isItemInTheShoppingCart = false
    let itemIndex = null
    for (let i = 0; i < carrinho.produtos.length; i++) {
        isItemInTheShoppingCart = carrinho.produtos[i].id === produto.id ? (true, itemIndex = i) : false
    }
    isItemInTheShoppingCart ? carrinho.produtos[itemIndex].qtd += produto.qtd : carrinho.produtos.push(produto)
}

// const novaBermuda = {
//     id: 2,
//     nome: "Bermuda",
//     qtd: 3,
//     precoUnit: 5000
// }

// carrinho.addProduto(novaBermuda);
// carrinho.imprimirResumo();

// const novoTenis = {
//     id: 3,
//     nome: "Tenis",
//     qtd: 1,
//     precoUnit: 10000
// }

// carrinho.addProduto(novoTenis);
// carrinho.imprimirResumo();

carrinho.imprimirDetalhes()
imprimirResumoDoCarrinho(carrinho)
