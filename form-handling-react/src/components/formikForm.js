import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  // Initial form values
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  // Validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  // Form submission handler
  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Submitted Successfully:", values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className="max-w-sm mx-auto p-4 border rounded">
          <h2 className="text-xl font-semibold mb-4">User Registration</h2>

          {/* Username */}
          <div className="mb-3">
            <label className="block font-medium" htmlFor="username">
              Username
            </label>
            <Field
              type="text"
              name="username"
              id="username"
              className="w-full border p-2 rounded"
            />
            <ErrorMessage
              name="username"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="block font-medium" htmlFor="email">
              Email
            </label>
            <Field
              type="email"
              name="email"
              id="email"
              className="w-full border p-2 rounded"
            />
            <ErrorMessage
              name="email"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="block font-medium" htmlFor="password">
              Password
            </label>
            <Field
              type="password"
              name="password"
              id="password"
              className="w-full border p-2 rounded"
            />
            <ErrorMessage
              name="password"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
