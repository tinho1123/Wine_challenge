import styled from 'styled-components'

export const Content = styled.div`
    display: flex;
    width: 100%;
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
    margin-top: 38.77px;
    margin-bottom: 32px;
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
