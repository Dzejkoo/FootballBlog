import React, { useContext } from 'react';
import { TeamContext } from '../../../providers/TeamProvider';
import { Wrapper } from './FormPlayer.styles';

export const FormPlayer = ({ handleSubmit }) => {
  const { searchPhrase, setSearchPhrase } = useContext(TeamContext);
  return (
    <Wrapper as="form" onSubmit={handleSubmit}>
      <input
        onChange={(e) => setSearchPhrase(e.target.value)}
        value={searchPhrase}
        name="Search"
        id="Search"
        placeholder="Find player"
        autoComplete="off"
      />
    </Wrapper>
  );
};
