import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  width: auto;

  padding: 16px;
  border-radius: 10px;

  background-color: ${({ isNew, theme }) =>
    isNew ? 'transparent' : theme.COLORS.BACKGROUND_700};

  border: ${({ theme, isNew }) =>
    !isNew ? 'none' : `1px dashed ${theme.COLORS.GRAY_300}`};

  > input {
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;

    width: ${({ isNew }) => (!isNew ? '140px' : '160px')};

    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: ${({ theme }) => theme.COLORS.WHITE_TITLE};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > button {
    color: ${({ theme }) => theme.COLORS.PINK};

    border: none;
    background: none;

    font-size: 24px;
    line-height: 24px;
  }
`
