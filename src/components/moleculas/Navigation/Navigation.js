import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const Navigation = () => {
  return (
    <Wrapper>
      <button>Team</button>
      <button>Set Team</button>
    </Wrapper>
  );
};
