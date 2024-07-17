import { Field, Form, Formik } from "formik";
import React, { useCallback, useRef } from "react";
import * as Yup from "yup";
import { Notify } from "notiflix";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import useSWR from "swr";
import categoryApi from "@/api/categoryApi";
import InputField from "../forms/InputField";
import SelectField from "../forms/SelectField";
import { toSlug, uploadImage } from "@/utils";
import { toolbarOptions } from "@/constants";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  content: Yup.string().required("Content is required"),
  short_content: Yup.string().required("Short content is required"),
  category: Yup.string().required("Category is required"),
  published: Yup.boolean().required("Published status is required"),
  slug: Yup.string().required("Slug is required"),
});

const ArticlesCreate = ({ onSubmit, isReview, onReview }) => {
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
      if (input.files && input.files.length > 0) {
        try {
          const imageUrl = await uploadImage(input.files[0]);
          const quill = reactQuillRef.current?.getEditor();
          if (quill) {
            const range = quill.getSelection();
            if (range) {
              quill.insertEmbed(range.index, "image", imageUrl);
            }
          }
        } catch (error) {
          Notify.failure(error.message ?? "Upload ảnh thất bại");
        }
      }
    };
  }, []);

  return (
    <div className="card my-3">
      <div className="card-body">
        <Formik
          initialValues={{
            title: "",
            content: "",
            short_content: "",
            category: "",
            published: false,
            slug: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            onSubmit(values);
            actions.setSubmitting(false);
          }}
        >
          {({ values, handleSubmit, setFieldValue, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
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
                  value={values.content}
                  onChange={(content) => setFieldValue("content", content)}
                  modules={{
                    toolbar: {
                      container: toolbarOptions,
                      handlers: {
                        image: imageHandler,
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
                  name="thumbnail"
                  className="form-control"
                  onChange={(event) => {
                    uploadImage(event.currentTarget.files[0])
                      .then((url) => {
                        setFieldValue("thumbnail", url);
                      })
                      .catch((error) => {
                        Notify.failure(error.message ?? "Upload ảnh thất bại");
                      });
                  }}
                  disabled={isReview}
                />
              </div>
              {values.thumbnail && (
                <div className="form-group">
                  <img
                    src={values.thumbnail}
                    alt="thumbnail"
                    className="img-thumbnail"
                    style={{ width: "200px" }}
                  />
                </div>
              )}
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

export default ArticlesCreate;
