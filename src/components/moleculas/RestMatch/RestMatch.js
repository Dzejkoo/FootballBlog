import React from 'react';
import styled from 'styled-components';
import { MatchWrapper } from '../LastMatch/LastMatch.styles';
import { InfoMatch } from '../../atoms/InfoMatch/InfoMatch';
import { Result } from '../Result/Result';

export const RestMatch = ({ data }) => {
  return (
    <MatchWrapper>
      <InfoMatch data={data} />
      <Result data={data} />
    </MatchWrapper>
  );
};
