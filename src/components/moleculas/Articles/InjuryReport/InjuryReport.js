import React from 'react';
import { PlayerName, PlayerInfo } from './InjuryReport.styles';
import { ArticleView, ArticleContent } from '../ArticleStyles/Article.styles';

import useCollapse from 'react-collapsed';
import { HeaderNews } from '../../../atoms/HeaderNews/HeaderNews';

export const InjuryReport = ({ articleData }) => {
  const { injuredPlayerInfo } = articleData;
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <ArticleView>
      <HeaderNews isExpanded={isExpanded} data={articleData} getToggleProps={getToggleProps} />
      <div {...getCollapseProps()}>
        <PlayerInfo className="content">
          {injuredPlayerInfo.map((player, i) => {
            return [
              <PlayerName key={i} injured={player.isInjured}>
                {player.playerName}
              </PlayerName>,
              <ArticleContent key={i}>{player.playerInfo}</ArticleContent>,
            ];
          })}
        </PlayerInfo>
      </div>
    </ArticleView>
  );
};
