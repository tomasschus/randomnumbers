import { BlackModeProvider } from '../context/BlackModeContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <BlackModeProvider> <Component {...pageProps} /> </BlackModeProvider>
}

export default MyApp
