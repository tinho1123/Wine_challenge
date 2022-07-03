import styled from 'styled-components'

export const FilterSearch = styled.div`
    margin-left: 160px;
    margin-top: 38.77px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .titleSearch {
        font-size: 20px;
    }

    .subtitleSearch {
        padding-top: 32px;
        color: #333333;

        font-weight: 700;
        font-size: 18px;
    }
`

export const ListFilterSearch = styled.ul`
    list-style: none;
    display: flex;
`

export const CheckBoxFilterSearch = styled.li`
    padding-top: 29px;
    display: flex;
    flex-direction: column;
    gap: 13.72px;

    .checkbox-round {
        // get code in https://stackoverflow.com/questions/29617200/how-to-make-checkboxes-rounded
        width: 1.3em;
        height: 1.3em;
        background-color: white;
        border-radius: 50%;
        vertical-align: middle;
        border: 1px solid #ddd;
        appearance: none;
        -webkit-appearance: none;
        outline: none;
        cursor: pointer;

        &:checked {
            border: 5px solid blue;
        }
    }
`
