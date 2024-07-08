import { Form, Formik } from "formik";
import InputField from "../forms/InputField";
import SelectField from "../forms/SelectField";
import { SPECIALTIES } from "@/constants";
import applicationApi from "@/api/applicationApi";
import { Report } from "notiflix";

const intialValues = {
  specialty: "",
  experience: "",
  example: "",
  description: "",
  social_links: "",
};

const ContributorForm = () => {
  return (
    <div className="container">
      <div className="w-150 d-flex justify-content-center">
        <Formik
          initialValues={intialValues}
          onSubmit={(values) => {
            applicationApi
              .send(values)
              .then((data) => {
                Report.success(
                  "Sucessfully!!",
                  "Your application has been submitted successfully. We will review your application and get back to you soon.",
                  "OK"
                );
              })
              .catch((error) => {
                Report.failure("Application failed", error.message, "OK");
              });
          }}
        >
          {({ handleSubmit }) => (
            <Form style={{ width: "50rem" }} onSubmit={handleSubmit}>
              <SelectField
                label={"Specialty"}
                id="specialty"
                name="specialty"
                options={SPECIALTIES}
                required
              />
              <InputField
                label="Experience (year)"
                type="number"
                id="experience"
                name="experience"
                required
              />
              <InputField
                label="Article example (link)"
                id="example"
                name="example"
                required
              />
              <InputField
                label="Briefly describe yourself"
                id="description"
                name="description"
                required
              />
              <InputField
                label="Social links"
                id="social_links"
                name="social_links"
              />
              <button type="submit" className="btn btn-primary">
                Submit application
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContributorForm;
