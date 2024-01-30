import * as yup from "yup";

export const mySchema = yup.object().shape({
  firstName: yup.string().required("Please enter your first name"),
  lastName: yup.string().required("Please enter your last name"),
  email: yup.string().email().required("Please enter your email"),
  phone: yup
    .number()
    .transform((value) => (Number.isNaN(value) ? null : value))
    .positive()
    .integer()
    .required("Please enter your contact number"),
  message: yup.string().max(100).required("your message"),
});
