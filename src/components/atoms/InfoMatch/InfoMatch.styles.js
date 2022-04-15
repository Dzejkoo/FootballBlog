import styled from 'styled-components';

export const InfoMatchWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ isHeader, theme }) => (isHeader ? `${theme.fontSize.l}` : `${theme.fontSize.m}`)};
  width: 100%;
  font-weight: 300;
  padding-top: ${({ isHeader }) => (isHeader ? '0px' : '20px')};
`;
export const LocationMatch = styled.span``;
export const DateMatch = styled.span`
  padding-right: 5px;
`;
export const PLLogo = styled.img`
  width: 25px;
  margin-left: auto;
`;
