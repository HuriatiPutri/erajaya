import { ProductCard } from '@/component/card/ProductCard'
import { Header } from '@/component/elements/header'
import { itemsForSearchTest } from '@/constants'
import useDebounce from '@/utils/debounce'
import { IconSearch } from '@tabler/icons-react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
const Home = () => {
  const router = useRouter()
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, 500)
  const [data, setData] = useState(itemsForSearchTest)

  console.log('item', itemsForSearchTest)
  useEffect(() => {
    if (!debouncedSearch) {
      setData(itemsForSearchTest)
    }
  }, [debouncedSearch])

  const handleSearch = () => {
    const searchItem = itemsForSearchTest.filter((item) => {
      if (item.name.toLowerCase().includes(debouncedSearch.toLowerCase())) {
        return item
      }
    })
    setData(searchItem)
  }

  const handledDetailProduct = (item) => {
    console.log(item)
    router.push({
      pathname: '/app/products/[id]',
      query: { id: item.id }
    })
  }

  return (
    <div className='p-0'>
      <Header title="Products"
        components={
          <div className='hidden lg:flex center items-center'>
            <input className='p-2 h-10 focus:outline-none border-2 rounded-lg border-slate-100' type="text" placeholder="Search.." onChange={(e) => setSearch(e.target.value)} />
            <button
              onClick={handleSearch}
              className='bg-blue-500 hover:bg-blue-700 text-white ml-2 p-2 rounded-lg'><IconSearch /></button>
          </div>
        }
      />
      <div className='lg:hidden flex flex-row justify-center p-5 bg-blue-200 '>
        <input className='p-2 h-10 focus:outline-none border-2 rounded-lg border-slate-100' type="text" placeholder="Search.." onChange={(e) => setSearch(e.target.value)} />
        <button
          onClick={handleSearch}
          className='bg-blue-500 hover:bg-blue-700 text-white ml-2 p-2 rounded-lg'><IconSearch /></button>
      </div>
      <div className="p-5 grid grid-flow-row-dense gap-2 mt-5 md:grid-cols-5 sm:grid-cols-2 place-items-center">
        {data.length === 0 && <p className='text-center'>No data found</p>}
        {data.map((item, index) => {
          return (
            <ProductCard key={index} item={item} onClick={() => handledDetailProduct(item)}/>
          )
        })}
      </div>
    </div>
  )
}

export default Home
