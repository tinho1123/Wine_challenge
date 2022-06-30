import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import Rating from "react-rating";

import { Header } from "../../../components";

import GlobalStyle from "../../../styles/global";
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
} from "./styles";

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
}

const Card = () => {
  const [info, setInfo] = useState<Props>({});
  const [sumItemCart, setSumItemCart] = useState(1);
  const router = useRouter();
  const { item } = router.query;

  useMemo(async () => {
    await fetch(
      `https://wine-back-test.herokuapp.com/products?name=${item}`
    ).then(async (response) => {
      const res = await response.json();
      setInfo(res.items[0]);
    });
  }, [info]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      {info === undefined ? (
        "Loading"
      ) : (
        <>
          <ButtonGoBack onClick={router.back}>
            <div className="arrow" />
            <p className="goBack">Voltar</p>
          </ButtonGoBack>
          <Wine>
            <img src={info.image} className="infoImage" alt={info.name} />
            <InfoWine>
              <div>
                <CountryWine>
                  <p className="textCountry">Vinhos</p>
                  <div className="arrowCountry" />
                  <p className="textCountry">{info.country}</p>
                  <div className="arrowCountry"></div>
                  <p
                    style={{
                      color: "#888888",
                      fontWeight: "400",
                      fontSize: "14px",
                      lineHeight: "24px",
                    }}
                  >
                    {info.region}
                  </p>
                </CountryWine>
              </div>
              <div>
                <NameWine>{info.name}</NameWine>
                <SubInfoWine>
                  <img src={info.flag} style={{ width: "16px" }} />
                  <p>{info.country}</p>
                  <p>{info.type}</p>
                  <p>{info.classification}</p>
                  <p>{info.size}</p>
                  <div
                    style={{
                      height: "5px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Rating
                      fractions={2}
                      initialRating={info.rating}
                      readonly={true}
                      emptySymbol={<div>☆</div>}
                      fullSymbol={<div>⭐</div>}
                    />
                    <div style={{ marginLeft: "4.8px" }}>
                      ({info.avaliations})
                    </div>
                  </div>
                </SubInfoWine>
              </div>
              <div>
                <PriceMember>
                  R${(info.priceMember * sumItemCart).toFixed(2)}</PriceMember>
                <PriceNonMember>
                  NÃO SÓCIO R$ {(info.priceNonMember * sumItemCart).toFixed(2)}/un.
                </PriceNonMember>
              </div>
              <div>
                <DescriptionWine>
                    <h6>Comentário do Sommelier</h6>
                    <p>{info.sommelierComment}</p>
                </DescriptionWine>
              </div>
              <div>
                <ButtonAddCart>
                    <div className="addsumButton">
                    <div className="subtractItem" onClick={() => sumItemCart !== 1 ? setSumItemCart(sumItemCart -1) : setSumItemCart(sumItemCart)}>-</div>
                    <div className="countItem">
                    {sumItemCart}
                    </div>
                    <div className="addItem" onClick={() => setSumItemCart(sumItemCart + 1)}>+</div>
                    </div>
                    <div style={{ fontWeight: '700', fontSize: '16px'}}>
                    Adicionar
                    </div>
                    </ButtonAddCart>
              </div>
            </InfoWine>
          </Wine>
        </>
      )}
    </div>
  );
};

export default Card;
