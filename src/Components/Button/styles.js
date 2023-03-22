import styled from 'styled-components'

export const Container = styled.button`
width: 100%;
height: 56px;

background: ${({theme})=> theme.COLORS.PINK};
color: ${({theme}) => theme.COLORS.GRAY_600};

border: 0;
border-radius: 8px;
font-weight: 500;
font-size: 16px;

display: flex;
align-items: center;
justify-content: center;
gap: 8px;

&:disabled{
  opacity: 0.5;
}
`