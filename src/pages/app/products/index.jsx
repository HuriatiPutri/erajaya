import { ProductCard } from '@/component/card/ProductCard'
import Button from '@/component/elements/button/Button'
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
      return null
    })
    setData(searchItem)
  }

  const handledDetailProduct = (item) => {
    router.push({
      pathname: '/app/products/[id]',
      query: { id: item.id }
    })
  }

  return (
    <div className='p-0'>
      <Header title="Products"
        components={
          <div className='hidden lg:flex center items-center gap-2'>
            <input className='p-2 h-10 focus:outline-none border-2 rounded-lg border-slate-100' type="text" placeholder="Search.." onChange={(e) => setSearch(e.target.value)} />
            <Button onClick={handleSearch}><IconSearch /></Button>
          </div>
        }
      />
      <div className='lg:hidden flex flex-row justify-center p-5 bg-blue-200  gap-2'>
        <input className='p-2 h-10 focus:outline-none border-2 rounded-lg border-slate-100' type="text" placeholder="Search.." onChange={(e) => setSearch(e.target.value)} />
        <Button onClick={handleSearch}><IconSearch /></Button>
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
