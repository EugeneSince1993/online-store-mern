import { FC } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import styles from "./CreateProduct.module.scss";
import classNames from "classnames";

export const CreateProduct: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <h3>Добавление товара</h3>
      <div className={styles.form}>
        <Formik
          initialValues={{ 
            name: '',
            brand: '', 
            price: '',
            imageUrl: '',
            images: '',
            memory: '',
            ram: '',
            cpuCores: '',
            screenSize: '',
            batteryCapacity: '',
            color: '',
            productCode: '',
            shortDesc: '',
            description: '',
          }}
          validationSchema={Yup.object({
            fullName: Yup.string().min(3, 'Минимум 3 символа').required('Обязательное поле'),
            email: Yup.string().email('Неверный email').required('Обязательное поле'),
            password: Yup.string().min(5, 'Минимум 5 символов').required('Обязательное поле'),
            avatarUrl: Yup.string().url('Неверный URL').min(20, 'Минимум 20 символов'),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            // const data: any = await dispatch(fetchRegister(values));

            // if (!data.payload) {
            //   return alert('Не удалось зарегистрироваться');
            // }
            // if ('token' in data.payload) {
            //   window.localStorage.setItem('token', data.payload.token);
            // }

            // navigate('/account');
            // setSubmitting(false);
          }}
        >
          {({ isSubmitting, touched, errors }) => (
            <Form>
              <label htmlFor="fullName">Название товара</label>
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
    </div>
  );
};
