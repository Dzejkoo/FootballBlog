import React from 'react';
import {
  WrapperArticle,
  HeaderArticle,
  HeaderArticleInfo,
  DataPublished,
  Category,
  Info,
  ShowMoreButton,
  WrapperContent,
  PlayerName,
} from './InjuryReport.styles';
import { ReactComponent as SvgIcon } from '../../../../assets/images/icon/showmore-arrow.svg';
import useCollapse from 'react-collapsed';
import styled from 'styled-components';

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

const PlayerInfo = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: flex-end; */
  align-items: flex-start;
  p {
    margin-left: 20px;
    margin-top: 0;
  }
`;

export const InjuryReport = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <WrapperArticle>
      <HeaderArticle>
        <img src="https://github.com/Dzejkoo/fs-players-card/blob/main/src/assets/images/Aresnal-header-photo.jpeg?raw=true" />
        <HeaderArticleInfo>
          <DataPublished>{data.dataPublished}</DataPublished>
          <Category>{data.category}</Category>
          <Info>{data.text}</Info>
          <ShowMoreButton {...getToggleProps()}>
            <SvgIcon className={isExpanded ? 'active' : null} />
          </ShowMoreButton>
          <WrapperContent {...getCollapseProps()}>
            <PlayerInfo className="content">
              {data.articleData.map((player, i) => {
                return [
                  <PlayerName key={i} injured={player.injured}>
                    {player.name}
                  </PlayerName>,
                  <p>{player.content}</p>,
                ];
              })}
            </PlayerInfo>
          </WrapperContent>
        </HeaderArticleInfo>
      </HeaderArticle>
    </WrapperArticle>
  );
};
