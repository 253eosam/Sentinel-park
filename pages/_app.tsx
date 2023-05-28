import "../styles/globals.css"
import type { AppProps } from "next/app"
import { RecoilRoot } from "recoil"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className="bg-primary pb-5">
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </main>
  )
}

export default MyApp
