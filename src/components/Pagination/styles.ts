import styled from 'styled-components'

export const Paginate = styled.ul`
    display: flex;
    list-style: none; 
    margin-top: 26.64px ;
    margin-bottom: 44px;
    display: flex;
    align-items: center;
    justify-content: center;

    li + li {
        margin-left: 1rem;
    }

    .pagination__item {
        width: 38px;
        height: 38px;
        border: none;
        background-color: #FFFFFF;
        border: 1px solid #B6116E;
        color: #B6116E;
        border-radius: 3px;
        cursor: pointer;
    }

    .pagination__item--active {
        width: 38px;
        height: 38px;
        border: none;
        background-color: #B6116E;
        color: #FFFFFF;
        font-weight: bold;
        border-radius: 3px;
        border: 1px solid #B6116E;
        cursor: pointer;

        &:focus {
            outline: none;
        }
    }
`
