// Processo de Carregamento dos Produtos
// construindo o HTML via JavaScript 

function carregarProdutos() {
    let divPai = document.getElementById('divPai')
    axios.get(urlProdutos)
        .then(res => {
            let produtos = res.data
            for (let contador = 0; contador < produtos.length; contador++) {
                let produto = produtos[contador]
                let divDeUmProduto = document.createElement('div')
                divDeUmProduto.innerHTML = `
                <div class='card'>
                    <img class='card-foto' src=${produto.foto} alt="...">
                    <div class="card-body">
                        <h3 class="card-title">${produto.nome}</h3>
                        <p class="card-text">
                        <ul>
                            <li> Preço - RS ${produto.preco} / Kg</li>
                        </ul>
                        </p>
                        <p>Quantidade (Kg): <input type='number' class='quantidade' id='quantidade${produto.id}'></p> 
                        <button id='${produto.id}' class='botao'>Adicionar ao Carrinho</button>                       
                    </div>
                </div>`
                divPai.appendChild(divDeUmProduto)
                document.getElementById(produto.id).addEventListener('click', () => {

                    escolherProduto(produto, `quantidade${produto.id}`)
                })
            }
        })
        .catch(err => {
            console.log(err)
        })
}

// Processo de Compra

function escolherProduto(produto, quantidadeDoProduto) {
    quantidadeDoProduto = document.getElementById(quantidadeDoProduto).value
    adicionarProdutoNoCarrinho(produto, quantidadeDoProduto)
}

function adicionarProdutoNoCarrinho(produto, quantidadeDoProduto) {
    if (quantidadeDoProduto > 0) {
        alert(`Você adicionou ${quantidadeDoProduto}kg de ${produto.nome} ao seu carrinho.`)
        axios.post(urlCarrinho, {
            ...produto, 'quantidade': quantidadeDoProduto
        })
            .then(res => {
                calcularValorTotalDoCarrinho().then(total => {
                    document.getElementById('resultado').value = total
                })
            })
            .catch(err => {
                alert(err)
            })
    } else {
        alert('Nenhum produto foi adicionado ao carrinho')
    }
}


window.onload = function () {
    carregarProdutos()
    let contato = document.getElementById('botaoContato')
    contato.addEventListener('click', () => {
        alert(`Para falar conosco ligue para: (11) 0 0000-0000`)
    })
    calcularValorTotalDoCarrinho().then(total => {
        document.getElementById('resultado').value = total
    })
}
