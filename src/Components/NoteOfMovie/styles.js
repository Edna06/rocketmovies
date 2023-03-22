import styled from 'styled-components'


export const Container = styled.div`

background: ${({ theme }) => theme.COLORS.BACKGROUND_500};

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 32px;
gap: 15px;

border-radius: 16px;

width: 100%;

> header {

display: flex;
flex-direction: column;
gap: 8px;

> h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
  }
}

> main{

  > p {
    overflow: hidden;
    text-overflow: ellipsis; 
    display: -webkit-box;
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
    
    text-align: justify;
    
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }
}

>footer{
    margin-top: 40px;
    display: flex;
    gap: 8px;
    
    div {
      background: ${({ theme }) => theme.COLORS.GRAY_600};
    }
}
`