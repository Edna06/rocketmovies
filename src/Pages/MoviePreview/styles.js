import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;

  grid-template-rows: 120px 50px auto;
  grid-template-areas:
    'header'
    'button'
    'main';

    > main {
        grid-area: main;

        margin: 0 10px 20px 12px;
        display: flex;
        flex-direction: column;
    }

    @media(min-width: 662px) {
      > main {
        grid-area: main;

        margin: 0 106px 70px 123px;
        display: flex;
        flex-direction: column;
        overflow-y: auto;

    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background: none;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${({theme})=> theme.COLORS.PINK};
      border-radius: 8px;
      border: none;
    }
  }
  }
`

export const Button = styled.div`
grid-area: button;
display: flex;
justify-content: space-between;

padding: 15px 12px 0 12px;

a:nth-child(2){
  color: ${({theme}) => theme.COLORS.RED};
}
  @media(min-width: 662px) {
    padding: 15px 123px 0 123px;

  }
`

export const Content = styled.div`
  padding: 20px;
`

export const Title = styled.div`
  height: 47px;

  display: flex;
  align-items: center;

  > h1 {
    font-weight: 500;
    font-size: 36px;
    line-height: 47px;

    margin-right: 19px;
  }

  @media(max-width: 662px) {
    display: block;
  }
`

export const Stars = styled.div`

div {
  height: 25px;
  font-size: 25px;

  @media(min-width: 662px) {
    display: flex;
    gap: 10px;
    justify-content: space-between;
  }
}
`

export const Info = styled.div`
  margin-top: 24px;

  display: flex;
  flex-direction: row;

  @media(max-width: 662px) {
    margin-top: 50px;
}
`

export const Author = styled.div`
  display: flex;
  align-items: center;

  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  margin-right: 29px;

  img {
    width: 16px;
    height: 16px;

    border-width: 1px;
    border-style: solid;
    border-color: ${({ theme }) => theme.COLORS.GRAY_500};
    border-radius: 35px;

    margin-right: 8px;
  }
`

export const Date = styled.div`
  display: flex;
  align-items: center;

  > span {
    color: ${({ theme }) => theme.COLORS.PINK};

    margin-right: 8px;
    margin-top: 5px;

    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }
`

export const Tags = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 8px;
`

export const Description = styled.p`
  margin-top: 40px;
  margin-bottom: 40px;

  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  text-align: justify;
`
