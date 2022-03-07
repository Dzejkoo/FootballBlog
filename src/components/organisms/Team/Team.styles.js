import styled from 'styled-components';

export const TeamWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  width: 100%;
  &:first-of-type {
    margin-top: 8px;
  }
`;
export const ViewWrapper = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  &.slide-enter {
    opacity: 0;
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

export const NonFound = styled.div`
  margin: 0 auto;
  padding: 50px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.black};
`;
