import '../styles/globals.css'
import Footer from '../components/Footer';
import { Dataprovider } from '../components/Global/GlobalState';
import Header from '../components/Header';

import '../components/css/styles.css'
function MyApp({ Component, pageProps }) {
  return (
  <Dataprovider>
    <Header />
        <Component {...pageProps} />
    <Footer/>
</Dataprovider>)
}

export default MyApp
