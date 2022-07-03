import styled from 'styled-components'

export const Container = styled.header`
    background-color: #FFFFFF;
    width: 100%;
    height: 88.23px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom:0.5px solid #CCCCCC;
`

export const Logo = styled.img`
    width: 102.95px;
    height: 31px;
    margin: 50% 0px 50% 0;
`

export const List = styled.ul`
    display: flex;
    gap: 48px;
    font-family: Neo Sans;
    height: 100%;
    position: sticky;
    margin-right: 50px;

    .Loja {
        &::after {
        content: '';
        position: relative;
        top: 30px;
        border-bottom: 2px solid #D14B8F;
    }
    }

    @media(max-width: 1000px){
        gap: 24px
    }
    @media(max-width: 800px){
        margin-right: 20px;
    }
;
`

export const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    list-style: none;
    align-self: center;
    color: #555555;
    cursor: pointer;

    &:hover {
    &::after {
        content: '';
        position: relative;
        top: 30px;
        border-bottom: 2px solid #D14B8F;
    }
}
`

export const Account = styled.div`
    display: flex;
    gap: 42px;
    align-items: center;
    justify-content: center;

    .invisible {
        opacity: 0;
        display: none;
    }

    .visible {
        outline-color: #B6116E;
        opacity: 1;
        display: block;
        top: 5.5rem;
        position: absolute;
        width: 150px;
        height: 20px;

        
    }

    .containerMarket {
        position: relative;

        .iconMarket {
            background-color: #F6B554;
            position: relative;
            height: 56px;
            width: 56px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            cursor: pointer;
        }

        .marketCar {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        bottom: 0px;
        right: 0px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #FFFF;
        color: #4FBFA5;
    }
    }
    
   

`

export const Icon = styled.div`
    position: relative;
    height: 56px;
    width: 56px;
    border: 2px solid #555555;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    cursor: pointer;


`

export const Perfil = styled.img`
    height: 56px;
    width: 56px;
    cursor: pointer;
`

export const SearchImage = styled.img`
    width: 31.66px;
    height: 31.67px;
`

export const MarketCar = styled.img`
    position: absolute;
    left: 0;
    width: 130px;
    transform: translateX(6%);
    object-position: center;
    object-fit: cover;

`
