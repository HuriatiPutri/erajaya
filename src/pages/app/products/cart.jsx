import React, { useContext, useEffect } from 'react'
import { Table } from '@/component/elements/Table'
import { Header } from '@/component/elements/header'
import { CartContext } from '@/contexts/CartContext/context'
import { IconTrash } from '@tabler/icons-react'
import Image from 'next/image'

const Cart = () => {
  const { cart, setCart, onDeleteCart } = useContext(CartContext)

  const onQtyChange = (item, qty) => {
    const newCart = cart.map((cartItem) => {
      if (cartItem.id === item.id) {
        return {
          ...cartItem,
          qty
        }
      }
      return cartItem
    })
    setCart(newCart)
  }

  useEffect(() => {
    console.log(cart)
  }, [cart])

  const columns = [
    {
      header: '',
      value: ({ imageUrl }) => <Image src={imageUrl} width={100} height={100} className='w-50'/>
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
        <input type='number' min={1} className='w-20 border-2 border-slate-300 rounded p-2' value={item.qty} onChange={(e) => onQtyChange(item, e.target.value)} />
    },
    {
      header: 'Sub Total',
      value: ({ price, qty }) => `$${price * qty}`
    },
    {
      header: 'Action',
      value: (item) => <button
        onClick={() => onDeleteCart(item)}
        className='bg-blue-500 hover:bg-red-700 text-white px-4 py-1 rounded-lg '><IconTrash /></button>
    }
  ]

  const footer = {
    label: 'Total',
    value: cart.reduce((accumulator, object) => {
      return accumulator + (object.price * object.qty)
    }, 0)
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
