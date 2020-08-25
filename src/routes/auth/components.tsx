import styled, { css } from "styled-components";
import { Input, Checkbox, Card, Layout, Button } from "antd";
import { Link, useHistory } from "react-router-dom";
import React from "react";

const InputStyled = styled(Input)`
  width: 376px;
  height: 48px;
  box-sizing: border-box;
`;

const LabelStyled = styled.label`
  width: 376px;
  color: #343434;
  margin: 10px 0;
`;

const Underline: any = styled.span`
  cursor: pointer;
  text-decoration: underline;
  width: 376px;
  font-weight: 500;
  ${(props: any) =>
      props.forgot &&
      css`
        text-align: end;
      `}
    :hover {
    color: #4a8cf2;
  }
`;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const SolidBox = styled.span`
  width: 56px;
  height: 56px;
  background: #bce0fd;
  opacity: 1;
`;

const TermsWrapper = styled.div`
  width: 376px;
  display: flex;
  margin-top: 20px;
  > p {
    text-align: center;
  }
`;

const Steps = styled.div`
  text-decoration: underline;
`;

const Details = styled.div`
  font-weight: bold;
  padding-bottom: 10px;
  margin: 20px 0;
  min-width: 70%;
  margin-right: 60px;
  border-bottom: 1px solid;
`;

const Box = styled.div`
  width: 550px;
  min-height: 400px;
  background: #ffffff;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  position: relative;
`;

const Text: any = styled.div`
  width: 550px;
  height: 40px;
  text-align: left;
  font-size: 28px;
  letter-spacing: 0;
  color: #2699fb;
  opacity: 1;

  span:${(props: any) => (props.signin ? "first-child" : "last-child")} {
    text-decoration: underline;
    font-weight: bold;
  }
`;

const UserBox = styled.div`
  width: 350px;
  height: 104px;
  background: var(--plain-white);
  border: 1px solid var(--brand-blue);
  opacity: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  padding: 0 20px;
  span {
    font-weight: bold;
  }
`;

const Back = styled.div`
  cursor: pointer;
  position: absolute;
  top: 10px;
  left: 10px;
  font-weight: bold;
`;

const SimpleButton: any = styled(Button)`
  color: var(--plain-white);
  cursor: pointer;
  width: 376px;
  min-height: 43px;
  background: ${props => props.theme.mainColor};
  border-radius: 4px;
  opacity: 1;
  margin: 25px 0;
  font-size: 16px;
  ${({ sso }: { sso: boolean }) =>
    sso &&
    css`
      width: 180px;
      margin-right: 0 !important;
      font-weight: normal;
      display: inline-flex;
      justify-content: space-around;
      color: ${(props: any) => (props.fb ? "#fff;" : "rgba(0, 0, 0, 0.54)")};
      font-size: 12px;
      background-color: ${(props: any) => (props.fb ? "#2a77f2;" : "#fff")};
      padding: 0;
      align-items: center;
      padding: 0 5px;
      &:hover {
        color: ${(props: any) => (props.fb ? "#fff;" : "rgba(0, 0, 0, 0.54)")};
        background-color: ${(props: any) => (props.fb ? "#2a77f2;" : "#fff")};
        border: 1px solid;
      }
    `}
`;

export const Terms = ({ terms, setTerms }) => (
  <TermsWrapper>
    <Checkbox checked={terms} onChange={() => setTerms(!terms)} />
    <p>
      By creating an account, you agree to our <Underline>Terms of Service</Underline> and &nbsp;
      <Underline>Privacy Policy</Underline>
    </p>
  </TermsWrapper>
);

export const ButtonWrapper = styled.div`
  width: 200px;
  display: inline-flex;
  position: absolute;
  padding: 5px;
  background-color: #fff;
  border-radius: 4px;
  top: 5px;
  top: -90px;
  left: 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08);
  &&&& > button {
    border: none;
    margin: 0;
    width: 50%;
    font-size: 16px;
    color: ${(props: any) => (props.active ? "#fff" : " #343434")};
  }
`;

export const Switcher = ({ active }) => (
  <ButtonWrapper>
    <Button>
      <Link to="/auth/signin">Log In</Link>
    </Button>
    <Button>
      <Link to="/auth/signup">Register</Link>
    </Button>
  </ButtonWrapper>
);

export const ItemCards = styled(Card)`
  width: calc(100% - 52px);
  box-shadow: 0 4px 8px 3px rgba(92, 92, 92, 0.04);
  border: solid 1px #fafafa;
  cursor: pointer;
  border-radius: 8px;
  font-weight: 500;

  & > .ant-card-body {
    height: 120px;
    padding: 24px 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    > svg {
      margin-left: auto;
    }
  }
  :hover {
    box-shadow: 0 4px 8px 3px rgba(92, 92, 92, 0.12);
    color: ${props => props.theme.primary};
  }
`;

export const Content = styled(Layout.Content)`
  display: flex;
  position: relative;
  justify-content: center;
  .ant-form-item-label {
    height: 35px;
  }
  .ant-form-item-label > label {
    color: #343434;
    height: 30px;
  }
  p {
    color: #343434;
  }
  .ant-form-item {
    margin-bottom: 10px;
  }
  .ant-btn-primary {
    background-color: #4a8cf2 !important;
  }
`;

export const CardStyled: any = styled(Card)`
  margin-top: ${(props: any) => (props.form ? "70px" : "132px")};
  position: relative;
  border: none;
  border-radius: 8px;
  & > .ant-card-body {
    width: ${(props: any) => (props.form ? "576px" : "676px")};
    min-height: ${(props: any) => (props.form ? "inherit" : "560px")};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const CardHeader = styled.div`
  height: 102px;
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.43px;
  text-align: center;
  color: #343434;
  display: flex;
  -ms-align-items: center;
  align-items: center;
  justify-content: center;
  margin-top: -24px;
`;

export const Cards = ({ heading, customerHandler, supplierHandler, serviceProviderHandler }) => {
  return (
    <>
      <CardHeader>{heading}</CardHeader>
      <ItemCards
        onClick={() => {
          customerHandler();
        }}
      >
        <span>I am Customer</span>
      </ItemCards>
      <ItemCards
        onClick={() => {
          supplierHandler();
        }}
      >
        <span>I am Supplier</span>
      </ItemCards>
      <ItemCards
        onClick={() => {
          serviceProviderHandler();
        }}
      >
        <span>I am Service Provider</span>
      </ItemCards>
    </>
  );
};

export const ProgressButtonWrapper = styled.div`
  display: flex;
  margin: 30px auto;
  justify-content: space-between;
  width: 376px;
  margin-bottom: 40px;
  button {
    width: 185px;
    height: 43px;
    font-size: 16px;
  }
`;

export const ProgressButtons = ({ back, cont, loading }: any) => (
  <ProgressButtonWrapper>
    <Button>Continue</Button>
  </ProgressButtonWrapper>
);

const AlreadyAccount = styled.p`
  text-align: center;
  margin-top: 20px;
`;

export const SignInLink = ({ signin }) => (
  <AlreadyAccount>
    Already have an account?&nbsp;
    <Underline onClick={signin}>Log In Here</Underline>
  </AlreadyAccount>
);

export const FieldWrapper: any = styled.div`
  max-width: 376px;
  ${(props: any) =>
    props.optional &&
    css`
      .ant-form-item-label > label {
        ::after {
          content: " (Optional)";
          opacity: 0.4;
          font-size: 12px;
        }
      }
    `}
  ${(props: any) =>
    props.code &&
    css`
      input {
        letter-spacing: 5px;
      }
    `}
  ${(props: any) =>
    props.account &&
    css`
      margin: 0 auto;
    `}
`;

export const Heading = styled.h2`
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  text-align: center;
  color: #343434;
  margin: 20px 0;
`;

export {
  InputStyled,
  LabelStyled,
  SimpleButton,
  Underline,
  FormStyled,
  TermsWrapper,
  Steps,
  Details,
  Text,
  UserBox,
  SolidBox,
  Back,
  Box,
};
