import React, { useEffect, useMemo } from 'react'
import { GetServerSideProps } from 'next'
import { FetchContextProvider, useFetchDataContext } from '../../../contexts/FetchContext'
import { Header } from '../../components'
import Main from '../../components/Main'

interface IApiWine {
  wines: {
  page: number;
  totalPages: number,
  itemsPerPage: number,
  totalItems: number,
  items: object[]
  }
}

function Loja ({ wines }: IApiWine) {
  const data = useFetchDataContext()
  useEffect(() => { data.setApiWine(wines) }, [])
  return (
    <FetchContextProvider>
        <Header />
        <Main {...data} />
    </FetchContextProvider>
  )
}

export default Loja

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://wine-back-test.herokuapp.com/products?page=1&limit=9')
  const data = await res.json()
  return {
    props: {
      wines: data
    }
  }
}
