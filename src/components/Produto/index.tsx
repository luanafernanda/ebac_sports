import { Produto as ProdutoType } from '../../App'
import * as S from './styles'

type Props = {
  produto: ProdutoType
  aoComprar: (produto: ProdutoType) => void
  favoritar: (produto: ProdutoType) => void
  estaNosFavoritos: boolean
  carrinho: ProdutoType[]
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({
  produto,
  aoComprar,
  favoritar,
  estaNosFavoritos,
  carrinho
}: Props) => {
  function manipularAdicaoAoCarrinho(produto: ProdutoType) {
    if (carrinho.find((p) => p.id === produto.id)) {
      alert('Item já adicionado')
    } else {
      aoComprar(produto)
    }
  }

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={() => favoritar(produto)} type="button">
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar
        onClick={() => manipularAdicaoAoCarrinho(produto)}
        type="button"
      >
        Adicionar Ao Carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
