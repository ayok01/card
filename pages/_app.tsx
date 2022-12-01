import "../styles/globals.scss"
import type { AppProps } from "next/app"
import { NextUIProvider } from "@nextui-org/react"
import React from "react"
import Header from "../components/layouts/Header/Header"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Header />
      <Component {...pageProps} />
    </NextUIProvider>
  )
}
