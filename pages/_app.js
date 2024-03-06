import { useEffect } from 'react'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.body.className = 'dark'
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
