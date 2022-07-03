import { useRouter } from 'next/router'
import React, { useState, useMemo } from 'react'
import { useFetchDataContext } from '../../../../contexts/FetchContext'

import { Header } from '../../../components'
import ContainerInfoWine from '../../../components/InfoWine'
import HeaderMobile from '../../../components/mobile/HeaderMobile'
import InfoWineMobile from '../../../components/mobile/InfoWineMobile'

interface Props {
  id?: number;
  image?: string ;
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
  quantity?: number;
}

const Card = () => {
  const [info, setInfo] = useState<Props>({})
  const context = useFetchDataContext()
  const router = useRouter()
  const { item } = router.query

  useMemo(() => {
    fetch(
      `https://wine-back-test.herokuapp.com/products?name=${item}`
    ).then(async (response) => {
      const res = await response.json()
      setInfo(res.items[0])
    })
  }, [])
  return (
    <div>
      {context.mobile
        ? (
          <>
        <HeaderMobile {...context} />
        <InfoWineMobile {...context } />
        </>
          )
        : (
          <>
           <Header {...context} />
           <ContainerInfoWine {...context} {...info} {...setInfo} />
          </>
          )}

    </div>
  )
}

export default Card
