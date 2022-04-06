import styled from 'styled-components';
import bgcImages from '../../../assets/images/bgcCard';

export const LastMatchWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;

export const TeamLogo = styled.img``;

export const Result = styled.div`
  background-image: url(${bgcImages.bgcResults});
  width: 100%;
  height: 150px;
  display: flex;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TeamName = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xl};
  padding: 20px;
`;

export const InfoMatch = styled.div`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 300;
`;

export const ScoredGoal = styled.span`
  font-size: 36px;
`;

export const Separate = styled.span`
  font-size: 34px;
  padding: 0 18px;
`;
export const TeamWrapper = styled.div`
  display: flex;
  align-items: center;
`;
