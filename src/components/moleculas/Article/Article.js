import React, { useContext } from 'react';
import styled from 'styled-components';
import { NewsContext } from '../../../providers/NewsProvider';
import { Link } from 'react-router-dom';
import { ArrowBack } from '../../../assets/images/vectos/ArrowBack';

export const Article = () => {
  const {
    state: { loading, error, articles },
  } = useContext(NewsContext);
  console.log(articles);
  return (
    <Wrapper>
      <div className="article-back">
        <StyledLink to="/news">
          <ArrowBack />
          Wróć
        </StyledLink>
      </div>
      <ArticleWrapper>
        <HeaderPhoto>{/* <img src={url} alt="header" /> */}</HeaderPhoto>
      </ArticleWrapper>
    </Wrapper>
  );
};
export const ArticleWrapper = styled.div``;

export const HeaderPhoto = styled.div`
  width: 100%;
  max-height: 365px;
  img {
    width: 100%;
    max-height: 365px;
    border-radius: 5px;
  }
`;

export const Wrapper = styled.div`
  width: 80%;
  max-width: 1400px;
  margin: 0 auto;
  .article-back {
    display: flex;
  }
`;

export const StyledLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.textColor};
  transition: all 0.25s linear;
  svg {
    margin-right: 5px;
    width: 30px;
    height: 30px;
  }
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  &:hover .arrow-path {
    transform: translateX(-3px);
    stroke: ${({ theme }) => theme.colors.red};
  }
  &:hover .line-path {
    stroke: ${({ theme }) => theme.colors.red};
  }
  &:hover {
    color: ${({ theme }) => theme.colors.red};
  }
  @media screen and (max-width: 820px) {
    padding: 10px;
    font-size: ${({ theme }) => theme.fontSize.m};
    svg {
      width: 25px;
      height: 25px;
    }
  }
`;
