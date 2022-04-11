import React from 'react';
import { TeamDescription } from '../../atoms/TeamDescription/TeamDescription';
import { ResultWrapper, Separate } from '../../moleculas/LastMatch/LastMatch.styles';

export const Result = ({ data, isHeader }) => {
  return (
    <ResultWrapper isHeader={isHeader}>
      <TeamDescription isHeader={isHeader} data={data} />
      <Separate isHeader={isHeader}>-</Separate>
      <TeamDescription isHeader={isHeader} isEnemy data={data} />
    </ResultWrapper>
  );
};
