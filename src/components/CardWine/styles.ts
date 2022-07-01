import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const WineCard = styled.div`
    max-width: 240px;
    height: 426.11px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FFFFFF;
    box-shadow: 0px 9.73384px 14.6008px rgba(0, 0, 0, 0.1);
    cursor: pointer;
`

export const ImageWine = styled.img`
    margin-left: 29.2px;
    margin-top: 9.76px;
    margin-right: 28.23px;
    width: 198.57px;
    background-repeat: no-repeat;
    background-size: cover, contain;
`

export const NameWine = styled.p`
    max-width: 232.64px;
    font-weight: 700;
    text-align: center;
`

export const Discount = styled.div`
    margin-top: 6.81px; 
    display: flex;
    gap: 5.35px
`

export const TotalPrice = styled.p`
    width: 46.72px;
    height: 15.57px;
    font-weight: 700;
    color: #888888;
    text-decoration: line-through;
`

export const DiscountPrice = styled.div` 
    text-align: center;
    background-color: #F79552;
    border-radius: 1.94677px;
    color: #FFFFFF;
    line-height: 12px;
    font-weight: 700;
    font-size: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px;
`

export const Member = styled.div`
    margin-top: 10px;
    display: flex;
    gap: 6.81px;
`

export const MemberWine = styled.p`
    font-weight: 700;
    font-size: 11px;
    line-height: 9.73px;
    text-align: right;
    color: #1D1D1B;
`

export const MemberPrice = styled.p`
    color: #B6116E;
    font-size: 15.57px;
    line-height: 9.73px;
`

export const NonMember = styled.p`
margin-bottom: 21.49px;
    width: 100%;
    text-align: center;
    margin-top: 4.87px;
    color: #888888;
    font-weight: 700;
    font-size: 12px;
`

export const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 39.36px;
    background-color: #7EBC43;
    box-shadow: 0px 0.973384px 1.94677px rgba(0, 0, 0, 0.2);
    border-radius: 3.89354px;
    cursor: pointer;
`

export const LabelButton = styled.label`
    padding: 11.68px, 88px;
    color: #FFFFFF;
    font-size: 14px;
    line-height: 16px;
    font-weight: 700;
    cursor: pointer;
`
