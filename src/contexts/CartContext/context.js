import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export const CartContext = createContext()

export default function CartContextProvider ({ children }) {
  const [value, setValue] = useState([])
  const [toast, setToast] = useState({ isOpen: false, message: '' })

  const onDeleteCart = (item) => {
    const newCart = value.filter((cartItem) => cartItem.id !== item.id)
    setValue(newCart)
  }

  const onAddToCart = (data) => {
    value.find(item => item.id === data.id) ? value.find(item => item.id === data.id).qty++ : setValue([...value, data])
    setToast({ isOpen: true, message: 'Successfully added to cart' })
  }

  const initialValue = {
    cart: value,
    setCart: setValue,
    onDeleteCart,
    onAddToCart,
    alert: toast
  }

  useEffect(() => {
    toast.isOpen &&
      setTimeout(function () {
        setToast({ isOpen: false, message: '' })
      }, 2000)
  }, [toast])

  return <CartContext.Provider value={initialValue}>{children}</CartContext.Provider>
}

CartContextProvider.defaultProps = {
  children: ''
}
CartContextProvider.propTypes = {
  children: PropTypes.node
}
