import styled from 'styled-components';
import bgcImages from '../../../assets/images/bgcCard';

export const MatchWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;

export const ResultWrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  background: ${({ isHeader, theme }) => (isHeader ? `url(${bgcImages.bgcResults})` : theme.colors.white)};
  height: ${({ isHeader }) => (isHeader ? `150px` : `auto`)};
  color: ${({ isHeader, theme }) => (isHeader ? `${theme.colors.white}` : `${theme.colors.black}`)};

  &::after {
    content: '';
    display: ${({ isHeader }) => (isHeader ? 'none' : 'block')};
    position: absolute;
    width: 3px;
    height: 100%;
    left: 0;
    background-color: black;
  }
`;

export const Separate = styled.span`
  font-size: ${({ isHeader, theme }) => (isHeader ? `${theme.fontSize.xl}` : `${theme.fontSize.m}`)};
  padding: 0 18px;
`;
