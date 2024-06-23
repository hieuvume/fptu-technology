"use client";
import authApi from "@/api/authApi";
import { Form, Formik } from "formik";
import { Report } from "notiflix";
import * as Yup from "yup";
import InputField from "../forms/InputField";
import { saveAccessToken } from "@/utils/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import useAuth from "@/provider/AuthProvider";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required").min(6, "Password is too short"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  dateOfBirth: Yup.date().required("Date of birth is required"),
  confirm_password: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const RegisterForm = () => {
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        authApi
          .register(values)
          .then((data) => {
            const { token } = data;
            saveAccessToken(token);
            authApi
              .me()
              .then((data) => {
                const { user } = data;
                login(user);
                router.refresh();
                router.push("/");
              })
              .finally(() => setLoading(false));
          })
          .catch((error) => {
            Report.failure("Register failed", error.message, "OK");
          });
      }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <InputField label="Username" name="username" />
          <InputField label="Password" name="password" type="password" />
          <InputField
            label="Confirm password"
            name="confirm_password"
            type="password"
          />
          <InputField label="Full name" name="fullName" />
          <InputField label="Email" name="email" />
          <InputField label="Date of birth" name="dateOfBirth" type="date" />

          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Loading..." : "Submit"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
