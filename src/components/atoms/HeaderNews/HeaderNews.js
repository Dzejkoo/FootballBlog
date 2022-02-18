import React from 'react';
import { HeaderArticleInfo, DataPublished, Category, Info, ShowMoreButton, HeaderArticle } from './HeaderNews.styles';
import { ReactComponent as SvgIcon } from '../../../assets/images/icon/showmore-arrow.svg';

export const HeaderNews = ({ isExpanded, data, getToggleProps }) => {
  return (
    <>
      <HeaderArticle category={data.category}>
        <img src="https://github.com/Dzejkoo/fs-players-card/blob/main/src/assets/images/Aresnal-header-photo.jpeg?raw=true" />
        <HeaderArticleInfo>
          <DataPublished>{data.dataPublished}</DataPublished>
          <Category category={data.category}>{data.category}</Category>
          <Info>{data.text}</Info>
        </HeaderArticleInfo>
      </HeaderArticle>
      <ShowMoreButton {...getToggleProps()}>
        <SvgIcon className={isExpanded ? 'active' : null} />
      </ShowMoreButton>
    </>
  );
};
