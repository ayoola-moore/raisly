import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Message from "./Message";

const SignupForm = () => {
  const [message, setMessage] = useState({
    text: "",
    styleName: "",
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("First name required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Last name required"),
      password: Yup.string()
        .max(50, "Enter a secured password")
        .required("Password required"),
      email: Yup.string()
        .lowercase()
        .email("Enter an email address")
        .notOneOf(["test@test.com"], "Invalid email")
        .required("Email required")
        .test("checkEmail", `Email exist`, function (value) {
          return new Promise((resolve, reject) => {
            axios("https://api.raisely.com/v3/check-user", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              data: JSON.stringify({
                campaignUuid: "46aa3270-d2ee-11ea-a9f0-e9a68ccff42a",
                data: {
                  email: formik.values.email,
                },
              }),
            })
              .then((response) => {
                const isValid =
                  response.data.data.status === "Ok" ? false : true;
                resolve(isValid);
              })
              .catch((e) => {
                console.warn(e);
              });
          });
        }),
    }),
    onSubmit: (values) => {
      axios("https://api.raisely.com/v3/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          campaignUuid: "46aa3270-d2ee-11ea-a9f0-e9a68ccff42a",
          data: values,
        }),
      })
        .then((response) => {
          setMessage({
            ...message,
            text: response.data.message,
            styleName: "success",
          });
        })
        .catch((e) => {
          setMessage({
            ...message,
            text: e.response.data.errors[0].message,
            styleName: "error",
          });
        });
    },
  });

  return (
    <>
      {message.text.length < 1 ? null : (
        <Message txt={message.text} styleProps={message.styleName} />
      )}
      <form onSubmit={formik.handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div>{formik.errors.firstName}</div>
          ) : null}
        </div>

        <div className="input-wrapper">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div>{formik.errors.lastName}</div>
          ) : null}
        </div>

        <div className="input-wrapper">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </div>

        <button type="submit" disabled={!(formik.isValid && formik.dirty)}>
          Submit
        </button>
      </form>
    </>
  );
};

export default SignupForm;
