import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adicionarAoCarrinho } from './redux/slices/carrinhoSlices'
import { favoritar } from './redux/slices/favoritosSlices'
import { setProdutos } from './redux/slices/produtosSlice'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const dispatch = useDispatch()

  const produtos = useSelector((state: any) => state.produtos)
  const carrinho = useSelector((state: any) => state.carrinho)
  const favoritos = useSelector((state: any) => state.favoritos)

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/ebac_sports')
      .then((res) => res.json())
      .then((res) => dispatch(setProdutos(res)))
  }, [dispatch])

  function handleAdicionarAoCarrinho(produto: Produto) {
    dispatch(adicionarAoCarrinho(produto))
  }

  function handleFavoritar(produto: Produto) {
    dispatch(favoritar(produto))
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} itensNoCarrinho={carrinho} />
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          carrinho={carrinho}
          favoritar={handleFavoritar}
          adicionarAoCarrinho={handleAdicionarAoCarrinho}
        />
      </div>
    </>
  )
}

export default App
