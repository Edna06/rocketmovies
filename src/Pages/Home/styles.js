import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 120px 116px auto;
  grid-template-areas:
    'header'
    'head'
    'main';
`

export const Head = styled.div`
  grid-area: head;

  padding: 0 106px 0 123px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > h1 {
    font-weight: 400;
    font-size: 32px;
    line-height: 42px;

    color: ${({ theme }) => theme.COLORS.WHITE_TITLE};
  }

  > button {
    width: 207px;
    height: 48px;
  }
`

export const Content = styled.div`
  grid-area: main;

  margin: 40px 40px 40px 40px;


  > main {
    display: flex;
    flex-direction: column;
    gap: 24px;

    margin-right: 10px;
  }

  @media(min-width: 1024px) {

  margin: 0 106px 40px 123px;
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
`

export const Wrapper = styled(Link)`
width: 207px;
`
