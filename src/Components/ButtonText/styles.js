import styled from 'styled-components'

export const Container = styled.button`
width: auto;
display: flex;
gap: 5px;
align-items: center;

color: ${({theme}) => theme.COLORS.PINK};
border: none;
background: none;
    
font-weight: 400;
font-size: 16px;
line-height: 21px;
`