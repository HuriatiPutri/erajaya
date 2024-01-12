import { CartContext } from '@/contexts/CartContext/context'
import { IconShoppingCart } from '@tabler/icons-react'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import PropTypes from 'prop-types'
import Button from '../button/Button'

export default function Header ({ title, components }) {
  const router = useRouter()
  const { cart } = useContext(CartContext)
  return (
    <div className='p-2 p-1' style={{ backgroundColor: '#FF8A00', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
      <div className="flex flex-row p-2 text-white" onClick={() => router.push('/app/products')}>
        <IconShoppingCart /> <h1 className="text-lg">Era Jaya Shop</h1>
      </div>
      <div className='flex flex-row gap-4'>
        {components}
        <Button onClick={() => router.push('/app/products/cart')}><IconShoppingCart /> ({cart.length})</Button>
      </div>
    </div>
  )
}

Header.defaultProps = {
  title: '',
  components: null
}
Header.propTypes = {
  title: PropTypes.string,
  components: PropTypes.node
}
