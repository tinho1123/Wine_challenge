import React, { createContext, PropsWithChildren, useContext, useState } from 'react'
import type { Dispatch, SetStateAction } from 'react'

export interface IApiWine {
  page?: number;
  totalPages?: number,
  itemsPerPage?: number,
  totalItems?: number,
  items?: object[]
}

export interface IWineItem {
  id?: number;
  image?: string;
  name?: string;
  price?: number;
  discount?: number;
  priceMember?: number;
  priceNonMember?: number;
  type?: string;
  classification?: number;
  size?: string;
  rating?: number;
  avaliations?: number;
  country?: string;
  region?: string;
  flag?: string;
  sommelierComment?: string;
  quantity?: number
}

export interface IFetchData {
  switchPage?: (page: number) => Promise<void>;
  apiWine?: IApiWine | undefined;
  setApiWine?: Dispatch<SetStateAction<IApiWine | undefined>> | {};
  filterPage?: (filter: string) => Promise<void>;
  searchPage?: (text: string) => Promise<void>;
  localstorageCardSetItem?: (item: IWineItem) => void,
  localstorageCardRemoveItem?: (item: IWineItem) => void,
  card?: IWineItem[]
}

export const FetchContext = createContext<IFetchData>({})

export const useFetchDataContext = () => useContext<IFetchData>(FetchContext)

export const FetchContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [apiWine, setApiWine] = useState<IApiWine>()
  const [card, setCard] = useState<IWineItem[] | []>([])

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
      setApiWine({ page: 0 })
      const response = await fetch(`https://wine-back-test.herokuapp.com/products?filter=${filter}`)
      const data = await response.json()
      setApiWine(data)
    } catch (err) {
      console.log(err)
    }
  }

  const searchPage = async (text: string) => {
    try {
      setApiWine({ page: 0 })
      const response = await fetch(`https://wine-back-test.herokuapp.com/products?name=${text}`)
      const data = await response.json()
      setApiWine(data)
    } catch (err) {
      console.log(err)
    }
  }

  const localstorageCardSetItem = (item: IWineItem) => {
    const car: IWineItem[] = localStorage.getItem('wineCar') ? JSON.parse(localStorage.getItem('wineCar')!) : []
    car.push(item)
    localStorage.setItem('wineCar', JSON.stringify(car))
    setCard(car)
  }

  const localstorageCardRemoveItem = (item: IWineItem) => {
    const car: IWineItem[] = JSON.parse(localStorage.getItem('wineCar')!)
    const filterCar = car.filter((carItem) => carItem.name !== item.name)
    localStorage.setItem('wineCar', JSON.stringify(filterCar))
    setCard(filterCar)
  }

  const fetchData: IFetchData = {
    switchPage,
    apiWine,
    setApiWine,
    filterPage,
    searchPage,
    localstorageCardSetItem,
    localstorageCardRemoveItem,
    card
  }

  return (
      <FetchContext.Provider value={fetchData}>
          {children}
      </FetchContext.Provider>
  )
}
