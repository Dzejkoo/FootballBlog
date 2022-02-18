import React from 'react';
import useCollapse from 'react-collapsed';
import { ArticleView, WrapperContent } from '../../../atoms/ArticleView/ArticleView.styles';
import { HeaderNews } from '../../../atoms/HeaderNews/HeaderNews';
import styled from 'styled-components';

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

const Title = styled.h2`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin-top: 0;
`;
const Content = styled.div`
  /* display: flex; */
  flex-wrap: wrap;
  img {
    width: 250px;
    float: left;
    margin: 0 15px 15px 0;
  }
  p {
    font-weight: 300;
  }
`;

export const TransferNews = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <ArticleView>
      <HeaderNews data={data} isExpanded={isExpanded} getToggleProps={getToggleProps} />
      <WrapperContent {...getCollapseProps()}>
        <Content className="content">
          <Title>Gunners 'frontrunners' for AC Milan attacker</Title>
          <img src="https://i2-prod.football.london/incoming/article22785910.ece/ALTERNATES/s1200d/0_Thomas-Partey.jpg" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eros mauris, ultricies a magna sit amet, tempus luctus nunc. Suspendisse
            placerat quam eget porttitor convallis. Nulla blandit tristique.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eros
            mauris, ultricies a magna sit amet, tempus luctus nunc. Suspendisse placerat quam eget porttitor convallis. Nulla blandit tristique.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eros mauris, ultricies a magna sit amet, tempus luctus nunc. Suspendisse
            placerat quam
          </p>
        </Content>
      </WrapperContent>
    </ArticleView>
  );
};
