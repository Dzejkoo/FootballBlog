import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const ViewWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const PositionTitle = styled.h2`
  margin-right: 100%;
  margin-left: 30px;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  background-color: ${({ theme }) => theme.colors.white};
  padding: 7px 15px;
`;
