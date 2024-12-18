import "./../styles/globals.css";
import Layout from './../layouts/Layout'
 
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}