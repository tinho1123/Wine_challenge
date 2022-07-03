import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useMemo, useState } from 'react'
import { useFetchDataContext } from '../../../../contexts/FetchContext'

import {
  Wine,
  InfoWine,
  CountryWine,
  NameWine,
  SubInfoWine,
  PriceMember,
  PriceNonMember,
  DescriptionWine,
  ButtonAddCart,
  ContainerPrice
} from './styles'

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

const InfoWineMobile = () => {
  const [info, setInfo] = useState<Props>({})
  const router = useRouter()
  const { item } = router.query

  const context = useFetchDataContext()

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
      {info === []
        ? (
            'Loading'
          )
        : (
        <>

          <Wine>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <CountryWine>
                  <p className="textCountry">Vinhos</p>
                  <div className="arrowCountry" />
                  <p className="textCountry">{info.country}</p>
                  <div className="arrowCountry"></div>
                  <p
                    style={{
                      color: '#888888',
                      fontWeight: '400',
                      fontSize: '14px',
                      lineHeight: '24px'
                    }}
                  >
                    {info.region}
                  </p>
                </CountryWine>
                <NameWine>{info.name}</NameWine>
                <SubInfoWine>
                  {info.flag && (
                    <Image src={info?.flag!} width='16' height='16' />
                  )}
                  <p>{info.country}</p>
                  <p>{info.type}</p>
                  <p>{info.classification}</p>
                  <p>{info.size}</p>
                  <div
                    style={{
                      height: '5px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <div>⭐</div>
                    <div>⭐</div>
                    <div>⭐</div>
                    <div>⭐</div>
                    <div>☆</div>
                    <div style={{ marginLeft: '4.8px' }}>
                      ({info.avaliations})
                    </div>
                  </div>
                </SubInfoWine>
                </div>
            {info.image && (
            <Image src={info.image!} className="infoImage" width='381' height='579' alt={info.name} />
            )}
            <InfoWine>
            <DescriptionWine>
                    <h4>Descrição</h4>
                    <p>{info.sommelierComment}</p>
                </DescriptionWine>
            </InfoWine>
            <ContainerPrice>
              <div className='prices'>
                <div className='discount'><p>{(Number(info.discount))}% OFF</p></div>
              <p className='priceOriginal'>R$ { (Number(info.price)).toFixed(2)}</p>
                <div></div>
                <PriceMember>
                  R$<p>{ (Number(info.priceMember)).toFixed(2)}</p></PriceMember>
                <PriceNonMember>
                  PREÇO NÃO SÓCIO R$ {(Number(info.priceNonMember)).toFixed(2)}
                </PriceNonMember>
              </div>
              <div>
                <ButtonAddCart onClick={() => {
                        context?.localstorageCardSetItem!({
                          ...info,
                          price: info?.price!,
                          priceNonMember: info?.priceNonMember!,
                          priceMember: info?.priceMember!,
                          quantity: 1
                        })
                }}>
                    Adicionar
                    </ButtonAddCart>
                    </div>
              </ContainerPrice>
          </Wine>
        </>
          )}
    </div>
  )
}

export default InfoWineMobile
