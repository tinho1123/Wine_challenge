import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    gap: 32px;
    grid-template-columns: 416px 1fr;
`;

export const ContentFilter = styled.div`
    background-color: yellow;
`;

export const FilterSearch = styled.div `
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
`;

export const Content = styled.div`
    background-color: green;
    margin-right: 160px;
`;