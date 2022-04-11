import React, { useEffect, useState } from 'react';

import { LastMatch } from '../../moleculas/LastMatch/LastMatch';
import { RestMatch } from '../../moleculas/RestMatch/RestMatch';

const dataMock = [
  {
    homeTeam: {
      team_name: 'Crystal Palace',
    },
    event_date: '2022-03-19T12:30:00+00:00',
    goalsAwayTeam: 1,
    goalsHomeTeam: 0,
    awayTeam: {
      team_name: 'Arsenal',
    },
    venue: 'Villa Parkt',
  },
  {
    homeTeam: {
      team_name: 'Crystal Palace',
    },
    event_date: '2022-03-19T12:30:00+00:00',
    goalsAwayTeam: 0,
    goalsHomeTeam: 3,
    awayTeam: {
      team_name: 'Arsenal',
    },
    venue: 'Villa Parkt',
  },
];

export const Matches = () => {
  // const [data, setData] = useState('');
  useEffect(() => {
    fetch('https://v2.api-football.com/fixtures/team/42/last/20', {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '6ea31e09a7123bebeae57afc5ef0651e',
      },
    });
    // .then((res) => res.json())
    // .then((data) => setData(data));
  }, []);
  // console.log(data.api.fixtures);

  return (
    <>
      {dataMock.map((queue, index) => {
        if (index === 0) {
          return <LastMatch data={queue} />;
        } else {
          return <RestMatch data={queue} />;
        }
      })}
    </>
  );
};
