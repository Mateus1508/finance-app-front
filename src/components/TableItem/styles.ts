import styled from 'styled-components';

export const TableLine = styled.tr`

`;

export const TableColumn = styled.td`
    padding: 10px 0;
`;

export const Category = styled.div<{color: string}>`
    display: flex;
    align-items: center;
    padding: 5px 0px;
    width: 40px;
    border-bottom: 3px solid ${props => props.color};
`;

export const Value = styled.div<{expense: string}>`
    display: flex;
    align-items: center;
    padding: 5px 0px;
    font-weight: bold;
    color: ${props => props.expense};
`;

