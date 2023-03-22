import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  border-radius: 10px;
  margin-bottom: 8px;

  > input {
    height: 56px;
    width: 100%;

    padding: 19px 24px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;

    font-size: 14px;
    font-weight: 400;
    align-items: center;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > svg{
    margin-left: 16px;
  }
`
