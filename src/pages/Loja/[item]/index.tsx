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
  PriceNonMember
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
                    emptySymbol={
                        <div>☆</div>
                    }
                    fullSymbol={

                      <div>⭐</div>
                    }
                  />
                  <div style={{ marginLeft: '4.8px'}}>({info.avaliations})</div>
                </div>
              </SubInfoWine>
              <PriceMember>R${info.priceMember?.toFixed(2)}</PriceMember>
              <PriceNonMember>NÃO SÓCIO R$ {info.priceNonMember?.toFixed(2)}/un.</PriceNonMember>
            </InfoWine>
          </Wine>
        </>
      )}
    </div>
  );
};

export default Card;
