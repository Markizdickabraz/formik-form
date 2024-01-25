import { Formik, Field, Form } from 'formik';
import './form.css';

function FormComponent() {
  return (
          <Formik className="form_container"
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        console.log(JSON.stringify(values, null, 2));
      }}
    >
          <Form className='form'>
              <h1 className='form__title'>Register</h1>
        <label className='form__label' htmlFor="firstName">First Name</label>
        <Field  className='form__input' id="firstName" name="firstName" placeholder="Jane" />

        <label className='form__label' htmlFor="lastName">Last Name</label>
        <Field  className='form__input' id="lastName" name="lastName" placeholder="Doe" />

        <label className='form__label' htmlFor="email">Email</label>
        <Field className='form__input' 
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
              <div className='btn__container'>
                  <button className='btn' type="submit">Submit</button>
              </div>
      </Form>
    </Formik>
  )
}

export default FormComponent;
