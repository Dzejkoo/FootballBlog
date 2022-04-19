import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: baseline;
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
