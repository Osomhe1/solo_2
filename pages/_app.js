import React from 'react'
import Layout from '../components/Layout'
import '../styles/globals.css'
import LoadingScreen from '../components/LoadingScreen'

function MyApp({ Component, pageProps }) {

  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => setLoading(true), 6000)
  }, [])

  return (
    // <Layout>

    <>
      {!loading ? (
        <React.Fragment>
        <LoadingScreen />
        </React.Fragment>
      ) : (
        <Component {...pageProps} />
      )}
    </>
    // </Layout>
  )
}

export default MyApp
