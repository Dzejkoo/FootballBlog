import React from 'react';
import { LastMatch } from '../../moleculas/LastMatch/LastMatch';

const data = [
  {
    homeTeam: {
      team_name: 'Arsenal',
    },
    event_date: '2022-03-19T12:30:00+00:00',
    goalesAwayTeam: 1,
    goalsHomeTeam: 0,
    awayTeam: {
      team_name: 'Watford',
    },
    venue: 'Villa Parkt',
  },
  {
    homeTeam: {
      team_name: 'Crystal Palace',
    },
    event_date: '2022-03-19T12:30:00+00:00',
    goalesAwayTeam: 0,
    goalsHomeTeam: 3,
    awayTeam: {
      team_name: 'Arsenal',
    },
    venue: 'Villa Parkt',
  },
];

export const Matches = () => {
  fetch('https://v2.api-football.com/fixtures/team/42/last/20', {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6ea31e09a7123bebeae57afc5ef0651e',
    },
  });
  // .then((res) => res.json())
  // .then((data) => console.log(data));

  return (
    <>
      {data.map((queue, index) => {
        if (index === 0) {
          return <LastMatch data={queue} />;
        }
      })}
    </>
  );
};
