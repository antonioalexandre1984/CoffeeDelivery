import styled from 'styled-components';

export const InputWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 0.3rem;
position: relative;



`;

export const InputStyleContainer = styled.input`
height: 2.625rem;
border-radius: 4px;
border: ${props => props.theme.colors['base-button']};
background: ${props => props.theme.colors['base-input']};
transition: 0.4s;

&:focus-within{
    border-color: ${props => props.theme.colors['brand-yellow-dark']};
}

color: ${props => props.theme.colors['base-text']};
font-size: 0.75rem;
padding: 0 0.75rem;

&::placeholder{
    color: ${props => props.theme.colors['base-label']};
}
`;
