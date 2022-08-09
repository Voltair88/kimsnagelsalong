import styled from 'styled-components'


const SubmittButton = styled.button`
    background: ${(p: { $primary: any; }) => p.$primary ? "indigo" : "red"};
    color: white;
    border: none;
    padding: 0.5rem 1rem;   
    border-radius: 5px;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s ease-in-out;   
    &:hover {
        background: ${(p: { $primary: any; }) => p.$primary ? "indigo" : "red"};
        color: white;
    }
`;

export { SubmittButton };
