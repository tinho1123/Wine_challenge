import styled from 'styled-components'

export const Container = styled.div`
    background-color: #FFFFFF;
    width: 100vw;
    height: 88.23px;
    display: flex;
    border-bottom:0.5px solid #CCCCCC;
`

export const Logo = styled.img`
    width: 102.95px;
    height: 31px;
    margin-left: 150.75px;
    margin-top: 27px;
`

export const List = styled.ul`
    margin-left: 83.15px;
    display: flex;
    gap: 48px;
    font-family: Neo Sans;
    height: 100%;
    position: sticky;

    .Loja {
        &::after {
        content: '';
        position: relative;
        top: 30px;
        border-bottom: 2px solid #D14B8F;
    }
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
    margin-left: 150px;
    display: flex;
    gap: 42px;
`

export const Icon = styled.div`
    margin-top: 15px;
    height: 56px;
    width: 56px;
    border: 2px solid #555555;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`
