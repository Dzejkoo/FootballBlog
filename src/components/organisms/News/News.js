import React from 'react';
import { InjuryReport } from '../../moleculas/Articles/InjuryReport/InjuryReport';
import { TransferNews } from '../../moleculas/Articles/TransferNews/TransferNews';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
`;

export const News = () => {
  return (
    <Wrapper>
      <InjuryReport />
      <TransferNews />
    </Wrapper>
  );
};
