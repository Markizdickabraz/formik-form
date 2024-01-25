import { Formik, Field, Form, ErrorMessage } from 'formik';
import './form.css';
 import * as Yup from 'yup';

  const SignupSchema = Yup.object().shape({
   firstName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   lastName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   email: Yup.string().email('Invalid email').required('Required'),
 });


function FormComponent() {
  return (
          <Formik className="form_container"
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
           validationSchema={SignupSchema}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        console.log(JSON.stringify(values, null, 2));
      }}
      >
          {({ errors, touched }) => (
              <Form className='form'>
                  <h1 className='form__title'>Register</h1>
                  <label className='form__label' htmlFor="firstName">First Name
                  <Field className='form__input' id="firstName" name="firstName" placeholder="Jane" />
                  <ErrorMessage component='p' className='error__message' name="firstName" />
                  </label>
                  
                  <label className='form__label' htmlFor="lastName">Last Name
                  <Field className='form__input' id="lastName" name="lastName" placeholder="Doe" />
                  <ErrorMessage component='p' className='error__message' name="lastName" />
                  </label>
                  
                  <label className='form__label' htmlFor="email">Email
                  <Field className='form__input'
                      id="email"
                      name="email"
                      placeholder="jane@acme.com"
                      type="email"
                  />
                  <ErrorMessage component='p' className='error__message' name="email" />
                  </label>
                  
                  <div className='btn__container'>
                      <button className='btn' type="submit">Submit</button>
                  </div>
              </Form>
          )} 
    </Formik>
  )
}

export default FormComponent;
