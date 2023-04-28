import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  width: 100%;
  height: 116px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 42px 123px;

  border-width: 1px;
  border-bottom-style: solid;
  border-color: ${({ theme }) => theme.COLORS.GRAY_500};

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
  }

  @media (max-width: 768px) {
    padding: 42px 43px;
  }

`
export const Search = styled.div`
  width: 630px;
  height: 56px;

  @media (max-width: 768px) {
    display: none;
  }

  @media (min-width: 768px) {
    width: 240px;
  }

  @media (min-width: 962px) {
    width: 420px;
  }
`

export const Profile = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    strong {
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  > img {
    margin-left: 9px;

    width: 64px;
    height: 64px;

    border-radius: 35px;
    flex: none;

    border-width: 1px;
    border-style: solid;
    border-color: ${({ theme }) => theme.COLORS.GRAY_500};
  }
`
export const Span = styled(Link)`
  align-items: flex-end;
  text-align: left;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  margin-top: 8px;

  color: ${({ theme }) => theme.COLORS.GRAY_300};
`

