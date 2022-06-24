import React from 'react';
import { Plock } from 'react-plock';
import { TeamNews } from '../TeamNews/TeamNews';

const artcilesCases = {
  INJURY_REPORT: 'allInjuryReports',
  TEAM_NEWS: 'allTeamNews',
  TRANSFER_NEWS: 'allTransferNews',
};

export const ArticlesSort = ({ articlesData }) => {
  return (
    <>
      <Plock nColumns={2}>
        {Object.keys(articlesData).map((key) => {
          switch (key) {
            case artcilesCases.TEAM_NEWS:
              return articlesData[key].map((article, i) => <TeamNews key={i} articleData={article} />);
            default:
              return key;
          }
        })}
      </Plock>
    </>
  );
};
