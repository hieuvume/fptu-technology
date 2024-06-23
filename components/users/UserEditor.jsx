"use client";
import { Form, Formik } from "formik";
import InputField from "../forms/InputField";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  dateOfBirth: Yup.date().required("Date of birth is required"),
  role: Yup.string().required("Role is required"),
});

const UserEditor = ({ user, onSubmit }) => {
  return (
    <div className="card my-3">
      <div className="card-body">
        <Formik
          validationSchema={validationSchema}
          initialValues={{
            username: user?.username || "",
            fullName: user?.fullName || "",
            email: user?.email || "",
            dateOfBirth: user?.dateOfBirth
              ? new Date(user?.dateOfBirth)?.toLocaleDateString("vi-vn")
              : "",
            role: user?.role || "",
          }}
          onSubmit={onSubmit}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <InputField label="Username" name="username" />
              <InputField label="Full name" name="fullName" />
              <InputField label="Email" name="email" />
              <InputField
                label="Date of birth"
                name="dateOfBirth"
                type={user?.dateOfBirth ? "text" : "date"}
              />
              <InputField label="Role" name="role" />
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default UserEditor;
