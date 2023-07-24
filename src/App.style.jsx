import styled from 'styled-components'

export const StyledApp = styled.div`
    max-width: 1440px;
    display: flex;
    justify-content: space-between;
    border: 2px solid red;
    border-radius: 20px;
    overflow: hidden;
    margin: auto;

    @media only screen and (max-width: 768px) {
        flex-direction: column;

    }
`;