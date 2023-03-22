import styled from 'styled-components'

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
`
export const Search = styled.div`
  width: 630px;
  height: 56px;
`

export const Profile = styled.div`
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
      color: ${({theme}) => theme.COLORS.WHITE};
    }

    span{
      align-items: flex-end;
      text-align: left;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;

      color: ${({theme})=> theme.COLORS.GRAY_300};
    };
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
