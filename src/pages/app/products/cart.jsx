import { ProductCard } from '@/component/card/ProductCard';
import { CartItem } from '@/component/cartItem/cartItem';
import { Table } from '@/component/elements/Table';
import { itemsForSearchTest } from '@/constants';
import { CartContext } from '@/contexts/CartContext/context';
import { IconSearch, IconShoppingCart } from '@tabler/icons-react';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
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

  const onQtyChange = (item) => {
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

  return (
    <div className='p-5'>
      <div className='flex flex-row justify-between'>
        <h1 className="text-3xl font-bold" onClick={() => router.push('/app/products')}>Carts</h1>
        <button className='bg-orange-500 hover:bg-blue-700 text-white px-4 rounded-lg'>
          <IconShoppingCart /> {cart.length}
        </button>
      </div>
      <Table colomn={['', 'Nama Product', 'Harga', 'Jumlah', 'SubTotal']} 
      data={cart} 
      onDelete={onDelete} 
      onQtyChange={onQtyChange} 
      qty={qty} 
      setQty={setQty} 
      handledDetailProduct={handledDetailProduct} />
      
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