import { FC } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import styles from "./Login.module.scss";
import * as Yup from 'yup';
import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { fetchAuth } from "../../../redux/auth/asyncActions";
import { useNavigate } from "react-router-dom";
import { selectIsAuth } from "../../../redux/auth/selectors";

interface IProps {
  onClose: (e: any) => any;
}

export const Login: FC<IProps> = ({ onClose }) => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(selectIsAuth);
  const navigate = useNavigate();

  return (
    <div className={styles.form}>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string().email('Неверный email').required('Обязательное поле'),
          password: Yup.string().min(5, 'Минимальная длина пароля 5 символов').required('Обязательное поле'),
        })}
        onSubmit={ async (values, { setSubmitting }) => {
          const data: any = await dispatch(fetchAuth(values));

          if (!data.payload) {
            return alert('Не удалось авторизоваться');
          }
          if ('token' in data.payload) {
            window.localStorage.setItem('token', data.payload.token);
          }

          onClose(false); 
          navigate('/account');
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, touched, errors }) => (
          <Form>
            <label htmlFor="email">Email</label>
            <Field 
              id="email" 
              name="email" 
              type="email" 
              placeholder="test@test.com"
              className={classNames(
                { [styles.borderRed]: touched.email && errors.email }
              )}
            />
            <ErrorMessage name="email" component="div" />
            <label htmlFor="password">Пароль</label>
            <Field 
              id="password"
              type="password" 
              name="password" 
              className={classNames(
                { [styles.borderRed]: touched.password && errors.password }
              )}
            />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Войти
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
