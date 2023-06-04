import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0 0 5px #dddddd;
    background-color: #ffffff;
    justify-content: center;
    padding: 10px 20px;
    gap: 15px;
    height: max-content;
    width: max-content;
    min-width: 200px;

`;

export const InputBox = styled.div`
    display: flex;
    align-items: start;
    flex-direction: column;
    gap: 5px;
    label {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    input[type="checkbox"] {
        content: "";
        width: 20px;
        height: 20px;
    }
    input[type="color"] {
        appearance: none;
        border: none;
        width:50px;
        height: 50px;
        cursor: pointer;
        background-color: transparent;
        &::-webkit-color-swatch {
            border: none;
            border-radius: 7px;
        }
    }


`;

export const Input = styled.input`
    border-radius: 5px;
    height: 25px;
    box-shadow: 0 0 5px #aaaaaa;
    padding: 3px 5px;
    width: 170px;
    border: none;
    font-size: 16px;
    `;

export const Select = styled.select`
    border-radius: 5px;
    height: 30px;
    width: 180px;
    box-shadow: 0 0 5px #aaaaaa;
    border: none;
    font-size: 16px;
`;

export const Button = styled.button`
    background-color: #006d77;
    color: #ffffff;
    align-self: flex-end;
    margin-top: 10px;
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
    font-size: 18px;
    transform: translateX(-10px);
`;