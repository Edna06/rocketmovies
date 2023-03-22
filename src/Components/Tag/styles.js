import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  padding: 8px 16px;
  width: fit-content;

  border-radius: 8px;

  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
`
