import styled from 'styled-components';

export const WrapperArticle = styled.div`
  max-width: 670px;
  min-width: 300px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.white};
  overflow-y: hidden;

  &.slide-enter {
    opacity: 0;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
  }
  &.slide-enter-active {
    opacity: 1;
    transition: opacity 350ms ease-in-out;
  }
  &.slide-exit {
    opacity: 0;
  }
  &.slide-exit-active {
    opacity: 0;
    transition: opacity 350ms ease-in-out;
  }
`;
export const HeaderArticle = styled.div`
  position: relative;
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

export const ShowMoreButton = styled.button.attrs()`
  cursor: pointer;
  position: absolute;
  background-color: transparent;
  border: none;
  margin-left: auto;
  right: 1.5%;
  top: 93.5%;
  transition: 1s ease-in-out;
  svg {
    fill: white;
    transform: rotate(180deg);
    &.active {
      transform: rotate(0deg);
    }
  }
`;
