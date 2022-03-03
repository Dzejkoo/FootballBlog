import React from 'react';
import useCollapse from 'react-collapsed';
import { ArticleTitle, ArticleView, ArticleContent, Content } from '../ArticleStyles/Article.styles';
import { HeaderNews } from '../../../atoms/HeaderNews/HeaderNews';

export const TransferNews = ({ articleData }) => {
  const {
    titleContent,
    content,
    contentPhoto: { url },
  } = articleData;

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <ArticleView>
      <HeaderNews isExpanded={isExpanded} data={articleData} getToggleProps={getToggleProps} />
      <div {...getCollapseProps()}>
        <Content className="content">
          <ArticleTitle>{titleContent}</ArticleTitle>
          <img src={url} alt="article" />
          <ArticleContent>{content}</ArticleContent>
          <ArticleContent>{content}</ArticleContent>
        </Content>
      </div>
    </ArticleView>
  );
};
