import React, { createContext, PropsWithChildren, useContext, useState } from 'react'
import type { Dispatch, SetStateAction } from 'react'

interface IApiWine {
  page: number;
  totalPages: number,
  itemsPerPage: number,
  totalItems: number,
  items: object[]
}

export interface IFetchData {
  switchPage: (page: number) => Promise<void>;
  apiWine: IApiWine | undefined;
  setApiWine: Dispatch<SetStateAction<IApiWine | undefined>>;
  filterPage: (filter: string) => Promise<void>;
  searchPage: (text: string) => Promise<void>
}

export const FetchContext = createContext<IFetchData | {}>({})

export const useFetchDataContext = () => useContext(FetchContext)

export const FetchContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [apiWine, setApiWine] = useState<IApiWine>()

  const switchPage = async (page: number): Promise<void> => {
    try {
      const response = await fetch(`https://wine-back-test.herokuapp.com/products?page=${page}&limit=9`)
      const data = await response.json()
      setApiWine(data)
    } catch (err) {
      console.log(err)
    }
  }

  const filterPage = async (filter: string) => {
    try {
      const response = await fetch(`https://wine-back-test.herokuapp.com/products?filter=${filter}`)
      const data = await response.json()
      setApiWine(data)
    } catch (err) {
      console.log(err)
    }
  }

  const searchPage = async (text: string) => {
    try {
      const response = await fetch(`https://wine-back-test.herokuapp.com/products?name=${text}`)
      const data = await response.json()
      setApiWine(data)
    } catch (err) {
      console.log(err)
    }
  }

  const fetchData: IFetchData = {
    switchPage,
    apiWine,
    setApiWine,
    filterPage,
    searchPage
  }

  return (
      <FetchContext.Provider value={fetchData}>
          {children}
      </FetchContext.Provider>
  )
}
