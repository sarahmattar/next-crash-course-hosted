import '../styles/globals.css'
import Layout from '../components/Layout'

// this wraps around all of your page components
// can wrap a layout around it

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
