import styled from 'styled-components'

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
  > main {
    display: flex;
    flex-direction: column;
    gap: 24px;

    margin-right: 10px;
  }
`

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.COLORS.BACKGROUND_500};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  gap: 15px;

  border-radius: 16px;

  width: 100%;
  height:fit-content;

  > p {
    overflow: hidden;
    text-overflow: ellipsis; 
    display: -webkit-box;
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;

    text-align: justify;

    color: ${({ theme }) => theme.COLORS.GRAY_200};

    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }

  > tags {
    margin-top: 40px;
    display: flex;
    gap: 8px;

    div {
      background: ${({ theme }) => theme.COLORS.GRAY_600};
    }
  }
`
export const Movie = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  > h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
  }
`

export const Stars = styled.div`
  color: ${({ theme }) => theme.COLORS.PINK};
  font-size: 12px;

  display: flex;
  gap: 6px;
`
