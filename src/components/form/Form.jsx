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
      <Form class='form'>
        <label className='form__label' htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName" placeholder="Jane" />

        <label className='form__label' htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" placeholder="Doe" />

        <label className='form__label' htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}

export default FormComponent;
