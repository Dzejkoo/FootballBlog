import react from 'react';
import styled from 'styled-components';

const ProfileInfo = styled.div`
  padding: 20px;
  dl {
    display: flex;
    padding: 8px 0px;
    margin: 0;
    color: ${({ theme }) => theme.colors.black};
    /* float: right; */
    &:nth-child(1) {
      padding: 0 0 8px 0;
    }
    dt {
      width: 40%;
      font-weight: 600;
      font-size: ${({ theme }) => theme.fontSize.ml};
    }
    dd {
      margin-left: auto;
      width: 60%;
      font-weight: 300;
      font-size: ${({ theme }) => theme.fontSize.ml};
    }
  }
`;
export const WrapperProfileCard = ({ position, numberShirt, born, citizenship, debut }) => {
  return (
    <ProfileInfo>
      <dl>
        <dt>Position:</dt>
        <dd>{position}</dd>
      </dl>
      <dl>
        <dt>Squad number:</dt>
        <dd>{numberShirt}</dd>
      </dl>
      <dl>
        <dt>Born:</dt>
        <dd>{born}</dd>
      </dl>
      <dl>
        <dt>National team:</dt>
        <dd>{citizenship}</dd>
      </dl>
      {debut ? (
        <dl>
          <dt>Debut:</dt>
          <dd>{debut}</dd>
        </dl>
      ) : null}
    </ProfileInfo>
  );
};
