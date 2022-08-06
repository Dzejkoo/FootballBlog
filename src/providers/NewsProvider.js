import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

export const NewsContext = React.createContext({});

const NewsProvider = ({ children }) => {
  const API_TOKEN = 'b177168089829f8761a0f8673e5430';

  const query = `
    {
    allTeamNews {
        titlePhoto {
            url
        }
        dataPublished
        category
        headerDesc
        titleHeader
        photoAuthor {
            url
        }
        nameAuthor
    }
    }
`;
  const initialState = {
    loading: true,
    error: null,
    articles: {},
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
  const ACTION = {
    CALL_API: 'call-api',
    SUCCESS: 'success',
    ERROR: 'error',
  };
  const [state, dispath] = useReducer(reducer, initialState);

  console.log(state);
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
      .then((response) => {
        dispath({ type: ACTION.SUCCESS, data: response.data });
      })
      .catch((error) => dispath({ type: ACTION.ERROR, error: error }));
  }, []);

  return <NewsContext.Provider value={{ state, dispath, ACTION }}>{children}</NewsContext.Provider>;
};

export default NewsProvider;
