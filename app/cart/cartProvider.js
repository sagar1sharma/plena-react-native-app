import React from 'react'
import Cart from './cart'
import { Provider } from 'react-redux'
import { store } from '../../redux/store'

const cartProvider = () => {
  return (
    <Provider store={store}>
    <Cart />
    </Provider>
  )
}

export default cartProvider