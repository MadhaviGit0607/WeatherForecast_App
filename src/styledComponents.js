import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Table = styled.table`
    width: 100%;
    max-width: 1200px;
    border-collapse: collapse;
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Th = styled.th`
    cursor: pointer;
    padding: 10px;
    border: 1px solid #ddd;
    background-color: #f4f4f4;
`;

export const Td = styled.td`
    padding: 10px;
    border: 1px solid #ddd;
`;

export const Input = styled.input`
    padding: 10px;
    margin: 20px 0;
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 100%;
    max-width: 300px;
`;

export const ErrorMessage = styled.div`
    color: red;
    font-size: 1.2em;
    margin: 20px;
`;

export const WeatherContainer = styled(Container)`
    background: ${(props) => props.background};
    color: #fff;
    text-align: center;
`;
