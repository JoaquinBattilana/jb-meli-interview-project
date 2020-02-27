import React from 'react';
import { Field, reduxForm } from 'redux-form';

function Navbar() {
  return (
    <form>
      <label htmlFor="testField"> Test label</label>
      <Field name="testField" component="input" />
    </form>
  );
}

export default reduxForm(
  {
    form: 'testForm'
  }
)(Navbar);
