import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  label {
  }
`;

export const FormPlayer = ({ handleSubmit, ...props }) => {
  return (
    <Wrapper as="form" onSubmit={handleSubmit}>
      <label htmlFor="search" name="search">
        Search Player
      </label>
      <input id="search" name="search" {...props}></input>
      <button type="submit">Search</button>
    </Wrapper>
  );
};
