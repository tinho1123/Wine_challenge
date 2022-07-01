import React from 'react'
import Head from 'next/head'
import GlobalStyle from '../styles/global'

export default function Home () {
  return (
    <div>
      <Head>
        <title>Wine</title>
      </Head>
      <main>
        <GlobalStyle />
      </main>
    </div>
  )
};
