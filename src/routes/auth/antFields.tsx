import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Form, Input, Button, Select } from "antd";
import { emailAvailable, phoneAvailable } from "./api";

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const { Option } = Select;

const FormItem: any = Form.Item;

const Wrapper: any = styled.div`
  max-width: 376px;
  ${(props: any) =>
    props.account &&
    css`
      margin: 0 auto;
    `}
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
`;

const handlePhoneValidation = async (rule, value, callback) => {
  const phoneRegex = /^[\d]{10,11}$/;

  if (!value) {
    callback("Please enter the Mobile Number.");
    return false;
  }

  if (!phoneRegex.test(value)) {
    callback("Please enter valid Mobile Number");
    return false;
  }

  if (value[0] === "0" && value.length < 11) {
    return false;
  }
  let res = null;
  try {
    res = await phoneAvailable(value[0] === "0" ? value : `0${value}`);
  } catch (e) {
    callback("Mobile Number is currently not available");
  }
  if (res.status >= 400) {
    callback("Mobile Number is currently not available");
  }
  return true;
};

const handleEmailValidation = async (rule, value, callback) => {
  if (!value) {
    callback("Please enter the Email.");
    return false;
  }

  if (!emailRegex.test(value)) {
    callback("Please enter valid Email");
    return false;
  }

  if (value[0] === "0" && value.length < 11) {
    return false;
  }
  let res = null;
  try {
    res = await emailAvailable(value);
  } catch (e) {
    callback("Email is currently not available");
  }
  if (res.status >= 400) {
    callback("Email is currently not available");
  }
  return true;
};

const PasswordFormItem: any = styled(Form.Item)`
  ${(props: any) =>
    props.showHint &&
    css`
      .ant-form-item-control-wrapper:after {
        margin-top: 5px;
        /*padding: 0 20px;*/
        font-size: 12px;
        opacity: 0.6;
        content: "A password should contain at least one Uppercase letter, one Lowercase letter, one number and it should be min 8 and max 20 characters long.";
      }
    `}
`;

const FlagWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  min-width: 52px;
  margin-top: 4px;
`;

const SkipButton: any = styled(Button)`
  float: right;
  margin: 10px 0;
`;

const phoneField: any = {
  name: "phone",
  label: "Mobile Number",
  placeholder: "301 2345678",
  addonBefore: <FlagWrapper>+92</FlagWrapper>,
  rules: [
    {
      required: true,
      message: "Please enter the Mobile Number.",
    },
    {
      pattern: /^[\d]{10,11}$/,
      message: "Please enter valid Mobile Number",
    },
    {
      validator: (rule, value, callback) => {
        if (value[0] === "0" && value.length < 11) {
          return false;
        }
        callback();
        return true;
      },
      message: "Please enter valid Mobile Number",
    },
  ],
  onKeyPress: (e: any) => {
    if (!isFinite(e.key) || e.target.value.length > (e.target.value[0] === "0" ? 10 : 9)) {
      e.preventDefault();
    }
  },
};

const emailField = {
  label: "Email",
  name: "email",
  type: "text",
  placeholder: "email@example.com",
  rules: [
    {
      required: true,
      message: "Please enter the Email",
    },
    {
      type: "email",
      message: "Please enter the valid Email",
    },
  ],
  onKeyPress: (e: any) => {
    if (e.target.value.length > 253) {
      e.preventDefault();
    }
  },
};

const businessEmailField = {
  label: "Business Email",
  name: "businessEmail",
  type: "text",
  placeholder: "email@example.com",
  rules: [
    {
      required: true,
      message: "Please enter the Business Email",
    },
    {
      type: "email",
      message: "Please enter the valid Email",
    },
  ],
};

const cnicField = {
  name: "cnic",
  label: "CNIC",
  required: true,
  placeholder: "00000-0000000-0",
  rules: [
    {
      required: true,
      message: "Please enter the CNIC",
    },
    {
      pattern: /^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$/,
      message: "Please enter valid CNIC",
    },
  ],
  onKeyPress: e => {
    if (!isFinite(e.key) || e.target.value.length > 14) {
      e.preventDefault();
    }
    if (e.target.value.length === 5 || e.target.value.length === 13) {
      e.target.value = `${e.target.value}-`;
    }
  },
};

const nameField = {
  label: "Full Name",
  name: "name",
  type: "text",
  placeholder: "Enter Full Name",
  rules: [
    {
      required: true,
      message: "Please enter the Name",
    },
  ],
};

export const SocialLoginFields: any = [nameField, emailField, phoneField];

const passwordValidationMessage =
  "A password should contain at least one Uppercase letter, one Lowercase letter, one number and it should be min 8 and max 20 characters long";
export const passwordFields = (formType, form, dirty, reset = false) => [
  {
    name: "password",
    required: true,
    type: "password",
    placeholder: "••••••••",
    label: reset ? "New Password" : "Password",
    rules:
      formType === "add"
        ? [
            {
              required: true,
              message: "Please enter the Password",
            },
            {
              pattern: /^(^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$)?(^(?=.*\d)(?=.*[a-z])(?=.*[@#$%^&+=]).{8,20}$)?(^(?=.*\d)(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,20}$)?(^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,20}$)?$/,
              message: passwordValidationMessage,
            },
            {
              validator: (rule, value, callback) => {
                if (value && dirty) {
                  form.validateFields(["passwordConfirmation"], {
                    force: true,
                  });
                }
                callback();
              },
            },
          ]
        : [],
  },
  {
    name: "passwordConfirmation",
    required: true,
    type: "password",
    placeholder: "••••••••",
    label: reset ? "Confirm New Password" : "Confirm Password",
    rules:
      formType === "add"
        ? [
            {
              required: true,
              message: "Please Confirm the Password.",
            },
            {
              validator: (rule, value, callback) => {
                if (value && value !== form.getFieldValue("password")) {
                  callback("Two passwords that you enter is inconsistent!");
                } else {
                  callback();
                }
              },
            },
          ]
        : [],
  },
];

export const CnicField: any = ({
  getFieldDecorator,
  disabled,
  setFields,
  account = false,
  CompWrapper = Wrapper,
}: any) => {
  return (
    <CompWrapper>
      <Form.Item label="CNIC" labelAlign="left">
        {getFieldDecorator("cnic", {
          rules: [
            {
              required: true,
              message: "Please enter the CNIC",
            },
            {
              pattern: /^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$/,
              message: "Please enter valid CNIC",
            },
          ],
          validateTrigger: "onBlur",
        })(
          <Input
            type="text"
            disabled={disabled}
            placeholder="00000-0000000-0"
            maxLength={100}
            onFocus={e => {
              setFields({
                cnic: {
                  value: e.target.value,
                  errors: null,
                },
              });
            }}
            onKeyPress={(e: any) => {
              if (!isFinite(e.key) || e.target.value.length > 14) {
                e.preventDefault();
              }
              if (e.target.value.length === 5 || e.target.value.length === 13) {
                e.target.value = `${e.target.value}-`;
              }
            }}
          />
        )}
      </Form.Item>
    </CompWrapper>
  );
};

export const NameRender: any = ({
  getFieldDecorator,
  disabled,
  setFields,
  account = false,
  CompWrapper = Wrapper,
}: any) => {
  return (
    <CompWrapper>
      <Form.Item label="Full Name" labelAlign="left">
        {getFieldDecorator("name", {
          rules: [
            {
              required: true,
              message: "Please enter the  Name",
            },
            {
              pattern: /^[a-zA-Z0-9_ ]*$/,
              message: " Special characters are not allowed !",
            },
          ],
          validateTrigger: "onBlur",
        })(
          <Input
            type="text"
            disabled={disabled}
            placeholder="Enter Name"
            maxLength={100}
            onFocus={e => {
              setFields({
                name: {
                  value: e.target.value,
                  errors: null,
                },
              });
            }}
          />
        )}
      </Form.Item>
    </CompWrapper>
  );
};

export const MonthlySalesField: any = ({
  getFieldDecorator,
  disabled,
  setFields,
  account = false,
  CompWrapper = Wrapper,
}: any) => {
  return (
    <CompWrapper optional>
      <Form.Item label="Monthly Sales" labelAlign="left">
        {getFieldDecorator("monthlySales", {
          validateTrigger: "onBlur",
        })(
          <Input
            type="number"
            disabled={disabled}
            placeholder="Enter monthly sales"
            maxLength={8}
            addonAfter="PKR"
            onFocus={e => {
              setFields({
                monthlySales: {
                  value: e.target.value,
                  errors: null,
                },
              });
            }}
          />
        )}
      </Form.Item>
    </CompWrapper>
  );
};

export const ContactPersonField: any = ({
  getFieldDecorator,
  disabled,
  setFields,
  account = false,
  CompWrapper = Wrapper,
}: any) => {
  return (
    <CompWrapper>
      <Form.Item label="Contact Person Name" labelAlign="left">
        {getFieldDecorator("contactPersonName", {
          rules: [
            {
              required: true,
              message: "lease enter the Contact Person Name",
            },
          ],
          validateTrigger: "onBlur",
        })(
          <Input
            type="text"
            disabled={disabled}
            placeholder="John Doe"
            maxLength={60}
            onFocus={e => {
              setFields({
                contactPersonName: {
                  value: e.target.value,
                  errors: null,
                },
              });
            }}
          />
        )}
      </Form.Item>
    </CompWrapper>
  );
};

export const NoOfEmployeeField: any = ({
  getFieldDecorator,
  disabled,
  setFields,
  account = false,
  CompWrapper = Wrapper,
}: any) => {
  return (
    <CompWrapper optional>
      <Form.Item label="No. of Employees" labelAlign="left">
        {getFieldDecorator("noOfEmployees", {
          initialValue: "",
          validateTrigger: "onBlur",
        })(
          <Select
            style={{
              width: "100%",
            }}
            placeholder="Select No. of employees"
            getPopupContainer={(trigger: any) => trigger.parentNode}
          >
            <Option value="">----Please Select----</Option>
            {["1-25", "25-50", "50-75", "75-100", "100-150", "150-200"].map((key: any) => (
              <Option value={key} key={key}>
                {key}
              </Option>
            ))}
          </Select>
        )}
      </Form.Item>
    </CompWrapper>
  );
};

export const CustomerFields: any = [nameField, phoneField, emailField];

export const BusinessOnlyFields = [
  {
    name: "businessName",
    label: "Business Name",
    required: true,
    placeholder: "Enter Business Name",
    rules: [
      {
        required: true,
        message: "Please enter the Business Name",
      },
    ],
    onKeyPress: e => {
      if (e.target.value.length > 99) {
        e.preventDefault();
      }
    },
  },
  businessEmailField,
  {
    ...phoneField,
    label: "Business Mobile Number",
    name: "businessPhone",
  },
];

const BusinessFields: any = [
  nameField,
  emailField,
  phoneField,
  {
    name: "contactPersonName",
    label: "Contact Person Name",
    required: true,
    placeholder: "John Doe",
    rules: [
      {
        required: true,
        message: "Please enter the Contact Person Name",
      },
    ],
    onKeyPress: e => {
      if (e.target.value.length > 59) {
        e.preventDefault();
      }
    },
  },
  {
    name: "noOfEmployees",
    label: "No. of Employees",
    placeholder: "Select No. of employees",
    type: "select",
    options: ["1-25", "25-50", "50-75", "75-100", "100-150", "150-200"],
    optional: true,
  },
];

export const SupplierFields: any = [
  /* Supplier only fields */
  ...BusinessFields,
  {
    name: "monthlySales",
    label: "Monthly Sales",
    placeholder: "Enter monthly sales",
    type: "number",
    addonAfter: "PKR",
    optional: true,
    onKeyPress: e => {
      if (!isFinite(e.key) || e.target.value.length > 8) {
        e.preventDefault();
      }
    },
  },
  cnicField,
];

export const WebsiteField: any = ({
  getFieldDecorator,
  disabled,
  setFields,
  account = false,
  CompWrapper = Wrapper,
}: any) => {
  return (
    <CompWrapper optional>
      <Form.Item label="Website" labelAlign="left">
        {getFieldDecorator("website", {
          validateTrigger: "onBlur",
          rules: [
            {
              pattern: /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9-_]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/,
              message: "Please Enter valid Website Url",
            },
          ],
        })(
          <Input
            type="text"
            disabled={disabled}
            placeholder="www.example.com"
            maxLength={100}
            onFocus={e => {
              setFields({
                website: {
                  value: e.target.value,
                  errors: null,
                },
              });
            }}
          />
        )}
      </Form.Item>
    </CompWrapper>
  );
};

export const YearlyTurnOverField: any = ({
  getFieldDecorator,
  disabled,
  setFields,
  account = false,
  CompWrapper = Wrapper,
}: any) => {
  return (
    <CompWrapper optional>
      <Form.Item label="Yearly Turn Over" labelAlign="left">
        {getFieldDecorator("yearlyTurnOver", {
          validateTrigger: "onBlur",
        })(
          <Input
            type="number"
            disabled={disabled}
            placeholder="Enter yearly turn over"
            maxLength={8}
            addonAfter="PKR"
            onFocus={e => {
              setFields({
                yearlyTurnOver: {
                  value: e.target.value,
                  errors: null,
                },
              });
            }}
          />
        )}
      </Form.Item>
    </CompWrapper>
  );
};

export const CompanyProfileField: any = ({
  getFieldDecorator,
  disabled,
  setFields,
  account = false,
  CompWrapper = Wrapper,
}: any) => {
  return (
    <CompWrapper optional>
      <Form.Item label="Company Profile" labelAlign="left">
        {getFieldDecorator("companyProfile", {
          validateTrigger: "onBlur",
        })(
          <Input
            type="text"
            disabled={disabled}
            placeholder="Describe Company Profile"
            maxLength={10}
            onFocus={e => {
              setFields({
                name: {
                  value: e.target.value,
                  errors: null,
                },
              });
            }}
          />
        )}
      </Form.Item>
    </CompWrapper>
  );
};

export const ISOField: any = ({
  getFieldDecorator,
  disabled,
  setFields,
  account = false,
  CompWrapper = Wrapper,
}: any) => {
  return (
    <CompWrapper optional>
      <Form.Item label="ISO Certification" labelAlign="left">
        {getFieldDecorator("isoCertification", {
          validateTrigger: "onBlur",
        })(
          <Input
            type="text"
            disabled={disabled}
            placeholder="0000 0000"
            addonBefore="ISO"
            maxLength={10}
            onFocus={e => {
              setFields({
                isoCertification: {
                  value: e.target.value,
                  errors: null,
                },
              });
            }}
            onKeyPress={(e: any) => {
              if (!isFinite(parseInt(e.key, 10)) || e.target.value.length > 8) {
                e.preventDefault();
              }
              if (e.target.value.length === 4) {
                e.target.value = `${e.target.value} `;
              }
            }}
          />
        )}
      </Form.Item>
    </CompWrapper>
  );
};

export const ServiceProviderFields: any = [
  ...BusinessFields,
  {
    name: "website",
    label: "Website",
    placeholder: "www.example.com",
    optional: true,
    rules: [
      {
        pattern: /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9-_]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/,
        message: "Please Enter valid Website Url",
      },
    ],
  },
  {
    name: "yearlyTurnOver",
    label: "Yearly Turn Over",
    placeholder: "Yearly Turn Over",
    type: "number",
    addonAfter: "PKR",
    optional: true,
    onKeyPress: e => {
      if (!isFinite(e.key) || e.target.value.length > 8) {
        e.preventDefault();
      }
    },
  },
  {
    name: "isoCertification",
    label: "ISO Certification",
    placeholder: "0000 0000",
    addonBefore: "ISO",
    optional: true,
    onKeyPress: e => {
      if (!isFinite(e.key) || e.target.value.length > 8) {
        e.preventDefault();
      }
      if (e.target.value.length === 4) {
        e.target.value = `${e.target.value} `;
      }
    },
  },
  {
    name: "companyProfile",
    label: "Company Profile",
    placeholder: "Describe Company Profile",
    optional: true,
  },
];

export const BankFields = [
  {
    name: "bankName",
    label: "Bank Name",
    required: true,
    placeholder: "Enter Bank Name",
    rules: [
      {
        required: true,
        message: "Please enter the Bank Name",
      },
      {
        pattern: /^[a-zA-Z_ ]*$/,
        message: " Special characters and numbers are not allowed !",
      },
    ],
    onKeyPress: (e: any) => {
      if (e.target.value.length > 60) {
        e.preventDefault();
      }
    },
    maxLength: 60,
  },
  {
    name: "accountTitle",
    label: "Account Title",
    required: true,
    placeholder: "Enter Account title",
    rules: [
      {
        required: true,
        message: "Please enter the Account Title",
      },
      {
        pattern: /^[a-zA-Z_ ]*$/,
        message: " Special characters and numbers are not allowed !",
      },
    ],
    maxLength: 50,
    onKeyPress: (e: any) => {
      if (e.target.value.length > 50) {
        e.preventDefault();
      }
    },
  },
  {
    name: "accountNumber",
    label: "IBAN/Account Number",
    required: true,
    placeholder: "PKKK BBBB CCCC CCCC CCCC CCCC",
    rules: [
      {
        required: true,
        message: "Please enter the Account Number",
      },
      {
        pattern: /^[a-zA-Z0-9_ ]*$/,
        message: " Special characters are not allowed !",
      },
    ],
    onKeyPress: (e: any) => {
      if (e.target.value.length > 25) {
        e.preventDefault();
      }
    },
    maxLength: 60,
  },
];

export const BankFieldRender: any = ({
  getFieldDecorator,
  setFields,
  isSubmitting,
  setSkipBank,
}: any) => {
  return (
    <>
      {BankFields.map((field: any) => (
        <Wrapper key={field.name}>
          <Form.Item label={field.label} labelAlign="left">
            {getFieldDecorator(field.name, {
              rules: field.rules,
              validateTrigger: "onBlur",
            })(
              <Input
                type={field.type || "text"}
                disabled={isSubmitting}
                placeholder={field.placeholder}
                onKeyPress={field.onKeyPress ? field.onKeyPress : () => {}}
                onFocus={e => {
                  setFields({
                    [field.name]: {
                      value: e.target.value,
                      errors: null,
                    },
                  });
                }}
                maxLength={field.maxLength || undefined}
              />
            )}
          </Form.Item>
        </Wrapper>
      ))}
      <SkipButton
        htmlType="submit"
        type="link"
        onClick={() => {
          setSkipBank(true);
        }}
      >
        Skip
      </SkipButton>
    </>
  );
};

export const PasswordFields: any = ({
  form,
  getFieldDecorator,
  disabled,
  setFields,
  reset = false,
  account = false,
  CompWrapper = Wrapper,
  labelAlign = "left",
  admin = false,
}) => {
  const [dirty, setDirty] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  return (
    <>
      <CompWrapper account={account}>
        <PasswordFormItem
          label={reset ? "New Password" : "Password"}
          labelAlign={labelAlign}
          showHint={passwordFocus}
          account={account}
        >
          {getFieldDecorator("password", {
            initialValue: "",
            rules: [
              {
                required: !admin,
                message: "Please enter the Password",
              },
              {
                pattern: /^(^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$)?(^(?=.*\d)(?=.*[a-z])(?=.*[@#$%^&+=]).{8,20}$)?(^(?=.*\d)(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,20}$)?(^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,20}$)?$/,
                message: passwordValidationMessage,
              },
              {
                validator: (rule, value, callback) => {
                  if (value && dirty) {
                    form.validateFields(["passwordConfirmation"], {
                      force: true,
                    });
                  }
                  callback();
                },
              },
            ],
            validateTrigger: "onBlur",
          })(
            <Input.Password
              placeholder="••••••••"
              disabled={disabled}
              onFocus={e => {
                setPasswordFocus(true);
                setFields({
                  password: {
                    value: e.target.value,
                    errors: null,
                  },
                });
              }}
              onBlur={e => {
                setPasswordFocus(false);
              }}
            />
          )}
        </PasswordFormItem>
      </CompWrapper>
      <CompWrapper account={account}>
        <PasswordFormItem
          label={reset ? "Confirm New Password" : "Confirm Password"}
          labelAlign={labelAlign}
        >
          {getFieldDecorator("passwordConfirmation", {
            initialValue: "",
            rules: [
              {
                required: !admin,
                message: "Please Confirm the Password.",
              },
              {
                validator: (rule, value, callback) => {
                  if (value && value !== form.getFieldValue("password")) {
                    callback("Two passwords that you enter is inconsistent!");
                  } else {
                    callback();
                  }
                },
              },
            ],
            validateTrigger: "onBlur",
          })(
            <Input.Password
              placeholder="••••••••"
              disabled={disabled}
              onFocus={e => {
                setFields({
                  passwordConfirmation: {
                    value: e.target.value,
                    errors: null,
                  },
                });
              }}
              onBlur={e => {
                const { value } = e.target;
                setDirty(dirty || !!value);
              }}
            />
          )}
        </PasswordFormItem>
      </CompWrapper>
    </>
  );
};

export const PhoneRender = ({
  getFieldDecorator,
  disabled,
  setFields,
  account = false,
  CompWrapper = Wrapper,
}) => {
  return (
    <CompWrapper>
      <Form.Item label="Mobile Number" labelAlign="left">
        {getFieldDecorator("phone", {
          rules: [
            {
              validator: handlePhoneValidation,
            },
          ],
          validateTrigger: "onBlur",
        })(
          <Input
            type="text"
            disabled={disabled}
            placeholder="301 2345678"
            maxLength={11}
            addonBefore={<FlagWrapper>+92</FlagWrapper>}
            onKeyPress={(e: any) => {
              if (
                !isFinite(e.key) ||
                e.target.value.length > (e.target.value[0] === "0" ? 10 : 9)
              ) {
                e.preventDefault();
              }
            }}
          />
        )}
      </Form.Item>
    </CompWrapper>
  );
};

export const EmailRender = ({
  getFieldDecorator,
  disabled,
  setFields,
  account = false,
  CompWrapper = Wrapper,
}) => {
  return (
    <CompWrapper>
      <Form.Item label="Email" labelAlign="left">
        {getFieldDecorator("email", {
          rules: [
            {
              validator: handleEmailValidation,
            },
          ],
          validateTrigger: "onBlur",
        })(
          <Input
            type="text"
            disabled={disabled}
            placeholder="email@example.com"
            onKeyPress={(e: any) => {
              if (e.target.value.length > 253) {
                e.preventDefault();
              }
            }}
          />
        )}
      </Form.Item>
    </CompWrapper>
  );
};

export const BusinessNameField = ({
  getFieldDecorator,
  disabled,
  setFields,
  account = false,
  CompWrapper = Wrapper,
  align = "left",
}) => (
  <CompWrapper account={account}>
    <FormItem label="Business Name" labelAlign={align}>
      {getFieldDecorator("businessName", {
        rules: [
          {
            required: true,
            message: "Please enter the Business Name",
          },
          {
            pattern: /^[a-zA-Z0-9_ ]*$/,
            message: " Special characters are not allowed !",
          },
        ],
        validateTrigger: "onBlur",
      })(
        <Input
          type="text"
          disabled={disabled}
          placeholder="Enter Business Name"
          maxLength={100}
          // onFocus={e => {
          //   setFields({
          //     businessName: {
          //       value: e.target.value,
          //       errors: null,
          //     },
          //   });
          // }}
        />
      )}
    </FormItem>
  </CompWrapper>
);
export const BusinessEmailField = ({
  getFieldDecorator,
  disabled,
  setFields,
  account = false,
  CompWrapper = Wrapper,
  align = "left",
}) => (
  <CompWrapper account={account}>
    <FormItem label="Business Email" labelAlign={align}>
      {getFieldDecorator("businessEmail", {
        rules: [
          {
            required: true,
            message: "Please enter the Email",
          },
          {
            type: "email",
            message: "Please enter the valid Email",
          },
        ],
        validateTrigger: "onBlur",
      })(
        <Input
          type="text"
          disabled={disabled}
          placeholder="email@example.com"
          maxLength={100}
          onKeyPress={(e: any) => {
            if (e.target.value.length > 253) {
              e.preventDefault();
            }
          }}
          // onFocus={e => {
          //   setFields({
          //     businessEmail: {
          //       value: e.target.value,
          //       errors: null,
          //     },
          //   });
          // }}
        />
      )}
    </FormItem>
  </CompWrapper>
);
export const BusinessPhoneField = ({
  getFieldDecorator,
  disabled,
  setFields,
  account = false,
  CompWrapper = Wrapper,
  align = "left",
}) => (
  <CompWrapper account={account}>
    <FormItem label="Business Mobile Number" labelAlign={align}>
      {getFieldDecorator("businessPhone", {
        rules: [
          {
            required: true,
            message: null,
          },
          {
            validator: handlePhoneValidation,
          },
        ],
        validateTrigger: "onBlur",
      })(
        <Input
          type="text"
          disabled={disabled}
          placeholder="301 2345678"
          maxLength={11}
          addonBefore={<FlagWrapper>+92</FlagWrapper>}
          onKeyPress={(e: any) => {
            if (!isFinite(e.key) || e.target.value.length > (e.target.value[0] === "0" ? 10 : 9)) {
              e.preventDefault();
            }
          }}
        />
      )}
    </FormItem>
  </CompWrapper>
);

export const BusinessFieldsRender: any = ({
  getFieldDecorator,
  disabled,
  setFields,
  account = false,
  CompWrapper = Wrapper,
}: any) => {
  return (
    <>
      <CompWrapper label="Business Name" labelAlign="left">
        <Form.Item label="Business Name" labelAlign="left">
          {getFieldDecorator("businessName", {
            initialValue: "",
            rules: [
              {
                required: true,
                message: "Please enter the Business Name",
              },
              {
                pattern: /^[a-zA-Z0-9_ ]*$/,
                message: " Special characters are not allowed !",
              },
            ],
            validateTrigger: "onBlur",
          })(
            <Input
              type="text"
              disabled={disabled}
              placeholder="Enter Business Name"
              maxLength={100}
              onFocus={e => {
                setFields({
                  businessName: {
                    value: e.target.value,
                    errors: null,
                  },
                });
              }}
            />
          )}
        </Form.Item>
      </CompWrapper>

      <CompWrapper>
        <Form.Item label="Business Email" labelAlign="left">
          {getFieldDecorator("businessEmail", {
            initialValue: "",
            rules: [
              {
                required: true,
                message: "Please enter the Email",
              },
              {
                type: "email",
                message: "Please enter the valid Email",
              },
            ],
            validateTrigger: "onBlur",
          })(
            <Input
              type="text"
              disabled={disabled}
              placeholder="email@example.com"
              maxLength={100}
              onKeyPress={(e: any) => {
                if (e.target.value.length > 253) {
                  e.preventDefault();
                }
              }}
              onFocus={e => {
                setFields({
                  businessPhone: {
                    value: e.target.value,
                    errors: null,
                  },
                });
              }}
            />
          )}
        </Form.Item>
      </CompWrapper>
      <CompWrapper>
        <Form.Item label="Business Mobile Number" labelAlign="left">
          {getFieldDecorator("businessPhone", {
            initialValue: "",
            rules: [
              {
                required: true,
                message: "Please enter the Mobile Number.",
              },
              {
                pattern: /^[\d]{10,11}$/,
                message: "Please enter valid Mobile Number",
              },
              {
                validator: (rule, value, callback) => {
                  if (value[0] === "0" && value.length < 11) {
                    callback("Please enter valid Mobile Number");
                    return false;
                  }
                  callback();
                  return true;
                },
                message: "Please enter valid Mobile Number",
              },
            ],
            validateTrigger: "onBlur",
          })(
            <Input
              type="text"
              disabled={disabled}
              placeholder="301 2345678"
              maxLength={11}
              addonBefore={<FlagWrapper>+92</FlagWrapper>}
              onKeyPress={(e: any) => {
                if (
                  !isFinite(e.key) ||
                  e.target.value.length > (e.target.value[0] === "0" ? 10 : 9)
                ) {
                  e.preventDefault();
                }
              }}
            />
          )}
        </Form.Item>
      </CompWrapper>
    </>
  );
};
