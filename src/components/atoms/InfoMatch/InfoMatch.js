import React from 'react';
import { InfoMatchWrapper, DateMatch, PLLogo } from './InfoMatch.styles';

export const InfoMatch = ({ isHeader, data: { venue, event_date, league } }) => {
  const time = new Date(Date.parse(event_date));
  const correctTime = time.toUTCString().slice(0, -7);

  return (
    <InfoMatchWrapper isHeader={isHeader}>
      <DateMatch>{correctTime}</DateMatch>
      <span>{venue}</span>
      <PLLogo src={league.logo} alt="" />
    </InfoMatchWrapper>
  );
};
