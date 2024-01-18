import { BlackModeProvider } from '../context/BlackModeContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <BlackModeProvider>
    <h1 style={{
      textAlign: 'center',
      margin: '50px'
    }}>Numeros a la carta</h1>
    <Component {...pageProps} />
  </BlackModeProvider>
}

export default MyApp
