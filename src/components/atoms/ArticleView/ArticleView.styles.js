import styled from 'styled-components';

export const ArticleView = styled.div`
  max-width: 670px;
  position: relative;
  width: 600px;
  min-width: 300px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  margin: 20px;

  overflow-y: hidden;

  &.slide-enter {
    opacity: 0;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
  }
  &.slide-enter-active {
    opacity: 1;
    transition: opacity 350ms ease-in-out;
  }
  &.slide-exit {
    opacity: 0;
  }
  &.slide-exit-active {
    opacity: 0;
    transition: opacity 350ms ease-in-out;
  }
`;

export const WrapperContent = styled.div`
  padding: 10px;
`;
