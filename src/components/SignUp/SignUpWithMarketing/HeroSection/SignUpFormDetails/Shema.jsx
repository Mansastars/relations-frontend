import * as yup from "yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email")
    .required("Please enter your email.")
    .max(255, "Email must be less than 255 characters"),
  first_name: yup
    .string()
    .required("Please enter your first name.")
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be less than 50 characters"),
  last_name: yup
    .string()
    .required("Please enter your last name.")
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must be less than 50 characters"),
  password: yup
    .string()
    .required("Please enter your password.")
    .min(8, "Password must be at least 8 characters long."),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password."),
  referral_code: yup.string(),
  acceptTerms: yup
    .bool()
    .oneOf([true], "You must accept the terms and conditions.")
    .required("You must accept the terms and conditions."),
});

export default schema;
