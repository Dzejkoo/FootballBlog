import React from 'react';
import useCollapse from 'react-collapsed';
import { ArticleTitle, ArticleView, WrapperContent, ArticleContent, Content } from '../ArticleStyles/Article.styles';
import { HeaderNews } from '../../../atoms/HeaderNews/HeaderNews';

export const TransferNews = ({ articleData }) => {
  const { titleContent, content } = articleData;

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <ArticleView>
      <HeaderNews isExpanded={isExpanded} data={articleData} getToggleProps={getToggleProps} />
      <div {...getCollapseProps()}>
        <Content className="content">
          <ArticleTitle>{titleContent}</ArticleTitle>
          <img src="https://i2-prod.football.london/incoming/article22785910.ece/ALTERNATES/s1200d/0_Thomas-Partey.jpg" />
          <ArticleContent>{content}</ArticleContent>
          <ArticleContent>{content}</ArticleContent>
        </Content>
      </div>
    </ArticleView>
  );
};
