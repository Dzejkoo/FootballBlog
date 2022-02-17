import styled from 'styled-components';

export const HeaderArticleInfo = styled.div`
  font-weight: 300;
  line-height: 100%;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
`;

export const DataPublished = styled.span`
  text-transform: uppercase;
  display: block;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.black};
`;

export const Category = styled.h2`
  letter-spacing: -5%;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.m};
  background-color: ${({ theme }) => theme.colors.orange};
  font-weight: 600;
  padding: 2px 5px;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: auto;
`;

export const ShowMoreButton = styled.button.attrs()`
  cursor: pointer;
  position: absolute;
  background-color: transparent;
  border: none;
  margin-left: auto;
  right: 5px;
  bottom: 5px;
  transition: 1s ease-in-out;
  svg {
    transform: rotate(180deg);
    &.active {
      transform: rotate(0deg);
    }
  }
`;

export const Info = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.ml};
`;

export const HeaderArticle = styled.div`
  position: relative;
  border-top: 4px solid ${({ theme }) => theme.colors.orange};
  img {
    width: 100%;
  }
`;
