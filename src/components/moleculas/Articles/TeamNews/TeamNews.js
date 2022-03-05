import React from 'react';
import useCollapse from 'react-collapsed';
import { ArticleTitle, ArticleView, ArticleContent, Content } from '../ArticleStyles/Article.styles';
import { HeaderNews } from '../../../atoms/HeaderNews/HeaderNews';

export const TeamNews = ({ articleData }) => {
  const { titleContent, content } = articleData;
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <ArticleView>
      <HeaderNews isExpanded={isExpanded} data={articleData} getToggleProps={getToggleProps} />
      <div {...getCollapseProps()}>
        <Content className="content">
          <ArticleTitle>{titleContent}</ArticleTitle>
          <ArticleContent>{content}</ArticleContent>
        </Content>
      </div>
    </ArticleView>
  );
};
