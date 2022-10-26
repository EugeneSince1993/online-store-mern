import { FC } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import styles from "./CreateProduct.module.scss";
import classNames from "classnames";
import { createProduct } from "../../redux/product/asyncActions";
import { IProductParams } from "../../types/IProductParams";

export const CreateProduct: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const imagesExp = /((https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*))\s+){1,5}(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*))/;

  const imagesRegex = new RegExp(imagesExp);

  return (
    <div>
      <h3>Добавление товара</h3>
      <div className={styles.form}>
        <Formik
          initialValues={{ 
            name: '',
            imageUrl: '',
            images: '',
            brand: '', 
            price: 0,
            memory: 0,
            ram: 0,
            cpuCores: 0,
            screenSize: 0,
            batteryCapacity: 0,
            color: '',
            productCode: 0,
            shortDesc: '',
            description: '',
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .min(3, 'Минимум 3 символа')
              .required('Обязательное поле'),
            imageUrl: Yup.string()
              .url('Неверный URL')
              .min(20, 'Минимум 20 символов'),
            images: Yup.string()
              .matches(imagesRegex, 'Введите URL-адреса, разделенные пробелом'),
            brand: Yup.string()
              .min(3, 'Минимум 3 символа')
              .required('Обязательное поле'), 
            price: Yup.number()
              .min(4, 'Минимум 4 символа')
              .required('Обязательное поле'),
            memory: Yup.number()
              .min(1, 'Минимум 1 символ')
              .required('Обязательное поле'),
            ram: Yup.number()
              .min(1, 'Минимум 1 символ')
              .required('Обязательное поле'),
            cpuCores: Yup.number()
              .min(1, 'Минимум 1 символ')
              .required('Обязательное поле'),
            screenSize: Yup.number()
              .min(1, 'Минимум 1 символ')
              .required('Обязательное поле'),
            batteryCapacity: Yup.number()
              .min(4, 'Минимум 4 символа')
              .required('Обязательное поле'),
            color: Yup.string()
              .min(3, 'Минимум 3 символа')
              .required('Обязательное поле'),
            productCode: Yup.number()
              .min(5, 'Минимум 5 символов')
              .required('Обязательное поле'),
            shortDesc: Yup.string()
              .min(10, 'Минимум 10 символов')
              .required('Обязательное поле'),
            description: Yup.string()
              .min(30, 'Минимум 30 символов')
              .required('Обязательное поле'),
          })}
          onSubmit={async (values: IProductParams, { setSubmitting }) => {
            const data: any = await dispatch(createProduct(values));

            if (!data.payload) {
              return alert('Не удалось создать товар');
            } else {
              alert(`Товар "${data.payload.name}" добавлен`);
            }

            navigate('/account');
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, touched, errors }) => (
            <Form>
              <div className={styles.inputGroup}>
                <label htmlFor="name">Название товара</label>
                <Field 
                  id="name" 
                  name="name" 
                  type="text" 
                  placeholder="Иван Иванов"
                  className={classNames({
                    [styles.borderRed]: touched.name && errors.name
                  })}
                />
                <ErrorMessage name="name" component="div" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="imageUrl">Изображение товара</label>
                <Field 
                  id="imageUrl" 
                  name="imageUrl" 
                  type="text" 
                  placeholder="https://test.com/image123.jpg"
                  className={classNames({ 
                    [styles.borderRed]: touched.imageUrl && errors.imageUrl 
                  })}
                />
                <ErrorMessage name="avatarUrl" component="div" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="images">Галерея товаров</label>
                <Field 
                  as="textarea"
                  id="images" 
                  name="images" 
                  placeholder="https://test.com/image123.jpg https://test.com/image123.jpg https://test.com/image123.jpg"
                  className={classNames({ 
                    [styles.borderRed]: touched.images && errors.images 
                  })}
                />
                <ErrorMessage name="images" component="div" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="brand">Бренд</label>
                <Field 
                  id="brand" 
                  name="brand" 
                  type="text" 
                  className={classNames({
                    [styles.borderRed]: touched.brand && errors.brand
                  })}
                />
                <ErrorMessage name="brand" component="div" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="price">Цена, руб.</label>
                <Field 
                  id="price" 
                  name="price" 
                  type="number" 
                  className={classNames({
                    [styles.borderRed]: touched.price && errors.price
                  })}
                />
                <ErrorMessage name="price" component="div" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="memory">Объем встроенной памяти, Гб</label>
                <Field 
                  id="memory" 
                  name="memory" 
                  type="number" 
                  className={classNames({
                    [styles.borderRed]: touched.memory && errors.memory
                  })}
                />
                <ErrorMessage name="memory" component="div" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="ram">Объем оперативной памяти, Гб</label>
                <Field 
                  id="ram" 
                  name="ram" 
                  type="number" 
                  className={classNames({
                    [styles.borderRed]: touched.ram && errors.ram
                  })}
                />
                <ErrorMessage name="ram" component="div" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="cpuCores">Количество ядер</label>
                <Field 
                  id="cpuCores" 
                  name="cpuCores" 
                  type="number" 
                  className={classNames({
                    [styles.borderRed]: touched.cpuCores && errors.cpuCores
                  })}
                />
                <ErrorMessage name="cpuCores" component="div" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="screenSize">Диагональ экрана, дюйм</label>
                <Field 
                  id="screenSize" 
                  name="screenSize" 
                  type="number" 
                  className={classNames({
                    [styles.borderRed]: touched.screenSize && errors.screenSize
                  })}
                />
                <ErrorMessage name="screenSize" component="div" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="batteryCapacity">Ёмкость аккумулятора, мАч</label>
                <Field 
                  id="batteryCapacity" 
                  name="batteryCapacity" 
                  type="number" 
                  placeholder=""
                  className={classNames({
                    [styles.borderRed]: touched.batteryCapacity && errors.batteryCapacity
                  })}
                />
                <ErrorMessage name="batteryCapacity" component="div" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="color">Цвет товара</label>
                <Field 
                  id="color" 
                  name="color" 
                  type="text" 
                  className={classNames({
                    [styles.borderRed]: touched.color && errors.color
                  })}
                />
                <ErrorMessage name="color" component="div" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="productCode">Артикул товара</label>
                <Field 
                  id="productCode" 
                  name="productCode" 
                  type="number" 
                  className={classNames({
                    [styles.borderRed]: touched.productCode && errors.productCode
                  })}
                />
                <ErrorMessage name="productCode" component="div" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="shortDesc">Краткое описание</label>
                <Field 
                  as="textarea"
                  id="shortDesc" 
                  name="shortDesc" 
                  className={classNames({ 
                    [styles.borderRed]: touched.shortDesc && errors.shortDesc 
                  })}
                />
                <ErrorMessage name="shortDesc" component="div" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="description">Описание</label>
                <Field 
                  as="textarea"
                  id="description" 
                  name="description" 
                  className={classNames({ 
                    [styles.borderRed]: touched.description && errors.description 
                  })}
                />
                <ErrorMessage name="description" component="div" />
              </div>
              <button type="submit" disabled={isSubmitting}>
                Создать товар
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
