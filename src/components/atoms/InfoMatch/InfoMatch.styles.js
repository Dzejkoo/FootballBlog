import styled from 'styled-components';

export const InfoMatchWrapper = styled.div`
  display: flex;
  font-size: ${({ isHeader, theme }) => (isHeader ? `${theme.fontSize.l}` : `${theme.fontSize.m}`)};
  justify-content: space-between;
  width: 100%;
`;
export const LocationMatch = styled.span``;
export const DateMatch = styled.span``;
export const PLLogo = styled.span`
  margin-left: auto;
`;
