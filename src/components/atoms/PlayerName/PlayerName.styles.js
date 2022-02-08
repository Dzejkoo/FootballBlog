import styled from 'styled-components';

export const PlayerNameStyled = styled.h2`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xl};
  background-color: ${({ theme }) => theme.colors.white};
  font-weight: 400;
  margin: 5px 0 0 0;
  padding: 5px 0;
  color: ${({ theme }) => theme.colors.black};
`;
