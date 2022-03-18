import React from 'react';
import styled from 'styled-components';

const LastMatch = styled.div``;

const TimeMatch = styled.span``;
const PLLogo = styled.span``;
const Result = styled.div``;
const LocationMatch = styled.span``;
const InfoMatch = styled.div``;

export const Matches = () => {
  fetch('https://v2.api-football.com/fixtures/team/42', {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6ea31e09a7123bebeae57afc5ef0651e',
    },
  })
    .then((res) => res.json())
    .then((data) => cutArray(data.api.fixtures));

  const cutArray = (array) => {
    const lastMatches = array.slice(array.length - 20);
    console.log(lastMatches);
  };

  return (
    <LastMatch>
      <div>
        <InfoMatch>
          <TimeMatch></TimeMatch>
          <LocationMatch></LocationMatch>
        </InfoMatch>
        <PLLogo></PLLogo>
      </div>
      <Result></Result>
    </LastMatch>
  );
};
