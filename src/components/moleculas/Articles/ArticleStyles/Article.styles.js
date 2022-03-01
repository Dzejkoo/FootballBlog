import styled from 'styled-components';

export const ArticleTitle = styled.h2`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-top: 20px;
`;

export const ArticleContent = styled.p`
  font-weight: 300;
  margin: 0;
`;

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

export const Content = styled.div`
  padding: 0 20px 20px 20px;
  img {
    width: 250px;
    float: left;
    margin-right: 10px;
    margin-bottom: 10px;
  }
`;
