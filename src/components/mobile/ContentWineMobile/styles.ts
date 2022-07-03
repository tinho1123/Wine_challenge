import styled from 'styled-components'

export const Content = styled.div`
    max-width: 793px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    .line {
        width: 80%;
        height: 1px;
        border: 0.5px solid #D5D5D5;
        margin-top: 20px;
        margin-bottom: 24px;
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
