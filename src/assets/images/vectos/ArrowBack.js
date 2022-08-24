import React from 'react';

import styled from 'styled-components';

export const ArrowBack = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Pathstyled d="M10 12H20" stroke="black" stroke-linecap="round" stroke-linejoin="round" className="arrow-path" />
      <Pathstyled d="M10 12L14 16" stroke="black" stroke-linecap="round" stroke-linejoin="round" className="arrow-path" />
      <Pathstyled d="M10 12L14 8" stroke="black" stroke-linecap="round" stroke-linejoin="round" className="arrow-path" />
      <Pathstyled d="M4 4V20" stroke="black" stroke-linecap="round" stroke-linejoin="round" className="line-path" />
    </svg>
  );
};

export const Pathstyled = styled.path`
  stroke: ${({ theme }) => theme.colors.textColor};
`;
