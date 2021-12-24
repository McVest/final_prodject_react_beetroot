import React from 'react';
import styles from './contactForm.module.scss'
import classNames from 'classnames';
import { ErrorMessage, Field, TextInput, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import axios from 'axios'

const ContactForm = () => {

  const onSubmitReg = async (values, { setSubmitting, setErrors, setStatus, resetForm }) => {
    
    const headers = new Headers();
    headers.append('Content-Type', 'applicaion/json');
    await axios
      .post(
        'https://beetroot-solodkui.herokuapp.com/beetroot-solodkui/users/registration',
        { ...values, active: true, role: 2 },
        headers
      )
      .then((response) => response.JSON())
      .catch(error => {
        const errorResponse = error.response.data;
        setErrors({ email: errorResponse.message.ua })
        console.log('ERROR', errorResponse.message.ua);

      })
  }


  return (
    <div className={styles.contact}>
      <div className={styles.contact__wrapper}>
        <div className={styles.contact__block}>
          <h2>Let’s talk business</h2>
          <p>Now that you know a lot about me, let me know if you are interested to work with me.</p>
        </div>
        <div className={classNames(styles.contact__block)}>
          <Formik
            initialValues={{ username: '', password: '' }}

            validate={values => {
              const errors = {};
              if (!values.username) {
                errors.username = 'Required';
              }
              return errors;
            }}
            onSubmit={onSubmitReg}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <Form action="#" className={classNames(styles.contact__form)}>
                <div>
                  <label htmlFor="username">Name</label>
                  <Field id="username" name="username" className={classNames(styles.input)} placeholder="username" type="text" />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <Field type="email" id="email" name="email" placeholder="jane@acme.com" className={classNames(styles.input)} />
                </div>
                <div>
                  <label htmlFor="text">Message</label>
                  <textarea name="text" id="text" cols="30" rows="5"></textarea>
                </div>
                <ErrorMessage name="email" />
                <button type='submit' className={classNames(styles.btn)}>LET’S GET STARTED</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;