import ContextProvider from '@/contexts'
import '@/styles/globals.css'
import PropTypes from 'prop-types'

export default function App ({ Component, pageProps }) {
  return (
    <ContextProvider>
      {/* <MainLayout> */}
      <Component {...pageProps} />
      {/* </MainLayout> */}
    </ContextProvider>
  )
}
App.defaultProps = {
  Component: ''
}
App.propTypes = {
  Component: PropTypes.node,
  pageProps: PropTypes.object.isRequired
}
