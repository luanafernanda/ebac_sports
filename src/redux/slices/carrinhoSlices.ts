import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState: [] as Produto[],
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      const produtoExistente = state.find((p) => p.id === action.payload.id)
      if (!produtoExistente) {
        state.push(action.payload)
      }
    }
  }
})

export const { adicionarAoCarrinho } = carrinhoSlice.actions
export default carrinhoSlice.reducer
