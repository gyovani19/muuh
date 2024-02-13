import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;

    h1 {
        color: #1e255e;
        font-size: 50px;
        font-weight: bold;

    }

    h6 {
        font-size: 16px;
        color: rgba(30, 37, 94, 0.7);
        font-weight: normal;
        padding-right: 100px;
        margin-top: 25px;
    }

    > div {
        width: 50%;
    }
    `

    export const ColumnImage = styled.div`
        img{
            display: block;
            margin-left: auto;
            border-radius: 30px;
        }
    `