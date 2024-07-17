import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ChangePassword = ({ onSubmit }) => {
  const initialValues = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    oldPassword: Yup.string().required('Vui lòng nhập mật khẩu cũ.'),
    newPassword: Yup.string()
      .min(6, 'Mật khẩu phải có ít nhất 6 ký tự.')
      .required('Vui lòng nhập mật khẩu mới.'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('newPassword'), null], 'Xác nhận mật khẩu không khớp.')
      .required('Vui lòng xác nhận mật khẩu mới.'),
  });

  return (
    <div className="container my-5">
      <h2 className="mb-4">Đổi Mật Khẩu</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, status, errors }) => (
          <Form>
            <div className="mb-3">
              <label htmlFor="oldPassword" className="form-label">Mật khẩu cũ:</label>
              <Field
                type="password"
                name="oldPassword"
                id="oldPassword"
                className={`form-control ${errors.oldPassword ? 'is-invalid' : ''}`}
              />
              <ErrorMessage name="oldPassword" component="div" className="invalid-feedback" />
            </div>
            <div className="mb-3">
              <label htmlFor="newPassword" className="form-label">Mật khẩu mới:</label>
              <Field
                type="password"
                name="newPassword"
                id="newPassword"
                className={`form-control ${errors.newPassword ? 'is-invalid' : ''}`}
              />
              <ErrorMessage name="newPassword" component="div" className="invalid-feedback" />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Xác nhận mật khẩu mới:</label>
              <Field
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
              />
              <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
            </div>
            {errors.submit && (
              <div className="alert alert-danger" role="alert">
                {errors.submit}
              </div>
            )}
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              Đổi Mật Khẩu
            </button>
            {status && status.success && (
              <div className="alert alert-success mt-3" role="alert">
                {status.success}
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ChangePassword;
