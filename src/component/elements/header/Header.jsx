import { CartContext } from '@/contexts/CartContext/context'
import { IconShoppingCart } from '@tabler/icons-react'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import PropTypes from 'prop-types'

export default function Header ({ title, components }) {
  const router = useRouter()
  const { cart } = useContext(CartContext)
  return (
    <div className='bg-orange-500 text-white p-1 flex flex-col justify-between'>
      <div className="flex flex-row p-2" onClick={() => router.push('/app/products')}>
        <IconShoppingCart /> <h1 className="text-lg">Era Jaya Shop</h1>
      </div>
      <div className='flex flex-row gap-4'>
        {components}
        <button
          onClick={() => router.push('/app/products/cart')}
          className='bg-orange-500 hover:bg-blue-700 text-white px-4 py-1 rounded-lg'>
          <IconShoppingCart />({cart.length})
        </button>
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
