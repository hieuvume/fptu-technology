import { Field, Form, Formik } from "formik";
import InputField from "../forms/InputField";
import * as Yup from "yup";
import useSWR from "swr";
import categoryApi from "@/api/categoryApi";
import SelectField from "../forms/SelectField";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  content: Yup.string().required("Content is required"),
  category: Yup.string().required("Category is required"),
  published: Yup.boolean().required("Published status is required"),
  slug: Yup.string().required("Slug is required"),
  thumbnail: Yup.string().required("Thumbnail URL is required"),
});

const ArticlesEditor = ({ articles, onSubmit }) => {
  const { data: categories } = useSWR("/categories", () =>
    categoryApi.getAll()
  );

  const options = categories?.map((category) => ({
    label: category.categoryName,
    value: category._id,
  }));

  return (
    <div className="card my-3">
      <div className="card-body">
        <Formik
          validationSchema={validationSchema}
          initialValues={{
            title: articles?.title || "",
            content: articles?.content || "",
            category: articles?.category?._id || "",
            published: articles?.published || false,
            slug: articles?.slug || "",
            thumbnail: articles?.thumbnail || "",
          }}
          onSubmit={onSubmit}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <InputField label="Title" name="title" />
              <div className="form-group">
                <label htmlFor="content">Content</label>

                <Field
                  as="textarea"
                  className="form-control"
                  name="content"
                  rows="5"
                />
              </div>
              <SelectField label="Category" name="category" options={options} />
              <InputField label="Slug" name="slug" />
              <InputField label="Thumbnail URL" name="thumbnail" />
              {/* <div className="form-group">
                <label htmlFor="published" className="form-check-label">
                  Published
                </label>
                <input
                  style={{ marginLeft: "10px" }}
                  type="checkbox"
                  label="Published"
                  name="published"
                  id="published"
                  className="form-check-input"
                />
              </div> */}

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

export default ArticlesEditor;
