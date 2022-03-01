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

const initialState = {
  loading: false,
  error: null,
  articles: {},
};

const ACTION = {
  CALL_API: 'call-api',
  SUCCESS: 'success',
  ERROR: 'error',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.CALL_API: {
      return {
        ...state,
        loading: true,
      };
    }
    case ACTION.SUCCESS: {
      return {
        ...state,
        loading: false,
        articles: action.data,
      };
    }
    case ACTION.ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    default:
      return state;
  }
};

export const News = () => {
  const [state, dispath] = useReducer(reducer, initialState);
  const {
    loading,
    error,
    articles: { data },
  } = state;
  console.log(data);

  useEffect(() => {
    dispath({ type: ACTION.CALL_API });
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
      .then((response) => dispath({ type: ACTION.SUCCESS, data: response }))
      .catch((error) => dispath({ type: ACTION.ERROR, error: error }));
  }, []);

  return (
    <Wrapper>
      {/* {console.log(data)} */}
      {loading ? (
        <p>loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
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
      )}
    </Wrapper>
  );
};
