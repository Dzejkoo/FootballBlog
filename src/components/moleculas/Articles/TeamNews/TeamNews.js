import React from 'react';
import useCollapse from 'react-collapsed';
import { ArticleView, WrapperContent } from '../../../atoms/ArticleView/ArticleView.styles';
import { HeaderNews } from '../../../atoms/HeaderNews/HeaderNews';

const data = {
  category: 'news',
  dataPublished: '18 febuary 2022',
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
export const TeamNews = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <ArticleView>
      <HeaderNews data={data} isExpanded={isExpanded} getToggleProps={getToggleProps} />
      <WrapperContent {...getCollapseProps()}>
        <p className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eros mauris, ultricies a magna sit ametLorem ipsum dolor sit amet,
          consectetur adipiscing elit. Aenean eros mauris, ultricies a magna sit ametLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          eros mauris, ultricies a magna sit amet
        </p>
      </WrapperContent>
    </ArticleView>
  );
};
