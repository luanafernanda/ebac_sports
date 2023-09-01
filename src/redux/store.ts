import { configureStore } from '@reduxjs/toolkit'
import produtosReducer from './slices/produtosSlice'
import carrinhoReducer from './slices/carrinhoSlices'
import favoritosReducer from './slices/favoritosSlices'

export const store = configureStore({
  reducer: {
    produtos: produtosReducer,
    carrinho: carrinhoReducer,
    favoritos: favoritosReducer
  }
})
