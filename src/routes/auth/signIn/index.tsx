import React, { useState } from "react";
import styled from "styled-components";
import { Spin, Icon, Checkbox, Button, Form, Input } from "antd";

import { useDispatch } from "react-redux";
import { useHistory, useLocation, Link } from "react-router-dom";
import AuthActionTypes from "../actions/type/auth";
import useLoading from "../../../redux/hooks/useLoading";
import { getQueryInAddressBar } from "../utils";

import {
  SimpleButton,
  FormStyled,
  Underline,
  Switcher,
  Content,
  CardStyled,
  Cards,
  Heading,
} from "../components";

import { SignInFields } from "../fields";

const CUSTOMER = "CUSTOMER";
const SUPPLIER = "SUPPLIER";
const SERVICEPROVIDER = "SERVICEPROVIDER";

const profileTypes = {
  CUSTOMER: "customer",
  SUPPLIER: "supplier",
  SERVICEPROVIDER: "service-providers",
};

const renderHeading = type => {
  switch (type) {
    case CUSTOMER:
      return "Customer";
    case SUPPLIER:
      return "Supplier";
    case SERVICEPROVIDER:
      return "Service Provider";
    default:
      return "";
  }
};

const LoadingWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Remeber = styled.div`
  width: 376px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  button {
    margin-bottom: 0;
  }
`;

const Wrapper = styled.div`
  width: 376px;
`;

const RegisterLink = styled.div`
  margin-bottom: 6px;
  margin-top: 30px;
`;

const STEPS = ["profile-types", "form"];

const AntForm = ({ form }) => {
  const [step, setStep] = React.useState(0);
  const [type, setType] = React.useState(CUSTOMER);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const isLoading = useLoading();
  const queryParams = getQueryInAddressBar(location);

  React.useEffect(() => {
    if (Object.keys(queryParams).length) {
      switch (queryParams.step) {
        case STEPS[0]:
          setStep(0);
          break;
        case STEPS[1]:
          setStep(1);
          break;
        default:
          setStep(0);
      }
      switch (queryParams.type) {
        case profileTypes.CUSTOMER:
          setType(CUSTOMER);
          break;
        case profileTypes.SUPPLIER:
          setType(SUPPLIER);
          break;
        case profileTypes.SERVICEPROVIDER:
          setType(SERVICEPROVIDER);
          break;
        default:
          break;
      }
    }
  }, [queryParams, location]);

  const { getFieldDecorator, validateFieldsAndScroll } = form;
  const formItemLayout = {
    labelAlign: "right",
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 24,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 24,
      },
    },
  };
  const [isSubmitting, setSubmitting] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    validateFieldsAndScroll((err, values) => {
      if (!err) {
        dispatch({
          type: AuthActionTypes.REQUEST_SIGNIN,
          payload: {
            ...values,
            type,
            history,
            setSubmitting,
          },
        });
        setSubmitting(true);
      }
    });
  };

  return (
    <>
      {isLoading ? (
        <LoadingWrapper>
          <Spin size="large" />
        </LoadingWrapper>
      ) : (
        <>
          <Content>
            <CardStyled form={step > 0}>
              {step === 0 && (
                <>
                  <Switcher active="signin" />
                  <Cards
                    heading="Welcome to E-Build Pakistan!"
                    customerHandler={() => {
                      dispatch({
                        type: AuthActionTypes.AUTH_TEMP_USER_TYPE,
                        payload: "CUSTOMER",
                      });
                      setType(CUSTOMER);
                      history.push("/auth/signin?step=form&type=customer");
                    }}
                    supplierHandler={() => {
                      dispatch({
                        type: AuthActionTypes.AUTH_TEMP_USER_TYPE,
                        payload: "SUPPLIER",
                      });
                      setType(SUPPLIER);
                      history.push("/auth/signin?step=form&type=supplier");
                    }}
                    serviceProviderHandler={() => {
                      dispatch({
                        type: AuthActionTypes.AUTH_TEMP_USER_TYPE,
                        payload: "SERVICEPROVIDER",
                      });
                      setType(SERVICEPROVIDER);
                      history.push("/auth/signin?step=form&type=service-providers");
                    }}
                  />
                </>
              )}
              {step === 1 ? (
                <>
                  <Heading>{renderHeading(type)} - Log In</Heading>
                  <Form
                    {...formItemLayout}
                    labelAlign="left"
                    onSubmit={handleSubmit}
                    colon={false}
                    hideRequiredMark
                  >
                    {SignInFields.map(field => (
                      <Wrapper>
                        <Form.Item label={field.label} labelAlign="left">
                          {getFieldDecorator(field.name, {
                            rules: field.rules,
                            validateTrigger: "onBlur",
                          })(
                            field.type === "password" ? (
                              <Input.Password
                                placeholder={field.placeholder}
                                disabled={isSubmitting}
                              />
                            ) : (
                              <Input placeholder={field.placeholder} disabled={isSubmitting} />
                            )
                          )}
                        </Form.Item>
                      </Wrapper>
                    ))}
                    <Remeber>
                      <div>
                        <Checkbox /> Remember Me
                      </div>
                      <Link to="/auth/forgot-password"> Forgot Password?</Link>
                    </Remeber>
                    <SimpleButton
                      type="primary"
                      htmlType="submit"
                      size="large"
                      disabled={isSubmitting}
                      loading={isSubmitting}
                    >
                      Log In
                    </SimpleButton>
                  </Form>
                  <RegisterLink>
                    Don&apos;t have an account?&nbsp;
                    <Underline
                      onClick={() =>
                        history.push(`/auth/signup?step=form&type=${profileTypes[type]}`)
                      }
                    >
                      Register here
                    </Underline>
                  </RegisterLink>
                </>
              ) : null}
            </CardStyled>
          </Content>
        </>
      )}
    </>
  );
};

const FormAnt: any = Form.create()(AntForm);

export default () => (
  <>
    <FormAnt />
  </>
);
