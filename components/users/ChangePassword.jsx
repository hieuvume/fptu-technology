'use client';

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import authApi from '@/api/authApi';
import { useRouter } from 'next/router';


const ChangePassword = () => {
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

  const onSubmit = async (values, { setSubmitting, setErrors, setStatus }) => {
    try {
      const response = await authApi.changePassword({
        currentPassword: values.oldPassword,
        newPassword: values.newPassword,
      });

      if (response.success) {
        setStatus({ success: 'Đổi mật khẩu thành công!' });
        window.location.href = '/profile';
      } else {
        setErrors({ submit: response.message || 'Có lỗi xảy ra.' });
      }
    } catch (err) {
      setErrors({ submit: err.response?.data?.message || 'Có lỗi xảy ra.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    
    <div className="container mt-5">
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
            {errors.submit && <div className="text-danger mb-3">{errors.submit}</div>}
            {status && status.success && <div className="text-success mb-3">{status.success}</div>}
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              Đổi Mật Khẩu
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ChangePassword;
