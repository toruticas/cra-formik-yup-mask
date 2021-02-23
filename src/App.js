import React from 'react';
// doc: https://formik.org/docs/api/useFormik
import { useFormik } from 'formik';
import { Yup } from './configs/yup'

// alternative: https://www.npmjs.com/package/react-text-mask
import InputMask from "react-input-mask";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  cpf: Yup.string()
    .length(14, 'Too Short!')
    .cpf(true, 'cpf invalid')
    .required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .complex('Week password')
    .required('Required'),
});

const App = () => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: { email: '', password: '', cpf: '' },
    validationSchema: SignupSchema,
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    },
  })

  return (
    <div>
      <h1>Formik + yup</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>email</label><br />
          <input
            type="email"
            name="email"
            onChange={(e) => {handleChange (e)}}
            onBlur={(e) => {handleBlur(e)}}
            value={values.email}
          /> 
          {errors.email && touched.email && errors.email}
        </div>
        <div>
          <label>cpf</label><br />
          <InputMask
            type="cpf"
            name="cpf"
            mask="999.999.999-99"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.cpf}
          /> 
          {errors.cpf && touched.cpf && errors.cpf}
        </div>
        <div>
          <label>password</label><br />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
        </div>

        <hr />

        Erros
        <pre>{JSON.stringify(errors, null, 2)}</pre>

        Touched
        <pre>{JSON.stringify(touched, null, 2)}</pre>

        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
    </div>
  );
}
 
export default App;

