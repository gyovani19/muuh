import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
      }

    h1 {
        color: #1e255e;
        font-size: 50px;
        font-weight: bold;
        @media (max-width: 768px) {
            display: flex;
            flex-direction: column;
            text-align: center;
            width: 100%;
            font-size: 18px;
          }
    }

    h6 {
        font-size: 14px;
        color: rgba(30, 37, 94, 0.7);
        font-weight: normal;
        padding-right: 100px;
        margin-top: 25px;
        @media (max-width: 768px) {
            display: flex;
            flex-direction: column;
            text-align: center;
            width: 100%;
            padding-right: 0px;
          }
    }

    > div {
        width: 50%;
        @media (max-width: 768px) {
            display: flex;
            flex-direction: column;
                width: 100%;      
                justify-content: center;  
          }
    }
    `

    export const ColumnImage = styled.div`
        img{
            display: block;
            margin-left: auto;
            border-radius: 30px;
            @media (max-width: 768px) {
                margin: auto;
                width: 80%;
              }
        }
    `