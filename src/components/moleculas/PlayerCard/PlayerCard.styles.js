import styled from 'styled-components';
import bgcImages from '../../../assets/images/bgcCard';

const positionTheme = ({ position }) => {
  if (position === 'Goalkeeper') return bgcImages.bgcGoalkeepers;
  if (position === 'Defender') return bgcImages.bgcDefenders;
  if (position === 'Midfielder') return bgcImages.bgcMidfielders;
  if (position === 'Forward') return bgcImages.bgcForwards;
};

export const WrapperCard = styled.div`
  width: 180px;
  height: 150px;
  margin: 15px 30px;
  background-image: url(${(position) => positionTheme(position)});
  background-size: cover;
  overflow: hidden;
  img {
    width: 100%;
  }
`;
