import styled from 'styled-components';
import AuthBgc from '../assets/images/authBgc/BGC_auth.png';
import ArsenalLogoDesc from '../assets/images/logo/Arsenal-logo-desc.png';

export const Title = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.xxl};
  position: relative;
  width: auto;
  z-index: 1;
  &::before {
    content: '';
    position: absolute;
    background-color: ${({ theme }) => theme.colors.logoRed};
    width: 35%;
    z-index: -1;
    height: 6px;
    bottom: 0;
    right: 0;
  }
`;

export const ForgotPassword = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 15px;
  font-weight: 500;
  a {
    display: block;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.logoRed};
  }
`;

export const ErrorWrapper = styled.div`
  padding: 20px 30px;
  text-align: center;
  background-color: rgba(183, 21, 21, 0.3);
  margin-bottom: 20px;
  border-radius: 8px;
`;

export const WrapperImg = styled.div`
  width: 60%;
  background-image: url(${AuthBgc});
  /* background-size: cover; */
  background-position: top left;
  background-repeat: no-repeat;
  position: relative;
  background-size: 40%;
  /* clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%); */
  @media screen and (max-width: 900px) {
    clip-path: none;
    position: relative;
    background-image: none;
    width: 80%;
  }
  &::after {
    content: '';
    position: absolute;
    background-color: white;
    height: 70px;
    width: 100%;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    z-index: 0;
    @media screen and (max-width: 900px) {
      display: none;
    }
  }

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    width: 250px;
    @media screen and (max-width: 900px) {
      clip-path: none;
      position: relative;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: row;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  background-color: white;
`;

export const WrapperForm = styled.div`
  width: 50%;
  @media screen and (max-width: 900px) {
    height: 80%;
    width: 80%;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ContainerForm = styled.form`
  max-width: 340px;
  width: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    width: 100%;
    background-color: ${({ theme }) => theme.colors.logoRed};
    border: 0;
    padding: 10px;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.l};
    border-radius: 7px;
    margin: 10px 0 20px 0;
    cursor: pointer;
  }
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.black};
    label {
      font-size: ${({ theme }) => theme.fontSize.l};
    }
    input {
      padding: 10px;
      border-radius: 5px;
      border: 1px solid ${({ theme }) => theme.colors.black};
      margin: 8px 0 10px 0;
    }
  }
  div:last-child {
    display: flex;
    justify-content: center;
    flex-direction: row;
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.logoRed};
      padding-left: 10px;
    }
  }
`;
