import { Table } from '@/component/elements/Table'
import Button from '@/component/elements/button/Button'
import { Header } from '@/component/elements/header'
import { CartContext } from '@/contexts/CartContext/context'
import { IconMinus, IconPlus, IconTrash } from '@tabler/icons-react'
import Image from 'next/image'
import { useContext } from 'react'

const Cart = () => {
  const { cart, setCart, onDeleteCart } = useContext(CartContext)

  const onQtyChange = (item, qty) => {
    const newCart = cart.map((cartItem) => {
      if (cartItem.id === item.id) {
        if (qty < 1) {
          alert('Quantity must be greater than 0')
          return {
            ...cartItem,
            qty: 1
          }
        } else if (qty > item.quantity) {
          alert('Quantity must be less than stock')
          return {
            ...cartItem,
            qty: item.qty
          }
        } else {
          return {
            ...cartItem,
            qty
          }
        }
      }
      return cartItem
    })
    setCart(newCart)
  }

  const columns = [
    {
      header: '',
      value: ({ imageUrl, name }) => <Image alt={name} src={imageUrl} width={100} height={100} className='w-50'/>
    },
    {
      header: 'Product Name',
      value: 'name'
    },
    {
      header: 'Price',
      value: ({ price }) => `$${price}`
    },
    {
      header: 'quantity',
      value: (item) =>
        <div className='flex flex-row'>
          <Button onClick={() => onQtyChange(item, item.qty - 1)} ><IconMinus/></Button>
          <input type='number' min={1} className='w-20 border-2 border-slate-300 rounded p-2' value={item.qty} onChange={(e) => onQtyChange(item, e.target.value)} />
          <Button onClick={() => onQtyChange(item, item.qty + 1)} ><IconPlus/></Button>
        </div>
    },
    {
      header: 'Sub Total',
      value: ({ price, qty }) => `$${(price * qty).toFixed(2)}`
    },
    {
      header: 'Action',
      value: (item) => <Button onClick={() => onDeleteCart(item)} label='Delete' color='red' ><IconTrash/></Button>
    }
  ]

  const footer = {
    label: 'Total',
    value: cart.reduce((accumulator, object) => {
      return (accumulator + (object.price * object.qty))
    }, 0).toFixed(2)
  }

  return (
    <div>
      <Header title={'Cart'}/>
      <div className='mt-10 p-5'>
        <h1 className='text-2xl mb-5'>Cart</h1>
        <Table
          colomn={columns}
          data={cart}
          footer={footer}
        />
      </div>
    </div>
  )
}

export default Cart
