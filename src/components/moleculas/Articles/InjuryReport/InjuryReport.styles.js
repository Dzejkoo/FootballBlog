import styled from 'styled-components';
import { theme } from '../../../../assets/styles/theme';

export const injuredCheck = ({ injured }) => {
  if (injured) {
    return theme.colors.logoRed;
  } else {
    return theme.colors.green;
  }
};
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

export const PlayerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 20px 20px 20px;
`;
