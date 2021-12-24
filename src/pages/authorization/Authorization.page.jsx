import React, { useState } from "react";
import styles from './authorization.module.scss'
import classNames from 'classnames';
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import axios from 'axios'

const Authorization2 = () => {

  const [openForm, setOpenForm] = useState(true);

  const formBox = () => {
    setOpenForm(!openForm);
  }

  const onSubmitReg = async (values, { setSubmitting, setErrors, setStatus, resetForm }) => {
    const headers = new Headers();
    headers.append('Content-Type', 'applicaion/json');
    await axios
      .post(
        'https://beetroot-solodkui.herokuapp.com/beetroot-solodkui/users/registration',
        { ...values, active: true, role: 2 },
        headers
      )
      .then((response) => { resetForm() })
      .catch(error => {
        const errorResponse = error.response.data;
        setErrors({ email: errorResponse.message.ua })
        console.log('ERROR', errorResponse.message.ua);

      })
  }

  const onSubmitIn = async (values, { setSubmitting, setErrors, setStatus, resetForm }) => {
    const headers = new Headers();
    headers.append('Content-Type', 'applicaion/json');
    await axios
      .post(
        'https://beetroot-solodkui.herokuapp.com/beetroot-solodkui/users/authorization',
        { ...values },
        headers
      )
      .then((response) => {
        console.log(response);

      })
      .catch(error => {
        const errorResponse = error.response.data;
        setErrors({ email: errorResponse.message.ua })
        console.log('ERROR', errorResponse.message.ua);

      })
  }

  return (
    <>
      <div className={
        openForm
          ? styles.authorization
          : classNames(styles.authorization, styles.active)}>
        {/* контейнер */}
        <article className={styles.authorization__wrapper}>

          {/* Внутренний блок */}
          <div className={styles.authorization__block}>

            <section className={classNames(styles.authorization__block__item, styles.block_item)}>
              <h2 className={styles.block_item__title}>Do you already have an є account?</h2>
              <button className={styles.block_item__btn} onClick={formBox}>Sign in</button>
            </section>

            <section className={classNames(styles.authorization__block__item, styles.block_item)}>
              <h2 className={styles.block_item__title}>Don't have an account?</h2>
              <button className={styles.block_item__btn} onClick={formBox}>Sign up</button>
            </section>

          </div>

          {/* Блок формы */}
          <div className={
            openForm
              ? styles.form_box
              : classNames(styles.form_box, styles.active)}>

            {/* Форма входа */}
            <Formik
              initialValues={{ username: '', password: '' }}

              validate={values => {
                const errors = {};
                if (!values.username) {
                  errors.username = 'Required';
                }
                return errors;
              }}
              onSubmit={onSubmitIn}
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
                <Form className={classNames(styles.form, styles.form_signin)}>
                  <h3 className={styles.form__title}>Sign in</h3>
                  <p>
                    <Field type="text" id="usernames" name="username" className={styles.form__input} placeholder="User" />
                  </p>
                  <p>
                    <Field type="password" className={styles.form__input} placeholder="Password" />
                  </p>
                  <p>
                    <button type="submit" className={styles.form__btn}>Sign in</button>
                  </p>
                  <p>
                    <a href="#" className={styles.form__forgot}>Forgot your password?</a>
                  </p>
                </Form>
              )}
            </Formik>

            {/* Форма регистрации */}
            <Formik
              initialValues={{ firstName: '', lastName: '', email: '', username: '', password: '' }}
              validate={values => {
                const errors = {};
                if (!values.email) {
                  errors.email = 'Обов\'язково';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Невірна адреса електронної пошти';
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
                <Form className={classNames(styles.form, styles.form_signup)}>
                  <h3 className={styles.form__title}>Sign up</h3>
                  <p>
                    <Field type="text" id="firstName" name="firstName" className={styles.form__input} placeholder="FirstName" />
                  </p>
                  <p>
                    <Field type="text" id="lastName" name="lastName" placeholder="LastName" className={styles.form__input} />
                  </p>
                  <p>
                    <Field type="text" id="username" name="username" placeholder="User" className={styles.form__input} />
                  </p>
                  <p>
                    <Field type="email" id="email" name="email" placeholder="email" className={styles.form__input} />
                  </p>
                  <p>
                    <input type="password" className={styles.form__input} placeholder="Password" />
                  </p>
                  {/* <p>
                <input type="password" className={styles.form__input} placeholder="Confirm password" />
              </p> */}
                  <ErrorMessage name="email" />
                  <p>
                    <button type="submit" className={classNames(styles.form__btn, styles.form__btn_singup)}>Sign up</button>
                  </p>

                </Form>
              )}
            </Formik>

          </div>

        </article>
      </div>
    </>
  )
}
export default Authorization2;