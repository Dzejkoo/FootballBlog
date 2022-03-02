import React from 'react';
import { Plock } from 'react-plock';
import { InjuryReport } from '../InjuryReport/InjuryReport';
import { TeamNews } from '../TeamNews/TeamNews';
import { TransferNews } from '../TransferNews/TransferNews';

const artcilesCases = {
  INJURY_REPORT: 'allInjuryReports',
  TEAM_NEWS: 'allTeamNews',
  TRANSFER_NEWS: 'allTransferNews',
};

export const ArticlesSort = ({ articlesData }) => {
  console.log(articlesData);
  return (
    <>
      {Object.keys(articlesData).map((key) => {
        switch (key) {
          case artcilesCases.INJURY_REPORT:
            return articlesData[key].map((article, i) => <InjuryReport key={i} articleData={article} />);
          case artcilesCases.TEAM_NEWS:
            return articlesData[key].map((article, i) => <TeamNews key={i} articleData={article} />);
          case artcilesCases.TRANSFER_NEWS:
            return articlesData[key].map((article, i) => <TransferNews key={i} articleData={article} />);
          default:
            return key;
        }
      })}
    </>
  );
};
