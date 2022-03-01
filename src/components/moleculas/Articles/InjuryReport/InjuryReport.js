import React from 'react';
import { PlayerName, PlayerInfo } from './InjuryReport.styles';
import { ArticleView, ArticleContent } from '../ArticleStyles/Article.styles';

import useCollapse from 'react-collapsed';
import { HeaderNews } from '../../../atoms/HeaderNews/HeaderNews';

const data = {
  category: 'injury report',
  dataPublished: '4 febuary 2022',
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

export const InjuryReport = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <ArticleView>
      <HeaderNews isExpanded={isExpanded} data={data} getToggleProps={getToggleProps} />
      <div {...getCollapseProps()}>
        <PlayerInfo className="content">
          {data.articleData.map((player, i) => {
            return [
              <PlayerName key={i} injured={player.injured}>
                {player.name}
              </PlayerName>,
              <ArticleContent>{player.content}</ArticleContent>,
            ];
          })}
        </PlayerInfo>
      </div>
    </ArticleView>
  );
};
