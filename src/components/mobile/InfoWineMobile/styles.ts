import styled from 'styled-components'

export const Wine = styled.div`
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    .infoImage {
        width: 18rem;
    }
`

export const InfoWine = styled.div`
    display: flex;
    flex-direction: column;
`

export const CountryWine = styled.div`
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    .arrowCountry {
        width: 10px;
        height: 5.59px;
        padding: 5px;
        display: flex;
        box-shadow: 2px -2px 0 1px #888888 inset;
        border: solid transparent;
        border-width: 0 0 2px 2px;
        transform: rotate(-135deg);
    }

    .textCountry {
        color: #C81A78;
        font-weight: 700; 
        font-size: 14px;
        line-height: 20px
    }
`

export const NameWine = styled.h3`
    margin-top: 16px;
    color: #111111;
    font-weight: 700;
    font-size: 28px;
    line-height: 32px;
    text-align: center;
`

export const SubInfoWine = styled.div`
    height: 16px;
    margin-top: 8px;
    display: flex;
    gap: 8px;

    p {
        font-size: 14px;
        line-height: 24px;
        font-weight: 400;
        color: #555555;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const DescriptionWine = styled.div`
    margin: 48px 15px 2rem 17px;
    display: flex;

    flex-direction: column;
    gap: 8px;

    h6 {
        font-size: 16px;
        line-height: 24px;
    }

    p {
        max-width: 448px;
        color: #666666;
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
    }
`

export const ContainerPrice = styled.div`
    position: relative;
    background: #FFFFFF;
    box-shadow: 0px -5px 5px rgba(0, 0, 0, 0.0627185);
    width: 100vw;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;

    .prices {
      display: flex;
      flex-direction: column;
      .priceOriginal {
        text-decoration: line-through;
        margin-top: 8px;
        color: #555555;
      }
      .discount {
        position: absolute;
        padding: 2px;
        height: 16px;
        display: flex;
        align-items: center;
        background: #F26649;
        border-radius: 2px;
        color: #FFFF;
        top: -8px;
      }
    }

`

export const PriceMember = styled.p`
    color: #C81A78;
    font-weight: 900;
    display: flex;
    align-items: center;

    p {
      font-size: 24px;
      margin-left: 5px;
    }

`

export const PriceNonMember = styled.p`
    color: #555555;
    font-weight: 700;
    font-size: 10px;
    line-height: 16px;
    text-transform: uppercase;
    margin-right: 9px;
`

export const ButtonAddCart = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 12px 55px;
    margin: 16px 16px 16px 0;
    color: #FFFFFF;
    background-color: #7EBC43;
    gap: 10px;
    max-width: 180px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
    cursor: pointer;
`
