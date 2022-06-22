import React, { useReducer, useEffect } from 'react';
import { Header } from '../moleculas/Header/Header';
import styled from 'styled-components';
import axios from 'axios';
import { Outlet, useLocation, Route, Routes } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Spinner } from '../atoms/Spinner/Spinner';
import { Team } from '../organisms/Team/Team';
import { News } from '../organisms/News/News';
import { Matches } from '../organisms/Matches/Matches';
import { AllMatches } from '../organisms/Matches/AllMatches/AllMatches';
import { PremierLeague } from '../organisms/Matches/PremierLeague/PremierLeague';
import { CarabaoCup } from '../organisms/Matches/CarabaoCup/CarabaoCup';
import { useAuth } from '../../providers/AuthProvider';

const Wrapper = styled.div`
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
`;

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

export const MainTemplate = () => {
  const location = useLocation();
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

  return (
    <Wrapper>
      <Header />
      {/* <TransitionGroup>
        <CSSTransition key={location.key} classNames="slide" timeout={350}> */}
      <Routes>
        <Route index element={state.loading ? <Spinner /> : <Team state={state} />} />
        <Route path="/news" element={<News />} />
        <Route path="/matches" element={<Matches />}>
          <Route index element={<AllMatches />} />
          <Route path="premierleague" element={<PremierLeague />} />
          <Route path="caraboucup" element={<CarabaoCup />} />
          <Route path="allmatches" element={<AllMatches />} />
        </Route>
      </Routes>
      {/* </CSSTransition>
      </TransitionGroup> */}
    </Wrapper>
  );
};
