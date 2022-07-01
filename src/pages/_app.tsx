import React from 'react'
import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'
import { FetchContextProvider } from '../../contexts/FetchContext'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <FetchContextProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </FetchContextProvider>
  )
}

export default MyApp
