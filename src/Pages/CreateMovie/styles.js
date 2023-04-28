import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
height: 100vh;

> main {
    margin: 0 6px 7px 23px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
}

> footer {
  > button {
      width: 336.5px;
      height: 56px;

      margin: auto;
    }

    button:nth-child(1) {
      margin-top: 20px;
      margin-bottom: 20px;

      color: ${({ theme }) => theme.COLORS.PINK};
      background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }
}

  @media(min-width: 1024px){
  display: grid;
  grid-template-rows: 120px 90px auto 100px;
  grid-template-areas:
    'header'
    'head'
    'main'
    'footer';

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
      background-color: ${({ theme }) => theme.COLORS.PINK};
      border-radius: 8px;
      border: none;
    }
  }

  > footer {
    grid-area: footer;

    display: flex;
    justify-content: center;

    gap: 40px;

    > button {
      width: 536.5px;
      height: 56px;
    }
  }
  }
`
export const Content = styled.div`
  padding-right: 20px;

  > h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 47px;

    margin-bottom: 40px;
  }

  > section {
    margin-top: 40px;

    h3 {
      color: ${({ theme }) => theme.COLORS.GRAY_200};

      font-weight: 400;
      font-size: 20px;
      line-height: 26px;

      margin-bottom: 24px;
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      padding: 16px;
      gap: 24px;

      width: 100%;
      height: fit-content;

      background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      border-radius: 8px;
    }
  }

  @media(max-width: 1024px) {
    padding-right: 15px;

  > h1 {
    font-size: 26px;
    line-height: 27px;
    margin-bottom: 30px;
  }

  > section {
    margin-top: 30px;

    h3 {
      font-weight: 400;
      font-size: 20px;
      line-height: 12px;

      margin-bottom: 14px;
    }

    .tags {
      gap: 9px;

      div {
      padding: 6px;
      width: 150px;

    >input {
      width: 100px;

      ::placeholder {
        font-size: 14px;
      }
    }

    > button {
    color: ${({ theme }) => theme.COLORS.PINK};

    font-size: 20px;
    line-height: 24px;
     }
    }
   }
 }
}
`

export const Head = styled.div`
   grid-area: head;

  padding: 40px 0 0 123px;

  @media(max-width: 1024px) {
  padding: 10px 0 30px 23px;
  }
`

export const Info = styled.div`
  display: flex;
  gap: 40px;

  margin-bottom: 40px;

  > div {
    height: 55px;
  }

  @media(max-width: 426px) {
  gap: 10px;
  margin-bottom: 10px;
  }
`
