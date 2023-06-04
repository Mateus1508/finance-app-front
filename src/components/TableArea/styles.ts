import styled from 'styled-components';

export const Table = styled.table`
    width: 100%;
    background-color: #ffffff;
    padding: 20px;
    box-shadow: 0 0 5px #cccccc;
    border-radius: 10px;
    margin-top: 20px;
    td {
        color: #000;
    }
`;

export const TableHeadColumn = styled.th<{width: number}>`
    padding: 10px 0;
    width: ${props => `${props.width}px` ? `${props.width}px` : 'auto'};
    text-align: left;
`;