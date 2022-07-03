import React, { useMemo } from 'react'
import { GetServerSideProps } from 'next'
import { FetchContextProvider, IFetchData, useFetchDataContext } from '../../../contexts/FetchContext'
import { Header } from '../../components'
import Main from '../../components/Main'

interface IApiWine {
  wines?: {
  page?: number;
  totalPages?: number,
  itemsPerPage?: number,
  totalItems?: number,
  items?: object[]
  }
}

function Loja ({ wines }: IApiWine) {
  const data: IFetchData = useFetchDataContext()
  useMemo(() => { data.setApiWine(wines!) }, [])
  return (
    <FetchContextProvider>
        <Header {...data} />
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
