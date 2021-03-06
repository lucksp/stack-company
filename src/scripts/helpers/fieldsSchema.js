import * as Yup from "yup";

export const NewCompanySchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  revenue: Yup.number().required("Required"),
  phone: Yup.string()
    .min(2, "Too Short!")
    .max(10, "Too Long!")
    .required("Required")
});

export const NewEmployyeSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  company: Yup.string().required("Required")
});
