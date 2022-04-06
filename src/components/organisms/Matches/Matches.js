import React from 'react';
import { LastMatch } from '../../moleculas/LastMatch/LastMatch';

export const Matches = () => {
  fetch('https://v2.api-football.com/fixtures/team/42/last/20', {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6ea31e09a7123bebeae57afc5ef0651e',
    },
  });
  // .then((res) => res.json())
  // .then((data) => console.log(data));

  return <LastMatch />;
};
