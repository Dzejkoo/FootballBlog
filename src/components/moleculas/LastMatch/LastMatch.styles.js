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
  background-image: ${({ isHeader }) => (isHeader ? `url(${bgcImages.bgcResults})` : null)};
  width: 100%;
  height: ${({ isHeader }) => (isHeader ? `150px` : `auto`)};
  display: flex;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ isHeader, theme }) => (isHeader ? `${theme.colors.white}` : `${theme.colors.black}`)};
`;

export const Separate = styled.span`
  font-size: ${({ isHeader, theme }) => (isHeader ? `${theme.fontSize.xl}` : `${theme.fontSize.m}`)};
  padding: 0 18px;
`;
