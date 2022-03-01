import React from 'react';
import useCollapse from 'react-collapsed';
import { ArticleTitle, ArticleView, WrapperContent, ArticleContent, Content } from '../ArticleStyles/Article.styles';
import { HeaderNews } from '../../../atoms/HeaderNews/HeaderNews';

const data = {
  category: 'transfer news',
  dataPublished: '17 febuary 2022',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eros mauris, ultricies a magna sit amet, tempus luctus nunc. Suspendisse placerat quam eget porttitor convallis. Nulla blandit tristique.',
  articleData: [
    {
      name: 'Kieran Tierney',
      injured: false,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eros mauris, ultricies a magna sit amet,',
    },
    {
      name: 'Gabriel',
      injured: true,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eros mauris, ultricies a magna sit amet,',
    },
    {
      name: 'Rob Holding',
      injured: true,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eros mauris, ultricies a magna sit amet,',
    },
  ],
};

export const TransferNews = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <ArticleView>
      <HeaderNews data={data} isExpanded={isExpanded} getToggleProps={getToggleProps} />
      <div {...getCollapseProps()}>
        <Content className="content">
          <ArticleTitle>Gunners 'frontrunners' for AC Milan attacker</ArticleTitle>
          <img src="https://i2-prod.football.london/incoming/article22785910.ece/ALTERNATES/s1200d/0_Thomas-Partey.jpg" />
          <ArticleContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eros mauris, ultricies a magna sit amet, tempus luctus nunc. Suspendisse
            placerat quam eget porttitor convallis. Nulla blandit tristique.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eros
            mauris, ultricies a magna sit amet, tempus luctus nunc. Suspendisse placerat quam eget porttitor convallis. Nulla blandit tristique.
          </ArticleContent>
          <ArticleContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eros mauris, ultricies a magna sit amet, tempus luctus nunc. Suspendisse
            placerat quam
          </ArticleContent>
        </Content>
      </div>
    </ArticleView>
  );
};
