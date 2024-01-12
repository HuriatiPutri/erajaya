import ContextProvider from '@/contexts'
import '@/styles/globals.css'
import MainLayout from './layout'

export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      {/* <MainLayout> */}
        <Component {...pageProps} />
      {/* </MainLayout> */}
    </ContextProvider>
  )
}
