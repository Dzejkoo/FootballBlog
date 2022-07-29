import styled from 'styled-components';

export const Title = styled.h2`
  margin-right: 100%;
  margin-left: 30px;
  margin-bottom: 12px;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.xl};
  /* background-color: ${({ theme }) => theme.colors.w};// */
  color: ${({ theme }) => theme.colors.textColor};
  padding: 7px 15px;
  text-transform: capitalize;
`;
