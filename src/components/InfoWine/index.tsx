import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { Dispatch, SetStateAction, useState } from 'react'

import {
  ButtonGoBack,
  Wine,
  InfoWine,
  CountryWine,
  NameWine,
  SubInfoWine,
  PriceMember,
  PriceNonMember,
  DescriptionWine,
  ButtonAddCart
} from './styles'
import { IApiWine, IWineItem } from '../../../contexts/FetchContext'

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
  switchPage?: (page: number) => Promise<void>;
  apiWine?: IApiWine | undefined;
  setApiWine?: Dispatch<SetStateAction<IApiWine | undefined>>;
  filterPage?: (filter: string) => Promise<void>;
  searchPage?: (text: string) => Promise<void>;
  localstorageCardSetItem?: (item: IWineItem) => void,
  localstorageCardRemoveItem?: (item: IWineItem) => void,
  card?: IWineItem[],
  mobile?: boolean
  setInfo?: Dispatch<SetStateAction<IApiWine | undefined>>
}

const ContainerInfoWine = (props: Props) => {
  const [sumItemCart, setSumItemCart] = useState(1)
  const router = useRouter()

  return (
    <div>
      <ButtonGoBack onClick={router.back}>
            <div className="arrow" />
            <p className="goBack">Voltar</p>
          </ButtonGoBack>
          {props.name === undefined
            ? (
                'Loading'
              )
            : (
        <>

          <Wine>
            {props.image && (
            <Image src={props.image!} className="infoImage" width='381' height='579' alt={props.name} />
            )}
            <InfoWine>
              <div>
                <CountryWine>
                  <p className="textCountry">Vinhos</p>
                  <div className="arrowCountry" />
                  <p className="textCountry">{props.country}</p>
                  <div className="arrowCountry"></div>
                  <p
                    style={{
                      color: '#888888',
                      fontWeight: '400',
                      fontSize: '14px',
                      lineHeight: '24px'
                    }}
                  >
                    {props.region}
                  </p>
                </CountryWine>
              </div>
              <div>
                <NameWine>{props.name}</NameWine>
                <SubInfoWine>
                  {props.flag && (
                    <Image src={props?.flag!} width='16' height='16' />
                  )}
                  <p>{props.country}</p>
                  <p>{props.type}</p>
                  <p>{props.classification}</p>
                  <p>{props.size}</p>
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
                      ({props.avaliations})
                    </div>
                  </div>
                </SubInfoWine>
              </div>
              <div>
                <PriceMember>
                  R${(Number(props.priceMember) * sumItemCart).toFixed(2)}</PriceMember>
                <PriceNonMember>
                  NÃO SÓCIO R$ {(Number(props.priceNonMember) * sumItemCart).toFixed(2)}/un.
                </PriceNonMember>
              </div>
              <div>
                <DescriptionWine>
                    <h6>Comentário do Sommelier</h6>
                    <p>{props.sommelierComment}</p>
                </DescriptionWine>
              </div>
              <div>
                <ButtonAddCart>
                    <div className="addsumButton">
                    <div className='subtractItem' onClick={() => sumItemCart !== 1 ? setSumItemCart(sumItemCart - 1) : setSumItemCart(sumItemCart)}>-</div>
                    <div className="countItem">
                    {sumItemCart}
                    </div>
                    <div className="addItem" onClick={() => setSumItemCart(sumItemCart + 1)}>+</div>
                    </div>
                    <div
                      style={
                        {
                          fontWeight: '700',
                          fontSize: '16px',
                          cursor: 'pointer',
                          width: '20px',
                          height: '20px'
                        }
                      }
                      onClick={() => {
                        props?.localstorageCardSetItem!({
                          ...props,
                          price: props?.price! * sumItemCart,
                          priceNonMember: props?.priceNonMember! * sumItemCart,
                          priceMember: props?.priceMember! * sumItemCart,
                          quantity: sumItemCart
                        })
                      }}
                      >
                    Adicionar
                    </div>
                    </ButtonAddCart>
              </div>
            </InfoWine>
          </Wine>
        </>
              )
              }
  ) </div>)
}

export default ContainerInfoWine
