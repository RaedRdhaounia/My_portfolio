import 'src/styles/globals.css'
import 'src/styles/cards.css'
import type { AppProps } from 'next/app'
import { Footer, NavBar, RoutingComponent } from '@components/routes'
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <NavBar />
      <RoutingComponent children={<Component {...pageProps} />}  />
       <Footer/>
    </ThemeProvider>
  )
}
