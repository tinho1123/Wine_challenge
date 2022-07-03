import React, { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Home () {
  const router = useRouter()
  useEffect(() => { router.push('/Loja') }, [])
  return (
    <div>
      <Head>
        <title>Wine</title>
      </Head>
      <main>

      </main>
    </div>
  )
}
