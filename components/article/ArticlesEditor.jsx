import categoryApi from "@/api/categoryApi";
import { toolbarOptions } from "@/constants";
import { toSlug, uploadImage } from "@/utils";
import { Form, Formik } from "formik";
import { Notify } from "notiflix";
import { useCallback, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import useSWR from "swr";
import * as Yup from "yup";
import InputField from "../forms/InputField";
import SelectField from "../forms/SelectField";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  content: Yup.string().required("Content is required"),
  short_content: Yup.string().required("Short content is required"),
  category: Yup.string().required("Category is required"),
  slug: Yup.string().required("Slug is required"),
  published: Yup.boolean().required("Published is required"),
});

const ArticlesEditor = ({ articles, onSubmit, isReview, onReview }) => {
  const reactQuillRef = useRef(null);
  const { data: categories } = useSWR("/categories", () =>
    categoryApi.getAll()
  );

  const options = categories?.map((category) => ({
    label: category.categoryName,
    value: category._id,
  }));

  const imageHandler = useCallback(() => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.onchange = async () => {
      if (input !== null && input.files !== null) {
        uploadImage(input.files[0])
          .then((url) => {
            const quill = reactQuillRef.current;
            if (quill) {
              const range = quill.getEditorSelection();
              range && quill.getEditor().insertEmbed(range.index, "image", url);
            }
          })
          .catch((error) => {
            Notify.failure(error.message ?? "Upload ảnh thất bại");
          });
      }
    };
  }, []);

  return (
    <div className="card my-3">
      <div className="card-body">
        <Formik
          validationSchema={validationSchema}
          initialValues={articles}
          onSubmit={async (values, actions) => {
            onSubmit(values);
            actions.setSubmitting(false);
          }}
        >
          {({ errors, values, handleSubmit, setFieldValue, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              {JSON.stringify(errors)}
              <InputField
                label="Title"
                name="title"
                onChange={(e) => {
                  setFieldValue("title", e.target.value);
                  setFieldValue("slug", toSlug(e.target.value));
                }}
                disabled={isReview}
              />
              <InputField label="Slug" name="slug" disabled={isReview} />
              <SelectField
                label="Category"
                name="category"
                options={options}
                disabled={isReview}
              />
              <InputField
                label="Short content"
                name="short_content"
                disabled={isReview}
              />
              <div className="form-group">
                <label htmlFor="content">Content</label>
                <ReactQuill
                  ref={reactQuillRef}
                  theme="snow"
                  value={values?.content}
                  onChange={(stringifiedHtmlValue) => {
                    setFieldValue("content", stringifiedHtmlValue);
                  }}
                  modules={{
                    toolbar: {
                      container: toolbarOptions,
                      handlers: {
                        image: imageHandler, // <-
                      },
                    },
                    clipboard: {
                      matchVisual: false,
                    },
                  }}
                  readOnly={isReview}
                />
              </div>
              <div className="form-group">
                <label htmlFor="thumbnail">Thumbnail</label>
                <input
                  type="file"
                  name="thumbnailx"
                  className="form-control"
                  onChange={(event) => {
                    uploadImage(event.currentTarget.files[0]).then((url) => {
                      setFieldValue("thumbnail", url);
                    });
                  }}
                />
              </div>
              {values?.thumbnail && (
                <div className="form-group">
                  <img
                    src={values.thumbnail}
                    alt="thumbnail"
                    className="img-thumbnail"
                    style={{ width: "200px" }}
                  />
                </div>
              )}

              <div className="form-group">
                <label htmlFor="published">Published</label>
                <div class="primary-switch">
                  <input
                    type="checkbox"
                    id="default-switch"
                    name="published"
                    checked={values.published}
                    onChange={(e) => {
                      setFieldValue("published", e.target.checked);
                    }}
                  />
                  <label for="default-switch"></label>
                </div>
              </div>
              {isReview ? (
                <>
                  <button
                    type="button"
                    className="btn btn-primary mr-2"
                    disabled={isSubmitting}
                    onClick={() => onReview(false)}
                  >
                    {isSubmitting ? "Saving..." : "Reject"}
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ background: "#0dde53" }}
                    disabled={isSubmitting}
                    onClick={() => onReview(true)}
                  >
                    {isSubmitting ? "Saving..." : "Approve"}
                  </button>
                </>
              ) : (
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Saving..." : "Save"}
                </button>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ArticlesEditor;
