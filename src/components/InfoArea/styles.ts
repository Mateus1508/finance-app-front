import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    padding: 10px 0;
    align-items: center;
    box-shadow: 0 0 5px #dddddd;
    background-color: #ffffff;
    border-radius: 10px;
    @media (max-width: 768px) {        
        flex-direction: column;
        gap: 20px;
    }
`;

export const MonthArea = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const MonthArrow = styled.div`
    display: flex;
    width: max-content;
    border-radius: 5px;
    justify-content: center;
    transition: 0.5s ease-in-out;
    background-color: #006d77;
    cursor: pointer;
    &:hover {
        background-color: #dddddd;
    }
    .month-icon {
        color: #ffffff;
        &:hover {
            color: #006d77;
        }
    }
`;


export const MonthTitle = styled.div`
    display: flex;
    padding: 0 20px;
    width: max-content;
    justify-content: center;
`;

export const ResumeArea = styled.div`
    display: flex;
    flex: 2;
`;