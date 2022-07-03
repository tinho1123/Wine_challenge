import Link from 'next/link'
import React from 'react'
import { IWineItem } from '../../../contexts/FetchContext'
import {
  Container,
  WineCard,
  ImageWine,
  NameWine,
  Discount,
  TotalPrice,
  DiscountPrice,
  Member,
  MemberWine,
  MemberPrice,
  NonMember,
  Button,
  LabelButton
} from './styles'

interface Props {
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
  localstorageCardSetItem?: (props:IWineItem) => void;
  mobile?: boolean
}

function CardWine (props : Props) {
  const {
    id,
    image,
    name,
    price,
    discount,
    priceMember,
    priceNonMember,
    type,
    classification,
    size,
    rating,
    avaliations,
    country,
    region,
    flag,
    sommelierComment
  } = props

  return (
    <Container>
      <Link href={`/Loja/${props.name}`}>
      <WineCard >
        <ImageWine src={props.image} />
        <NameWine>{props.name}</NameWine>
        <Discount>
          <TotalPrice>{props.price}</TotalPrice>
          <DiscountPrice>{props.discount}% OFF</DiscountPrice>
        </Discount>
        <Member>
          <MemberWine>sócio wine</MemberWine>
          <MemberPrice>R${props.priceMember?.toFixed(2)}</MemberPrice>
        </Member>
        <NonMember>Não sócio R${props.priceNonMember?.toFixed(2)}</NonMember>
      </WineCard>
      </Link>
      <Button onClick={() => {
        props.localstorageCardSetItem!({
          id,
          image,
          name,
          price: Number(price?.toFixed(2)),
          discount,
          priceMember: Number(priceMember?.toFixed(2)),
          priceNonMember: Number(priceNonMember?.toFixed(2)),
          type,
          classification,
          size,
          rating,
          avaliations,
          country,
          region,
          flag,
          sommelierComment,
          quantity: 1
        })
      }}><LabelButton>Adicionar</LabelButton></Button>
    </Container>
  )
}

export default CardWine
