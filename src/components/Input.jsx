import { useState } from "react";
import { Formik, useFormik } from "formik";
import * as yup from "yup";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Input = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => alert("Submitted"), 3000);
  };
  const navigate = useNavigate();
  const Basicschema = yup.object().shape({
    Email: yup
      .string()
      .email("please enter a valid email")
      .required("required"),
    phone: yup
      .number()
      .min(3, "too short")
      .max(12, "too much")
      .required("required"),
    name: yup.string().required("required"),
  });
  const Formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      Email: "",
    },
    validationSchema: Basicschema,
    onSubmit: (values) => {
      setTimeout(() => {
        navigate("plans");
      }, 3000);
    },
  });
  console.log(Formik);
  // const [error, setError] = useState("");
  return (
    <form onSubmit={Formik.handleSubmit} className="personal-info">
      <div className="input-box">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="e.g Stephen King"
          name="name"
          value={Formik.values.name}
          onChange={Formik.handleChange}
          onBlur={Formik.handleBlur}
          required
          style={{
            border: `1px solid ${
              Formik.errors.name && Formik.touched.name ? "red" : "blue"
            }`,
          }}
        />
        {Formik.errors.name && Formik.touched.name && (
          <p style={{ color: "red" }}>{Formik.errors.name}</p>
        )}
      </div>
      <div className="input-box">
        <label htmlFor="email-address">Email Address</label>
        <input
          type="text"
          placeholder="e.g Stephenking@gmail.com"
          name="Email"
          value={Formik.values.Email}
          onChange={Formik.handleChange}
          onBlur={Formik.handleBlur}
          required
          style={{
            border: `1px solid ${
              Formik.errors.name && Formik.touched.name ? "red" : "blue"
            }`,
          }}
        />
        {Formik.errors.Email && Formik.touched.Email && (
          <p style={{ color: "red" }}>{Formik.errors.Email}</p>
        )}
      </div>
      <div className="input-box">
        <label htmlFor="phone">phone</label>
        <input
          type="text"
          placeholder="e.g +1 234 567 8940"
          name="phone"
          value={Formik.values.phone}
          onChange={Formik.handleChange}
          onBlur={Formik.handleBlur}
          required
          style={{
            border: `1px solid ${
              Formik.errors.name && Formik.touched.name ? "red" : "blue"
            }`,
          }}
        />
        {Formik.errors.phone && Formik.touched.phone && (
          <p style={{ color: "red" }}>{Formik.errors.phone}</p>
        )}
      </div>
      <div className="foot">
        <Button path={"/plans"} back={"null"} />
      </div>
    </form>
  );
};

export default Input;
