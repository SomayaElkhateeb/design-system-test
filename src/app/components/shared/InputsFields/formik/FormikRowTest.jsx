// MyForm.js
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import FormikRow from "./FormikRow";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  comments: Yup.string().required("Comments is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const FormikRowTest = () => {
  const initialValues = {
    name: "",
    email: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Your form submission logic goes here
    console.log(values);

    // Reset submitting state after form submission
    setSubmitting(false);
  };

  return (
    <section className="w-1/2">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <h1 className="text-2xl font-semibold">InputField</h1>
          <FormikRow
            name="name"
            label="Name"
            leadingIcon={<span>👤</span>}
            trailingIcon={<span>✔️</span>}
            helperText="Enter your name"
            placeholder="Enter your name"
          />
          <h1 className="text-2xl font-semibold">isLoading</h1>
          <FormikRow
            name="name"
            label="Name"
            leadingIcon={<span>👤</span>}
            trailingIcon={<span>✔️</span>}
            helperText="Enter your name"
            placeholder="Enter your name"
            isLoading
          />
          <h1 className="text-2xl font-semibold">Disabled</h1>

          <FormikRow
            name="email"
            label="Email"
            leadingIcon={<span>✉️</span>}
            trailingIcon={<span>✔️</span>}
            helperText="Enter your email"
            placeholder="Enter your email"
            disabled
          />
          <h1 className="text-2xl font-semibold">Textarea</h1>
          <FormikRow
            name="comments"
            label="Comments"
            // leadingIcon={<span>✉️</span>}
            trailingIcon={<span>✔️</span>}
            helperText="Enter your comments"
            placeholder="Enter your comments"
            textarea
          />

          <button className="p-3 bg-blue-500 rounded text-white" type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </section>
  );
};

export default FormikRowTest;
