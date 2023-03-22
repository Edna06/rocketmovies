import styled from 'styled-components'

export const Container = styled.textarea`
  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  border: none;
  border-radius: 10px;

  width: 100%;
  height: 274px;
  padding: 19px 16px;
  gap: 8px;

  resize: none;

  color: ${({ theme }) => theme.COLORS.WHITE};
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`
