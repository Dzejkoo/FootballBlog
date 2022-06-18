import React, { useEffect, useReducer } from 'react';
import { LastMatch } from '../../moleculas/LastMatch/LastMatch';
import { RestMatch } from '../../moleculas/RestMatch/RestMatch';
import { Wrapper } from './Matches.styles';
import { Spinner } from '../../atoms/Spinner/Spinner';
import { Outlet, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const dataMock = [
  {
    homeTeam: {
      team_name: 'Crystal Palace',
    },
    event_date: '2022-03-19T12:30:00+00:00',
    goalsAwayTeam: 1,
    goalsHomeTeam: 0,
    awayTeam: {
      team_name: 'Arsenal',
    },
    venue: 'Villa Parkt',
  },
  {
    homeTeam: {
      team_name: 'Crystal Palace',
    },
    event_date: '2022-03-19T12:30:00+00:00',
    goalsAwayTeam: 0,
    goalsHomeTeam: 3,
    awayTeam: {
      team_name: 'Arsenal',
    },
    venue: 'Villa Parkt',
  },
];

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

export const Matches = () => {
  return (
    <Wrapper>
      <NavLeagues>
        <StyledLink to="premierleague">Premier League</StyledLink>
        <StyledLink to="caraboucup">Carabao Cup</StyledLink>
        <StyledLink to="allmatches">All Leagues</StyledLink>
      </NavLeagues>
      <Outlet />
    </Wrapper>
  );
};

const NavLeagues = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  margin-bottom: 30px;
`;

const StyledLink = styled(NavLink).attrs()`
  padding: 10px 20px;
  display: block;
`;
