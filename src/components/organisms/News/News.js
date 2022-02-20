import React from 'react';
import { InjuryReport } from '../../moleculas/Articles/InjuryReport/InjuryReport';
import { TransferNews } from '../../moleculas/Articles/TransferNews/TransferNews';
import { TeamNews } from '../../moleculas/Articles/TeamNews/TeamNews';
import styled from 'styled-components';
import { Plock } from 'react-plock';

const Wrapper = styled.div`
  margin: 0 auto;
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  .container {
    display: grid;
    grid-template-columns: 1fr, 1fr;
    grid-template-rows: masonry;
  }
  &.slide-enter {
    opacity: 0;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
  }
  &.slide-enter-active {
    opacity: 1;
    transition: opacity 350ms ease-in-out;
  }
  &.slide-exit {
    opacity: 0;
  }
  &.slide-exit-active {
    opacity: 0;
    transition: opacity 350ms ease-in-out;
  }
  & > *:child {
    align-self: flex-end;
  }
`;

export const News = () => {
  return (
    <Wrapper>
      <Plock nColumns={2}>
        <InjuryReport />
        <TransferNews />
        <TeamNews />
        <InjuryReport />
        <TransferNews />
        <TeamNews />
        <InjuryReport />
        <TransferNews />
        <TeamNews />
      </Plock>
    </Wrapper>
  );
};
