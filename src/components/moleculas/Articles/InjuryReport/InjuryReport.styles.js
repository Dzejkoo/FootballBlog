import styled from 'styled-components';
import { theme } from '../../../../assets/styles/theme';

export const injuredCheck = ({ injured }) => {
  if (injured) {
    return theme.colors.logoRed;
  } else {
    return theme.colors.green;
  }
};
export const WrapperContent = styled.div``;

export const PlayerName = styled.h3`
  font-weight: 300;
  position: relative;
  &::after {
    content: '';
    width: 100%;
    height: 60%;
    position: absolute;
    bottom: -10%;
    opacity: 30%;
    left: 0;
    background-color: ${(injured) => injuredCheck(injured)};
  }
`;

export const WrapperArticle = styled.div`
  max-width: 670px;
  position: relative;
  width: 600px;
  min-width: 300px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.white};
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

export const PlayerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  p {
    margin-left: 20px;
    margin-top: 0;
  }
`;
