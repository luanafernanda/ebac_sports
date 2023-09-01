import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState: [] as Produto[],
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produtoExistente = state.find((p) => p.id === action.payload.id)
      if (produtoExistente) {
        return state.filter((p) => p.id !== action.payload.id)
      } else {
        state.push(action.payload)
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
