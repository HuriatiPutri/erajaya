import { ProductCard } from '@/component/card/ProductCard';
import { itemsForSearchTest } from '@/constants';
import useDebounce from '@/utils/debounce';
import { IconSearch, IconShoppingCart } from '@tabler/icons-react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
const Home = () => {
  const router = useRouter();
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, 500);
  const [data, setData] = useState(itemsForSearchTest)

  useEffect(() => {
    if (!debouncedSearch) {
      setData(itemsForSearchTest);  
    }
  }, [debouncedSearch])
  
  const handleSearch = () => {
    const searchItem = itemsForSearchTest.filter((item) => {
      if (item.name.toLowerCase().includes(debouncedSearch.toLowerCase())) {
        return item
      }
    });
    setData(searchItem);
  }

  const handledDetailProduct = (item) => {
    console.log(item)
    router.push({
      pathname: '/app/products/[id]',
      query: { id: item.id },
    })
  }

    return (
        <div className='p-5'>
          <div className='flex flex-row justify-between'>
            <h1 className="text-3xl font-bold">Products</h1>
            <div className='flex flex-row gap-4'>
            <input className='p-2 focus:outline-none border-2 rounded-lg border-slate-100' type="text" placeholder="Search.." onChange={(e) => setSearch(e.target.value)} />
            <button
              onClick={handleSearch}
              className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg'><IconSearch /></button>
            <button className='bg-orange-500 hover:bg-blue-700 text-white px-4 rounded-lg'
            onClick={() => router.push('/app/products/cart')}
            >
              <IconShoppingCart />
            </button>
            </div>
            </div>
            <div className="grid grid-flow-row-dense gap-2 mt-5 md:grid-cols-5 sm:grid-cols-2">
            {data.length === 0 && <p className='text-center'>No data found</p>}
            {data.map((item, index) => {
                return (
                    <ProductCard key={index} item={item} onClick={() => handledDetailProduct(item)}/>
                )
            })}
            </div>
        </div>
    );
};

export default Home;