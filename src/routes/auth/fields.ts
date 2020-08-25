export const CustomerFields: any = [
  {
    label: "Full Name",
    name: "name",
    type: "text",
    placeholder: "Enter Full Name",
    required: true,
  },
  {
    label: "Email",
    name: "email",
    type: "text",
    placeholder: "Enter Email",
    required: true,
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    placeholder: "Enter Password",
    required: true,
  },
  {
    label: "Confirm Password",
    name: "passwordConfirmation",
    type: "password",
    placeholder: "Confirm Password",
    required: true,
  },
  {
    name: "phone",
    required: true,
    label: "Phone",
    placeholder: "Phone Number",
  },
];

export const SocialLoginFields: any = [
  {
    label: "Full Nname",
    name: "name",
    type: "text",
    placeholder: "Enter Full Name",
    required: true,
  },
  {
    label: "Email",
    name: "email",
    type: "text",
    placeholder: "Enter Email",
    required: true,
  },
  {
    name: "phone",
    required: true,
    label: "Phone",
    placeholder: "Phone Number",
  },
];

export const BankFields = [
  {
    name: "bankName",
    label: "Bank Name",
    required: true,
    placeholder: "Enter Bank Name",
  },
  {
    name: "accountTitle",
    label: "Account Title",
    required: true,
    placeholder: "Enter Account title",
  },
  {
    name: "accountNumber",
    label: "Account Number",
    required: true,
    placeholder: "PKKK BBBB CCCC CCCC CCCC CCCC",
  },
];

const BusinessFields = [
  {
    name: "businessName",
    label: "Business Name",
    required: true,
    placeholder: "Enter Business Name",
  },
  {
    name: "contactPersonName",
    label: "Contact Person",
    required: true,
    placeholder: "Enter Contact Person Name",
  },
  {
    name: "cnic",
    label: "CNIC",
    required: true,
    placeholder: "XXXX-XXXXXXX-X",
  },
  {
    name: "phone",
    required: true,
    label: "Phone",
    placeholder: "Phone Number",
  },
  {
    name: "monthlySales",
    label: "Monthly Sales",
    placeholder: "Enter monthly sales",
  },
  {
    name: "email",
    required: true,
    label: "Email",
    placeholder: "Enter Email",
  },
  {
    name: "noOfEmployees",
    label: "No of Employees",
    placeholder: "Enter no. of employees",
  },
  {
    name: "password",
    required: true,
    type: "password",
    placeholder: "Password",
    label: "Password",
  },
  {
    name: "passwordConfirmation",
    required: true,
    type: "password",
    placeholder: "Confirm Password",
    label: "Confirm Password",
  },
];

export const SupplierFields = [
  /* Supplier only fields */
  ...BusinessFields,
  ...BankFields,
];

export const ServiceProviderFields = [
  /* Supplier only fields */
  ...BusinessFields,
  {
    name: "categories",
    render: true,
  },
  {
    name: "website",
    label: "Website",
    placeholder: "Enter Website",
  },
  {
    name: "yearlyTurnOver",
    label: "Yearly Turn Over",
    placeholder: "Yearly Turn Over",
  },
  {
    name: "isoCertification",
    label: "ISO Certification",
    placeholder: "ISO Certification",
  },
  /* Supplier only fields */
  // ...BankFields,
];

export const SignInFields = [
  {
    name: "username",
    type: "text",
    placeholder: "email@example.com or 03012345679",
    label: "Email or Mobile Number",
    required: true,
    rules: [
      {
        required: true,
        message: "Please enter registered Email or Mobile Number.",
      },
      {
        validator: (rule, value, callback) => {
          if (!value) {
            callback();
            return true;
          }

          const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          const phoneRegex = /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/;
          if (emailRegex.test(value) || phoneRegex.test(value)) {
            return true;
          }
          return false;
        },
        message: "Please enter valid Email or Mobile Number",
      },
    ],
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    placeholder: "••••••••",
    required: true,
    rules: [
      {
        required: true,
        message: "Please enter Password.",
      },
    ],
  },
];

export const EmailVerificationFields: any = [
  {
    label: "Email",
    name: "email",
    type: "text",
    placeholder: "Enter Email",
    required: true,
    disabled: true,
  },
  {
    label: "Verification Code",
    name: "email_verfication_code",
    type: "text",
    placeholder: "000000",
    required: true,
    rules: [
      {
        required: true,
        message: "Please enter the Verification Code",
      },
    ],
  },
];

export const PhoneVerificationFields: any = [
  {
    name: "phone",
    required: true,
    label: "Mobile Number",
    placeholder: "Mobile Number",
    disabled: true,
  },
  {
    label: "Verification Code",
    name: "phone_verfication_code",
    type: "text",
    placeholder: "000000",
    required: true,
    rules: [
      {
        required: true,
        message: "Please enter the Verification Code",
      },
    ],
  },
];
