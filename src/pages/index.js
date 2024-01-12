import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Home () {
  // eslint-disable-next-line new-cap
  const router = new useRouter()

  useEffect(() => {
    router.push('/app/products')
  }, [])
}
