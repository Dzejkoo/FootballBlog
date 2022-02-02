import React, { useContext } from 'react';
import styled from 'styled-components';
import { TeamContext } from '../../../providers/TeamProvider';

const Wrapper = styled.div`
  label {
  }
`;

export const FormPlayer = ({ handleSubmit }) => {
  const { searchPhrase, setSearchPhrase } = useContext(TeamContext);
  return (
    <Wrapper as="form" onSubmit={handleSubmit}>
      <label htmlFor="search" name="search">
        Search Player
      </label>
      <input onChange={(e) => setSearchPhrase(e.target.value)} value={searchPhrase} name="Search" id="Search" />
    </Wrapper>
  );
};
