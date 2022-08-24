import React, { useContext } from 'react';
import { NewsContext } from '../../../providers/NewsProvider';

export const Article = () => {
  const {
    state: { loading, error, article },
  } = useContext(NewsContext);
  return <div></div>;
};
