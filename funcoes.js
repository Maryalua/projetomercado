const urlCarrinho = 'http://localhost:3000/carrinho';

const urlProdutos = 'http://localhost:3000/produtos';

// calculando o valor total da compra

function calcularValorTotalDoCarrinho() {
    return new Promise ((resolve,reject)=>{
        axios.get(urlCarrinho)
        .then(res => {
            let carrinho = res.data
            let soma = 0
            for (let contador = 0; contador < carrinho.length; contador++) {
                let produtoNoEspacoAtualDoCarrinho = carrinho[contador]
                let valorTotalDoProdutoAtual = produtoNoEspacoAtualDoCarrinho.preco * produtoNoEspacoAtualDoCarrinho.quantidade
                soma = soma + valorTotalDoProdutoAtual
            }
            resolve (soma)
            
        })
        .catch(err => {
            reject (err)
        })
    })
    
}

// Faltou também fazer um axios.patch, para que uma quantidade de produto pudesse ser atualizada no carrinho de compras.
// limpando os dados da última compra 

/*function limpaDadosDoCarrinho(){
    axios.delete(urlCarrinho,'/id') //como correr o carrinho todo, sem precisar ir de id em id?!
    .then(res=>{
        console.log(res.data)       // não consegui fazer funcionar
    })
    .catch(err=>{
        cosole.log(err)
    })
}
limpaDadosDoCarrinho()
*/