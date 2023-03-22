import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

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

    button:nth-child(1) {
      color: ${({ theme }) => theme.COLORS.PINK};
      background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
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
      flex-direction: row;
      align-items: flex-start;
      padding: 16px;
      gap: 24px;

      width: 100%;
      height: 88px;

      background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      border-radius: 8px;
    }
  }
`

export const Head = styled.div`
  grid-area: head;

  padding: 40px 0 0 123px;
`

export const Info = styled.div`
  display: flex;
  gap: 40px;

  margin-bottom: 40px;

  > div {
    height: 55px;
  }
`
