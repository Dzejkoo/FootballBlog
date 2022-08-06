import React, { useReducer, useEffect } from 'react';
import { Wrapper } from '../Matches.styles';
import { LastMatch } from '../../../moleculas/LastMatch/LastMatch';
import { RestMatch } from '../../../moleculas/RestMatch/RestMatch';

const initialState = {
  loading: true,
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

export const AllMatches = () => {
  const [state, dispath] = useReducer(reducer, initialState);
  const {
    loading,
    error,
    articles: { api },
  } = state;

  console.log(loading);

  useEffect(() => {
    let clenupMemory = true;
    dispath({ type: ACTION.CALL_API });
    fetch('https://v2.api-football.com/fixtures/team/42/last/20', {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '6ea31e09a7123bebeae57afc5ef0651e',
      },
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        if (clenupMemory) {
          dispath({ type: ACTION.SUCCESS, data: response });
        }
      })
      .catch((error) => dispath({ type: ACTION.ERROR, error: error }));
    return () => {
      clenupMemory = false;
    };
  }, []);
  return (
    <Wrapper>
      {loading ? (
        <p>Loading...</p>
      ) : (
        api.fixtures.map((queue, index) => {
          if (index === 0) {
            return <LastMatch key={index} data={queue} />;
          } else {
            return <RestMatch key={index} data={queue} />;
          }
        })
      )}
    </Wrapper>
  );
};
