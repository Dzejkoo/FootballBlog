import styled from 'styled-components';

export const ContainerTopHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Auth = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  position: relative;
  font-size: ${({ theme }) => theme.fontSize.m};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-weight: 300;
  position: relative;
  span {
    display: flex;
    padding: 10px 0;
    flex-direction: row;
    align-items: center;
    color: ${({ theme }) => theme.colors.textColor};
  }
  button {
    background-color: ${({ theme }) => theme.colors.white};
    border: none;
    color: ${({ theme }) => theme.colors.black};
    padding: 8px 15px;
    font-weight: 300;
    margin-left: 10px;
    font-size: ${({ theme }) => theme.fontSize.s};
    cursor: pointer;
    border-radius: 5px;
    transition: 0.3s ease-in-out;
    &:hover {
      background-color: ${({ theme }) => theme.colors.grey};
      color: white;
      transition: 0.3s ease-in-out;
    }
  }
`;

export const Switcher = styled.label`
  width: 50px;
  height: 26px;
  @media screen and (max-width: 820px) {
    width: 45px;
    height: 24px;
  }
  position: relative;
  input {
    opacity: 0;
    width: 0;
    height: 0;
    &:checked + span {
      background-color: #fff;
    }
    &:checked + span::before {
      transform: translateX(22px);
      @media screen and (max-width: 820px) {
        transform: translateX(20px);
      }
    }
  }
  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #383838;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 30px;
    &::before {
      position: absolute;
      content: '';
      height: 21px;
      width: 21px;
      @media screen and (max-width: 820px) {
        width: 19px;
        height: 19px;
        bottom: 2.3px;
      }
      left: 4px;
      bottom: 2.8px;
      border-radius: 50%;
      background-color: #ccc;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }
  }
`;

export const Wrapper = styled.div`
  width: 90%;
  margin: 20px auto;
  position: relative;
`;
