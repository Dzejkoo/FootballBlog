import React, { useEffect, useReducer } from 'react';
import { InjuryReport } from '../../moleculas/Articles/InjuryReport/InjuryReport';
import { TransferNews } from '../../moleculas/Articles/TransferNews/TransferNews';
import { TeamNews } from '../../moleculas/Articles/TeamNews/TeamNews';
import { Plock } from 'react-plock';
import { Wrapper } from './News.styles';
import axios from 'axios';

const API_TOKEN = 'b177168089829f8761a0f8673e5430';
const query = `{
            allTeamNews{
              titlePhoto{
                url
              }
              dataPublished
              category
              titleContent
              content
            }
            allTransferNews{
              titlePhoto{
                url
              }
              dataPublished
              category
              titleContent
              content
            }
            allInjuryReports{
              titlePhoto{
                url
              }
              dataPublished
              category
              titleContent
              isinjured
              playername
              playerInfo
              
            }
          }`;

export const News = () => {
  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query: query,
        },
        {
          headers: {
            authorization: `Bearer ${API_TOKEN}`,
          },
        }
      )
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  });

  return (
    <Wrapper>
      <Plock nColumns={2}>
        <InjuryReport />
        <TransferNews />
        <TeamNews />
        <InjuryReport />
        <TransferNews />
        <TeamNews />
        <InjuryReport />
        <TransferNews />
        <TeamNews />
      </Plock>
    </Wrapper>
  );
};
