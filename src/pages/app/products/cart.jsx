import { ProductCard } from '@/component/card/ProductCard';
import { CartItem } from '@/component/cartItem/cartItem';
import { Table } from '@/component/elements/Table';
import { itemsForSearchTest } from '@/constants';
import { CartContext } from '@/contexts/CartContext/context';
import { IconSearch, IconShoppingCart, IconTrash } from '@tabler/icons-react';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import Image from 'next/image';

const Cart = () => {
  const router = useRouter();
  const { cart, setCart } = useContext(CartContext)
  const [data, setData] = useState(itemsForSearchTest)
  const [qty, setQty] = useState(1)


  const handledDetailProduct = (item) => {
    console.log(item)
    router.push({
      pathname: '/app/products/[id]',
      query: { id: item.id },
    })
  }

  const onDelete = (item) => {
    const newCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(newCart);
  }

  const onQtyChange = (item, qty) => {
    const newCart = cart.map((cartItem) => {
      if (cartItem.id === item.id) {
        return {
          ...cartItem,
          quantity: qty
        }
      }
      return cartItem;
    });
    setCart(newCart);
  }

  useEffect(() => {
    console.log(cart)
  },[cart])

  const columns = [
    {
      header: '',
      value: ({imageUrl}) => <img src={imageUrl} width={100} height={100} className='w-50'/> ,
    },
    {
      header: 'Product Name',
      value: 'name'
    },
    {
      header: 'Price',
      value: ({price}) => `$${price}`
    },
    {
      header: 'quantity',
      value: (item) => <input type='number' value={item.quantity} onChange={(e) => onQtyChange(item, e.target.value)} />
    },
    {
      header: 'Sub Total',
      value: ({ price, quantity }) => `$${price * quantity}` 
    },
    {
      header: 'Action',
      value: (item) => <button
      onClick={() => onDelete(item)}
      className='bg-blue-500 hover:bg-red-700 text-white px-4 py-1 rounded-lg '><IconTrash /></button> 
    }
  ];


  const renderItem = () => {
    return(
      <div>Item</div>
    )
  }
  return (
    <div className='p-5'>
      <div className='flex flex-row justify-between'>
        <h1 className="text-3xl font-bold" onClick={() => router.push('/app/products')}>Carts</h1>
        <button className='bg-orange-500 hover:bg-blue-700 text-white px-4 rounded-lg'>
          <IconShoppingCart /> {cart.length}
        </button>
      </div>
      <Table
        colomn={columns}
        data={cart}
        />
      
      {/* <table className='border-collapse border border-slate-400 table-fixed md:table-fixed'>
      <thead>
        <tr className='border border-slate-300'>
          <th></th>
          <th>Nama Product</th>
          <th>Harga</th>
          <th>Jumlah</th>
          <th>SubTotal</th>
        </tr>
        </thead>
        <tbody>
        {cart.map((item, index) => {
          return (
            <CartItem 
            key={index} 
            item={item} 
            qty={qty}
            setQty={setQty}
            onDelete={() => onDelete(item)} 
            onQtyChange={() => onQtyChange(item)} />
          )
        })}
        </tbody>
      </table> */}
    </div>
  );
};

export default Cart;