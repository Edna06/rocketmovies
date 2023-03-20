import styled from 'styled-components'

export const Container = styled.button`
width: 65px;
display: flex;
justify-content: space-between;
align-items: center;

color: ${({theme}) => theme.COLORS.PINK};
border: none;
background: none;
    
font-weight: 400;
font-size: 16px;
line-height: 21px;
`