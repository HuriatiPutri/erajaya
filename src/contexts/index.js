import { CartContextProvider } from './CartContext'
import PropTypes from 'prop-types'
export default function ContextProvider ({ children }) {
  return (
    <CartContextProvider>
      {children}
    </CartContextProvider>
  )
}

ContextProvider.defaultProps = {
  children: ''
}

ContextProvider.propTypes = {
  children: PropTypes.node
}
