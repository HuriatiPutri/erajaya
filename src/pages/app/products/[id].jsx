import { ProductCard } from "@/component/card/ProductCard"
import { itemsForSearchTest } from "@/constants"
import { CartContext } from "@/contexts/CartContext/context"
import { IconShoppingCart } from "@tabler/icons-react"
import { useRouter } from "next/router"
import { useContext, useEffect } from "react"

export default function Detail() {
    const router = useRouter()
    const {cart, setCart} = useContext(CartContext)
    const { id } = router.query
    const data = itemsForSearchTest.find(item => item.id === parseInt(id))
    const handledDetailProduct = (item) => {
        console.log(item)
        router.push({
            pathname: '/app/products/[id]',
            query: { id: item.id },
        })
    }
    useEffect(() => {
        console.log(cart)
    }, [cart])

    const handledAddToCart = () => {
        cart.find(item => item.id === data.id) ? cart.find(item => item.id === data.id).quantity += 1 : setCart([...cart, data])
    }

    return (
        <div className='p-5'>
            <div className='flex flex-row justify-between'>
                <h1 className="text-3xl font-bold">Products</h1>
                <button className='bg-orange-500 flex flex-row hover:bg-blue-700 text-white px-4 py-1 rounded-lg'
                onClick={() => router.push('/app/products/cart')}>
                    <IconShoppingCart /> ({cart.length})
                </button>
            </div>
            <div>
                <div className="flex flex-row justify-start">
                    <div>
                        <img src={data?.imageUrl} alt="product" className="w-auto" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">{data?.name}</h1>
                        <p className='text-gray-400'>{data?.description}</p>
                        <p className='text-2xl mt-10'>${data?.price}</p>
                        <p className='text-gray-400'>stock:{data?.quantity} pcs</p>
                        <button
                        className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg mt-10'
                        onClick={handledAddToCart}
                        >Add to cart</button>
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