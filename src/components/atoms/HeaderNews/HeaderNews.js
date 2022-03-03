import React from 'react';
import { HeaderArticleInfo, DataPublished, Category, Info, ShowMoreButton, HeaderArticle } from './HeaderNews.styles';
import { ReactComponent as SvgIcon } from '../../../assets/images/icon/showmore-arrow.svg';

export const HeaderNews = ({ isExpanded, data, getToggleProps }) => {
  const { category, dataPublished, titlePhoto, headerText } = data;
  return (
    <>
      <HeaderArticle category={data.category}>
        {titlePhoto ? <img src={titlePhoto.url} alt="article" /> : null}
        <HeaderArticleInfo>
          <DataPublished>{dataPublished}</DataPublished>
          <Category category={category}>{category}</Category>
          <Info>{headerText}</Info>
        </HeaderArticleInfo>
      </HeaderArticle>
      <ShowMoreButton {...getToggleProps()}>
        <SvgIcon className={isExpanded ? 'active' : null} />
      </ShowMoreButton>
    </>
  );
};
