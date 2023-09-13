import { SessionProvider } from "next-auth/react"
import Layout from "@/components/layout";
import "styles/globals.css"

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
      <SessionProvider session={session}>
          <Layout>
              <Component {...pageProps} />
          </Layout>
      </SessionProvider>
  )
}