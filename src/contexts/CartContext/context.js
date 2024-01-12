import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const CartContext = createContext()

export default function CartContextProvider ({ children }) {
  const [value, setValue] = useState([])

  const onDeleteCart = (item) => {
    const newCart = value.filter((cartItem) => cartItem.id !== item.id)
    setValue(newCart)
  }

  const onAddToCart = (data) => {
    value.find(item => item.id === data.id) ? value.find(item => item.id === data.id).qty += 1 : setValue([...value, data])
  }

  const initialValue = {
    cart: value,
    setCart: setValue,
    onDeleteCart,
    onAddToCart
  }

  return <CartContext.Provider value={initialValue}>{children}</CartContext.Provider>
}

CartContextProvider.defaultProps = {
  children: ''
}
CartContextProvider.propTypes = {
  children: PropTypes.node
}
