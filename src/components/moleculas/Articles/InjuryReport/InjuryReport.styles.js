import styled from 'styled-components';

export const WrapperArticle = styled.div`
  width: 650px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.white};
`;
export const HeaderArticle = styled.div`
  img {
    width: 100%;
  }
`;
export const HeaderArticleInfo = styled.div`
  font-weight: 300;
  line-height: 100%;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
`;
export const DataPublished = styled.span`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.black};
`;
export const Category = styled.span`
  letter-spacing: -5%;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.ml};
  font-weight: 600;
  margin-left: auto;
`;
export const Info = styled.p`
  color: ${({ theme }) => theme.colors.black};
`;

export const ShowMoreButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  margin-left: auto;
`;
