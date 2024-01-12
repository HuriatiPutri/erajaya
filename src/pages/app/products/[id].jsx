import React, { useContext, useEffect } from 'react'
import { ProductCard } from '@/component/card/ProductCard'
import { Header } from '@/component/elements/header'
import { itemsForSearchTest } from '@/constants'
import { CartContext } from '@/contexts/CartContext/context'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Button from '@/component/elements/button/Button'

export default function Detail () {
  const router = useRouter()
  const { cart, onAddToCart } = useContext(CartContext)
  const { id } = router.query
  const data = itemsForSearchTest.find(item => item.id === parseInt(id))
  const handledDetailProduct = (item) => {
    console.log(item)
    router.push({
      pathname: '/app/products/[id]',
      query: { id: item.id }
    })
  }
  useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    <div>
      <Header title={'Detail Product'}/>
      <div className="p-5">
        <div className="flex flex-row justify-start p-5 gap-4">
          <div>
            <Image src={data?.imageUrl} alt="product" height={370} width={370} className="w-auto" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">{data?.name}</h1>
            <p className='text-gray-400'>{data?.description}</p>
            <p className='text-2xl mt-10'>${data?.price}</p>
            <p className='text-gray-400'>stock:{data?.quantity} pcs</p>
            <br />
            <Button onClick={() => onAddToCart(data)}>Add to Cart</Button>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Related Products</h1>
          <div className="grid grid-flow-row-dense gap-2 mt-5 md:grid-cols-5 sm:grid-cols-2">
            {itemsForSearchTest.map((item, index) => {
              return (
                <ProductCard key={index} item={item} onClick={() => handledDetailProduct(item)} />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
