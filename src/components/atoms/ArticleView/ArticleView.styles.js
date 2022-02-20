import styled from 'styled-components';

export const ArticleView = styled.div`
  max-width: 670px;
  position: relative;
  min-width: 300px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  margin: 20px;
  overflow-y: hidden;
`;

export const WrapperContent = styled.div`
  padding: 10px;
`;
