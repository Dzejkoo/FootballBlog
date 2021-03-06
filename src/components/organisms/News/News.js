import React, { useEffect, useReducer } from 'react';
import { Wrapper } from './News.styles';
import axios from 'axios';
import { ArticlesSort } from '../../moleculas/Articles/ArtcilesSort/ArticlesSort';
import { Spinner } from '../../atoms/Spinner/Spinner';

const API_TOKEN = 'b177168089829f8761a0f8673e5430';

const query = `
{
  allTeamNews {
    titlePhoto {
      url
    }
    dataPublished
    category
    titleContent
    content
    headerText
  }
}
`;

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

export const News = () => {
  const [state, dispath] = useReducer(reducer, initialState);
  const {
    loading,
    error,
    articles: { data },
  } = state;

  console.log();
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
        console.log(response);
        dispath({ type: ACTION.SUCCESS, data: response.data });
      })
      .catch((error) => dispath({ type: ACTION.ERROR, error: error }));
  }, []);

  return <Wrapper>{loading ? <Spinner /> : error ? <p>{error}</p> : <ArticlesSort articlesData={data} />}</Wrapper>;
};
