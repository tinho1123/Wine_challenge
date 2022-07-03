import styled from 'styled-components'

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;

    .line {
        width: 80%;
        border: 0.5px solid #D5D5D5;
        margin: 20px 0 24px 0;
    }

    .cardContent {
        display: flex;
        align-content: center;
        justify-content: center ;
        flex-wrap: wrap;
        gap: 32px;
    }
`

export const ItemsCount = styled.p`
    margin: 38.77px 0px 32px 0px;
    font-weight: 400;
`
export const Button = styled.div`
    background-color: #FFF;
    color: #B6116E;
    .selected {
        background-color: #B6116E;
        color: #FFF;
    }
`
