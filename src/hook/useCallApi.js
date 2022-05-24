import { response } from 'msw';
import React, { useReducer } from 'react';
import { useEffect } from 'react/cjs/react.production.min';

export const useCallApi = ({ url }) => {
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
  const [state, dispath] = useReducer(reducer, initialState);

  const { loading, error, articles } = state;

  useEffect(() => {
    dispath({ type: ACTION.CALL_API });
    fetch(url, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '6ea31e09a7123bebeae57afc5ef0651e',
      },
    })
      .then((response) => dispath({ type: ACTION.SUCCESS, data: response }))
      .catch((error) => dispath({ type: ACTION.ERROR, error: error }));
  });
  return { loading, error, articles };
};
