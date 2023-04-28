import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 144px auto;
  grid-template-areas: 'header' 'main';

  > header {
    position: relative;

    grid-area: header;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_500};

    display: flex;

    @media (max-width: 600px) {
    padding-left: 14px;
  }

  @media (min-width: 600px) {
    padding-left: 80px;
  }

  @media (min-width: 1024px) {
    padding-left: 144px;
  }
  }
`

export const Avatar = styled.form`
  width: 186px;
  height: 186px;

  margin-top: -90px;

  > img {
    position: absolute;
    width: 186px;
    height: 186px;

    border-radius: 93px;
  }

  > label {
    width: 48px;
    height: 48px;

    margin-top: 134px;
    margin-left: 130px;

    background: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;

    cursor: pointer;

    :hover {
      filter: brightness(0.9);
    }

    > input {
      display: none;
    }

    svg {
      height: 20px;
      width: 20px;

      color: ${({ theme }) => theme.COLORS.GRAY_600};
    }
  }
`

export const Form = styled.form`
  grid-area: main;

  display: flex;
  align-items: center;
  flex-direction: column;

  > div {
    width: 340px;

    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  > div:nth-child(2) {
    margin-top: 64px;
  }

  > div:nth-child(4) {
    margin-top: 24px;
  }

  > button {
    width: 340px;

    margin-top: 24px;

    filter: brightness(0.5);
  }

  @media(max-width: 376px) {
    padding-right: 1px;
    > div {
      width: 220px;
    }
  }
`
