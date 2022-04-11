import React from 'react';
import { InfoMatchWrapper, DateMatch, LocationMatch, PLLogo } from './InfoMatch.styles';

export const InfoMatch = ({ isHeader }) => {
  return (
    <InfoMatchWrapper isHeader={isHeader}>
      <DateMatch>Sunday March 6 - 15:00 </DateMatch>
      <LocationMatch>Emierates Stadium</LocationMatch>
      <PLLogo>LOGO</PLLogo>
    </InfoMatchWrapper>
  );
};
