import { FC } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import styles from "./Registration.module.scss";
import * as Yup from 'yup';
import classNames from "classnames";
import { fetchRegister } from "../../../redux/auth/asyncActions";
import { useAppDispatch } from "../../../redux/hooks";
import { useNavigate } from "react-router-dom";

interface IProps {
  onClose: (e: any) => any;
}

export const Registration: FC<IProps> = ({ onClose }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <div className={styles.form}>
      <Formik
        initialValues={{ 
          fullName: '',
          email: '', 
          password: '',
          avatarUrl: '',
        }}
        validationSchema={Yup.object({
          fullName: Yup.string().min(3, 'Минимум 3 символа').required('Обязательное поле'),
          email: Yup.string().email('Неверный email').required('Обязательное поле'),
          password: Yup.string().min(5, 'Минимум 5 символов').required('Обязательное поле'),
          avatarUrl: Yup.string().url('Неверный URL').min(20, 'Минимум 20 символов'),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          const data: any = await dispatch(fetchRegister(values));

          if (!data.payload) {
            return alert('Не удалось зарегистрироваться');
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
            <label htmlFor="fullName">Имя пользователя</label>
            <Field 
              id="fullName" 
              name="fullName" 
              type="text" 
              placeholder="Иван Иванов"
              className={classNames(
                { [styles.borderRed]: touched.email && errors.email }
              )}
            />
            <ErrorMessage name="fullName" component="div" />
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
            <label htmlFor="avatarUrl">Аватар</label>
            <Field 
              id="avatarUrl" 
              name="avatarUrl" 
              type="text" 
              placeholder="https://test.com/image123.jpg"
              className={classNames(
                { [styles.borderRed]: touched.email && errors.email }
              )}
            />
            <ErrorMessage name="avatarUrl" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Зарегистрироваться
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
