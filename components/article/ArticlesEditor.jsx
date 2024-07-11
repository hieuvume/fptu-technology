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
  thumbnail: Yup.mixed().required("Thumbnail is required"),
});

const ArticlesEditor = ({ articles, onSubmit }) => {
  const { data: categories } = useSWR("/categories", () =>
    categoryApi.getAll()
  );

  const options = categories?.map((category) => ({
    label: category.categoryName,
    value: category._id,
  }));

  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(",")[1]); // Get base64 part
      reader.onerror = error => reject(error);
    });
  };

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
            thumbnail: null,
          }}
          onSubmit={async (values, actions) => {
            let base64Thumbnail = "";
            if (values.thumbnail) {
              base64Thumbnail = await convertFileToBase64(values.thumbnail);
            }
            
            const formData = {
              title: values.title,
              content: values.content,
              category: values.category,
              published: values.published,
              slug: values.slug,
              thumbnailBase64: base64Thumbnail,
              thumbnailName: values.thumbnail.name,
            };
            
            onSubmit(formData);
            actions.setSubmitting(false);
          }}
        >
          {({ handleSubmit, setFieldValue }) => (
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
              <div className="form-group">
                <label htmlFor="thumbnail">Thumbnail</label>
                <input
                  type="file"
                  name="thumbnail"
                  className="form-control"
                  onChange={(event) => {
                    setFieldValue("thumbnail", event.currentTarget.files[0]);
                  }}
                />
              </div>
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
