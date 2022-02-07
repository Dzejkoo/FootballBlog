import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

export const TeamContext = React.createContext({
  filterPlayers: () => {},
  getMatchingStudents: () => {},
});

const initialState = {
  loading: true,
  error: '',
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        post: action.payload,
        error: '',
      };
    case 'FETCH_ERROR':
      return {
        loading: false,
        post: {},
        error: 'Something went wrong!',
      };
    case 'INPUT_CHANGE':
    default:
      return state;
  }
};

const TeamProvider = ({ children }) => {
  //searching phrase useSate
  const [searchPhrase, setSearchPhrase] = useState('');

  //useReducer for API call
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get('/arsenalPlayers')
      .then(({ data }) => {
        dispatch({ type: 'FETCH_SUCCESS', payload: data.arsenalPlayers });
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_ERROR' });
      });
  }, []);

  const cases = {
    Goalkeeper: 'Goalkeeper',
    Defender: 'Defender',
    Midfielder: 'Midfielder',
    Forward: 'Forward',
  };

  const getMatchingPlayers = () => {
    const matchedPlayers = state.filter((player) => player.name.fullName.toLowerCase().includes(searchPhrase.toLowerCase()));
    return matchedPlayers;
  };

  const filterPlayers = ({ dataPlayer: { post } }) => {
    const goalkeepers = post.filter((player) => player.position === cases.Goalkeeper);
    const defender = post.filter((player) => player.position === cases.Defender);
    const midfielder = post.filter((player) => player.position === cases.Midfielder);
    const forward = post.filter((player) => player.position === cases.Forward);

    return { goalkeepers, defender, midfielder, forward };
  };
  return <TeamContext.Provider value={{ filterPlayers, getMatchingPlayers, searchPhrase, setSearchPhrase }}>{children}</TeamContext.Provider>;
};

export default TeamProvider;
