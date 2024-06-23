"use client";
import authApi from "@/api/authApi";
import useAuth from "@/provider/AuthProvider";
import { saveAccessToken } from "@/utils/auth";
import { Form, Formik } from "formik";
import { Report } from "notiflix";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={(values) => {
        setLoading(true);
        authApi
          .login(values)
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
            Report.failure("Login failed", error.message, "OK");
          })
          .finally(() => setLoading(false));
      }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
              name="username"
              value={values.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Loading..." : "Submit"}
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default LoginForm;
