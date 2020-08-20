// mostrando a compra feita pelo cliente 

function listaDeCompra() {
  axios.get(urlCarrinho)
    .then(res => {
      let compra = res.data
      compra.forEach(produto => {
        let listaDeCompra = document.getElementById('listaDeCompra')
        let item = document.createElement('option')
        item.textContent = `Você comprou ${produto.quantidade}kg de ${produto.nome}.`
        listaDeCompra.appendChild(item)
      })
      calcularValorTotalDoCarrinho().then(total => {
        document.getElementById('resultadopagamento').value = total
      })

    })
    .catch(err => {
      console.log(err)
    })

}
listaDeCompra()

window.onload = function () {

  let contato = document.getElementById('botaoContato')
  contato.addEventListener('click', () => {
    alert(`Para falar conosco ligue para: (11) 0 0000-0000`)
  })

}
