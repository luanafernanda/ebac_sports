import { createSlice } from '@reduxjs/toolkit'

const produtosSlice = createSlice({
  name: 'produtos',
  initialState: [],
  reducers: {
    setProdutos: (state, action) => action.payload
  }
})

export const { setProdutos } = produtosSlice.actions
export default produtosSlice.reducer
