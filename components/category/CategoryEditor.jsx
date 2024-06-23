"use client";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import InputField from "../forms/InputField";

const validationSchema = Yup.object().shape({
  categoryName: Yup.string().required("Category name is required"),
  description: Yup.string().required("Description is required"),
});

const CategoryEditor = ({ category, onSubmit }) => {
  return (
    <div className="card my-3">
      <div className="card-body">
        <Formik
          validationSchema={validationSchema}
          initialValues={{
            categoryName: category?.categoryName || "",
            description: category?.description || "",
          }}
          onSubmit={onSubmit}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <InputField label="Category Name" name="categoryName" />
              <InputField label="Description" name="description" />
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

export default CategoryEditor;
