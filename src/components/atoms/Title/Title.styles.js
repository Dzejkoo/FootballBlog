import styled from 'styled-components';

export const Title = styled.h2`
  margin-right: 100%;
  margin-left: 30px;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  padding: 7px 15px;
  text-transform: capitalize;
`;
