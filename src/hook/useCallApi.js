import Reac, { useReducer } from 'react';

export const useCallApi = ({ id, response }) => {
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

  const call = () => {
    dispath({ type: ACTION.CALL_API });
  };
};
