import styled from "styled-components";

export const Container = styled.button`
    background-color: #17A4D0;
    border: 1px solid #17A4D0;
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    width: 200px;
    height: 55px;
    border-radius: 100px;
    margin-top: 20px;
    transition: all 0.25s ease-out;
    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
        width: 100%;
        align-items: center;
       }
    &:hover {
        background-color: #f8fdff; 
        color: #17A4D0;
        
    }   
`;