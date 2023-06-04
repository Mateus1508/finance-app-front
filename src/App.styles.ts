import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 99vw;
    justify-content: center;
`;

export const Header = styled.div`
    height: 300px;
    text-align: center;
    font-size: 32px;
`;

export const HeaderText = styled.h1`
    padding: 30px 0 0 0;
    color: #ffffff;
`;

export const Body = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0px 30px;
    gap: 20px;
    @media (max-width: 768px) {        
        margin: 0 10px;
    }
    `;

export const InsertBox = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    width: max-content;
    @media (max-width: 768px) {        
        width: 100%;
    }
`;

export const Table = styled.div`
    display: flex;
    width: 100%;
    margin: 5px 0 20px 0;
    flex: 1;
    flex-direction: column;
`;

