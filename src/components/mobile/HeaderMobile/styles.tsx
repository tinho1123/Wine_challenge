import styled from 'styled-components'

export const Container = styled.header`
    background-color: #FFFFFF;
    width: 100%;
    height: 88.23px;
    display: flex;
    justify-content: space-between;
    border-bottom:0.5px solid #CCCCCC;
    align-items: center;

    @media(max-width: 500px){
        padding: 0px 50px 0px 20px;
        
    }

    @media(max-width: 400px){
        justify-content: space-evenly;
        
    }   

`

export const Hamburguer = styled.img`
    width: 21.88px;
    height: 28px;
    

`

export const Logo = styled.img`
    width: 102.95px;
    height: 31px;
`

export const Account = styled.div`
    margin-left: 150px;
    display: flex;
    gap: 42px;
    align-items: center;
    justify-content: center;

    @media(max-width: 450px){
        gap: 10px
    }

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

`

export const Icon = styled.div`
    position: relative;
    height: 56px;
    width: 56px;
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
