import React, { useContext } from 'react';
import styled from 'styled-components';
import { TeamContext } from '../../../providers/TeamProvider';

const Wrapper = styled.div`
  width: 100%;
  input {
    padding: 10px 20px;
    margin-left: 30px;
    border-radius: 7px;
    border: none;
    background-color: ${({ theme }) => theme.colors.grey};
    &::placeholder {
      opacity: 50%;
    }
  }
`;

export const FormPlayer = ({ handleSubmit }) => {
  const { searchPhrase, setSearchPhrase } = useContext(TeamContext);
  return (
    <Wrapper as="form" onSubmit={handleSubmit}>
      <input onChange={(e) => setSearchPhrase(e.target.value)} value={searchPhrase} name="Search" id="Search" placeholder="Find player" />
    </Wrapper>
  );
};
