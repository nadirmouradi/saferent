import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import { ThemeProvider } from 'next-themes'
import {ToastContainer} from 'react-toastify'
import { SessionProvider } from "next-auth/react"


export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <SessionProvider session={session}>
      <Component {...pageProps} />

      </SessionProvider>
      
      <ToastContainer/>
    </ThemeProvider>
  );
  
}
