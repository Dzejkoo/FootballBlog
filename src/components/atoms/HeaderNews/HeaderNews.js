import React from 'react';
import { HeaderArticleInfo, DataPublished, Category, Info, ShowMoreButton, HeaderArticle } from './HeaderNews.styles';
import { ReactComponent as SvgIcon } from '../../../assets/images/icon/showmore-arrow.svg';

export const HeaderNews = ({ isExpanded, data, getToggleProps }) => {
  const { category, dataPublished, titlePhoto, titleContent } = data;
  return (
    <>
      <HeaderArticle category={data.category}>
        {/* <img src={url} alt="article" /> */}
        <HeaderArticleInfo>
          <DataPublished>{dataPublished}</DataPublished>
          <Category category={category}>{category}</Category>
          <Info>{titleContent}</Info>
        </HeaderArticleInfo>
      </HeaderArticle>
      <ShowMoreButton {...getToggleProps()}>
        <SvgIcon className={isExpanded ? 'active' : null} />
      </ShowMoreButton>
    </>
  );
};
