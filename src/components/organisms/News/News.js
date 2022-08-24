import React from 'react';
import { Wrapper } from './News.styles';
import { Spinner } from '../../atoms/Spinner/Spinner';
import { NewsContext } from '../../../providers/NewsProvider';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NewsHeader = ({
  data: {
    titlePhoto: { url },
    titleHeader,
    headerDesc,
    photoAuthor,
    nameAuthor,
  },
}) => {
  const urlRegex = /\s/g;

  const url_title = titleHeader.toLowerCase().replace(urlRegex, '-');
  return (
    <NewsHeaderStyled>
      <HeaderPhoto>
        <img src={url} alt="header" />
      </HeaderPhoto>
      <HeaderDesc>
        <NavLink to={`/news/${url_title}`} className="title">
          {titleHeader}
        </NavLink>
        <p className="pre-title">{headerDesc}</p>
        <div className="author">
          <div className="author-photo">
            <img src={photoAuthor.url} alt="author"></img>
          </div>
          <p className="author-name">Written by {nameAuthor}</p>
        </div>
      </HeaderDesc>
    </NewsHeaderStyled>
  );
};

export const News = () => {
  const {
    state: { loading, error, articles },
  } = React.useContext(NewsContext);

  return (
    <Wrapper>{loading ? <Spinner /> : error ? <p>{error}</p> : articles.data.allTeamNews.map((article) => <NewsHeader data={article} />)}</Wrapper>
  );
};

export const HeaderDesc = styled.div`
  color: ${({ theme }) => theme.colors.textColor};
  margin-top: 25px;
  padding-bottom: 25px;
  border-bottom: 1px solid #eee;
  .title {
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSize.xll};
    color: ${({ theme }) => theme.colors.textColor};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  .pre-title {
    font-weight: 300;
    font-size: ${({ theme }) => theme.fontSize.ml};
    color: ${({ theme }) => theme.colors.grayLight};
  }
  .author {
    width: 100%;
    display: flex;
    padding-top: 10px;
  }
  .author-photo {
    margin-right: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.grey};
    img {
      border-radius: 50%;

      width: 100%;
    }
  }
  .author-name {
    font-weight: 300;
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.colors.grayLight};
  }
`;

export const NewsHeaderStyled = styled.div`
  max-width: 650px;
  margin-bottom: 40px;
`;

export const HeaderPhoto = styled.div`
  width: 100%;
  max-height: 365px;
  img {
    width: 100%;
    max-height: 365px;
    border-radius: 5px;
  }
`;
