import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  padding: 40px 0 60px 0;
  margin: 0 auto;
  button {
    padding: 10px 20px;
    margin: 0 10px;
    font-size: ${({ theme }) => theme.fontSize.xl};
    background-color: ${({ theme }) => theme.colors.white};
    border: none;
    color: ${({ theme }) => theme.colors.black};
    cursor: pointer;
  }
`;

export const Navigation = () => {
  return (
    <Wrapper>
      <button>Team</button>
      <button>Set Team</button>
    </Wrapper>
  );
};
