import styled from 'styled-components'

import BackgroundImage from '../../assets/background.svg'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  margin: auto 136px;

  h1 {
    font-weight: 700;
    font-size: 48px;
    line-height: 63px;

    color: ${({ theme }) => theme.COLORS.PINK};
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;

    color: ${({ theme }) => theme.COLORS.GRAY_100};

    margin-bottom: 48px;
  }

  h2 {
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;

    margin-bottom: 48px;
  }

  > button {
    margin-top: 24px;
  }

  .buttonNewAccount{
    display: flex;
    justify-content: center;

    margin-top: 42px;
  }
`

export const Background = styled.form`
  flex: 1;
  background: url(${BackgroundImage}) no-repeat center center;

  background-size: cover;
  filter: brightness(0.4);
`
