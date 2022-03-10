import styled from 'styled-components';
import bgcImages from '../../../assets/images/bgcCard';
import Modal from 'react-modal';
Modal.setAppElement('body');

const positionTheme = ({ position }) => {
  if (position === 'Goalkeeper') return bgcImages.bgcGoalkeepers;
  if (position === 'Defender') return bgcImages.bgcDefenders;
  if (position === 'Midfielder') return bgcImages.bgcMidfielders;
  if (position === 'Forward') return bgcImages.bgcForwards;
};

export const StyledModal = styled(Modal)`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 400px;
  box-shadow: 0px 4px 5px 0px rgba(66, 68, 90, 0.3);
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  button {
    position: absolute;
    border: none;
    transform: translate(-60%, -40%);
    background-color: transparent;
    padding: 0;
    top: 0%;
    left: 100%;
    cursor: pointer;
    svg {
      width: 24px;
      height: 24px;
    }
  }
`;
export const WrapperModalCard = styled.div`
  background-image: url(${(position) => positionTheme(position)});
  background-size: cover;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  img {
    width: 100%;
  }
`;

export const WrapperCard = styled.div`
  width: 180px;
  height: 150px;
  margin: 15px 30px;
  background-image: url(${(position) => positionTheme(position)});
  background-size: cover;
  box-shadow: 0px 4px 5px 0px rgba(66, 68, 90, 0.3);
  overflow: hidden;
  position: relative;
  cursor: pointer;
  img {
    width: 100%;
  }
`;

export const ShirtNumber = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-size: 20px;
  position: absolute;
  right: 8%;
  top: 35%;
`;
