const btnOrdenarPorPreco = document.querySelector('#btnOrdenarPorPreco')
btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco)

function ordenarLivrosPorPreco() {
    let livrosOrdenados = livros.sort((a, b) => {
        return a.preco - b.preco
    })
    exibirOsLivrosNaTela(livrosOrdenados)
}