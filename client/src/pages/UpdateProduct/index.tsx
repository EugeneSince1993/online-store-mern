import { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import styles from "./UpdateProduct.module.scss";
import classNames from "classnames";
import { fetchProductById, updateProductById } from "../../redux/product/asyncActions";
import { selectProduct } from "../../redux/product/selectors";
import { IProductParamsId } from "../../types/IProductParamsId";
import { IProductParams } from "../../types/IProductParams";
import { Button } from "../../components";
import axios from "../../axios";

export const UpdateProduct: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { currentProduct } = useAppSelector(selectProduct);
  let { id } = useParams();

  const inputFileRef = useRef<HTMLInputElement>(null);
  const [productThumbnail, setProductThumbnail] = useState<string>('');

  useEffect(() => {
    dispatch(fetchProductById(id));
    window.scrollTo(0, 0);
  }, []);

  const imagesExp = /([-a-zA-Z0-9@:%._\+~#=\/]{1,256}\n){1,5}[-a-zA-Z0-9@:%._\+~#=\/]{1,256}/;
  const imagesRegex = new RegExp(imagesExp);

  const objIsNotEmpty = (obj: any) => {
    return Object.keys(obj).length !== 0;
  };
  const currentProductIsNotEmpty = objIsNotEmpty(currentProduct);

  const productImages = currentProductIsNotEmpty && currentProduct.images;
  const productImagesStr = productImages && productImages.reduce((previousValue: string, currentValue: string) => {
    return previousValue + "\n" + currentValue;
  });

  const goToAccount = () => {
    navigate('/account');
  };

  const handleChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    try {
      if (event.target.files) {
        const formData = new FormData();
        const file = event.target.files[0];
        formData.append('image', file);
        const { data } = await axios.post('/upload', formData);
        setProductThumbnail(data.url);
      } else {
        throw "files array is empty";
      }
    } catch (err) {
      console.warn(err);
      alert('Ошибка при загрузке файла!');
    }
  };

  const handleClickInputFile = () => {
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  };

  return (
    <div>
      <h3>Изменение товара</h3>
      <div className={styles.form}>
        <Formik
          enableReinitialize={true}
          initialValues={{ 
            name: currentProductIsNotEmpty ? currentProduct.name : '',
            imageUrl: currentProductIsNotEmpty ? currentProduct.imageUrl : '',
            images: currentProductIsNotEmpty ? productImagesStr : '',
            brand: currentProductIsNotEmpty ? currentProduct.brand : '', 
            price: currentProductIsNotEmpty ? currentProduct.price : '',
            memory: currentProductIsNotEmpty ? currentProduct.memory : '',
            ram: currentProductIsNotEmpty ? currentProduct.ram : '',
            cpuCores: currentProductIsNotEmpty ? currentProduct.cpuCores : '',
            screenSize: currentProductIsNotEmpty ? currentProduct.screenSize : '',
            batteryCapacity: currentProductIsNotEmpty ? currentProduct.batteryCapacity : '',
            color: currentProductIsNotEmpty ? currentProduct.color : '',
            productCode: currentProductIsNotEmpty ? currentProduct.productCode : '',
            shortDesc: currentProductIsNotEmpty ? currentProduct.shortDesc : '',
            description: currentProductIsNotEmpty ? currentProduct.description : '',
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .min(3, 'Минимум 3 символа')
              .required('Обязательное поле'),
            imageUrl: Yup.string()
              .min(20, 'Минимум 20 символов')
              .required('Обязательное поле'),
            images: Yup.string()
              .matches(imagesRegex, 'Введите адреса, каждый с новой строки')
              .min(20, 'Минимум 20 символов')
              .required('Обязательное поле'),
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
            const dataForUpdating: IProductParamsId = { ...values, id };

            const data: any = await dispatch(updateProductById(dataForUpdating));

            if (!data.payload.success) {
              return alert('Не удалось обновить товар');
            } else {
              alert(`Товар "${values.name}" изменен`);
            }

            navigate('/account');
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, touched, errors, isValid, dirty}) => (
            <Form>
              <div className={styles.inputGroup}>
                <label htmlFor="name">Название товара</label>
                <Field 
                  id="name" 
                  name="name" 
                  type="text" 
                  className={classNames({
                    [styles.borderRed]: touched.name && errors.name
                  })}
                />
                <ErrorMessage className={styles.errorMsg} name="name" component="div" />
              </div>
              <div className={classNames(styles.inputGroup, styles.productThumbnail)}>
                <label htmlFor="imageUrl">Миниатюра изображения товара</label>
                <Button 
                  variant="outlined"
                  onClickFunc={handleClickInputFile} 
                  link=""
                >
                  Загрузить
                </Button>
                <input 
                  ref={inputFileRef}
                  id="imageUrl" 
                  name="imageUrl" 
                  type="file"
                  onChange={handleChangeFile} 
                  className={styles.inputFileImage}
                />
                <div className={styles.imageContainer}>
                  <div className={styles.image}>
                    {productThumbnail && (
                      <img src={productThumbnail} alt="product-thumbnail" />
                    )}
                  </div>
                </div>
                <ErrorMessage className={styles.errorMsg} name="imageUrl" component="div" />
              </div>
              <div className={classNames(styles.inputGroup, styles.productImages)}>
                <label htmlFor="images">Изображения товара</label>
                <Field 
                  as="textarea"
                  id="images" 
                  name="images" 
                  placeholder="https://test.com/image123.jpg
                  https://test.com/image123.jpg
                  https://test.com/image123.jpg"
                  className={classNames({ 
                    [styles.borderRed]: touched.images && errors.images 
                  })}
                />
                <ErrorMessage className={styles.errorMsg} name="images" component="div" />
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
                <ErrorMessage className={styles.errorMsg} name="brand" component="div" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="price">Цена, руб.</label>
                <Field 
                  id="price" 
                  name="price" 
                  type="text" 
                  className={classNames({
                    [styles.borderRed]: touched.price && errors.price
                  })}
                />
                <ErrorMessage className={styles.errorMsg} name="price" component="div" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="memory">Объем встроенной памяти, Гб</label>
                <Field 
                  id="memory" 
                  name="memory" 
                  type="text" 
                  className={classNames({
                    [styles.borderRed]: touched.memory && errors.memory
                  })}
                />
                <ErrorMessage className={styles.errorMsg} name="memory" component="div" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="ram">Объем оперативной памяти, Гб</label>
                <Field 
                  id="ram" 
                  name="ram" 
                  type="text" 
                  className={classNames({
                    [styles.borderRed]: touched.ram && errors.ram
                  })}
                />
                <ErrorMessage className={styles.errorMsg} name="ram" component="div" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="cpuCores">Количество ядер</label>
                <Field 
                  id="cpuCores" 
                  name="cpuCores" 
                  type="text" 
                  className={classNames({
                    [styles.borderRed]: touched.cpuCores && errors.cpuCores
                  })}
                />
                <ErrorMessage className={styles.errorMsg} name="cpuCores" component="div" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="screenSize">Диагональ экрана, дюйм</label>
                <Field 
                  id="screenSize" 
                  name="screenSize" 
                  type="text" 
                  className={classNames({
                    [styles.borderRed]: touched.screenSize && errors.screenSize
                  })}
                />
                <ErrorMessage className={styles.errorMsg} name="screenSize" component="div" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="batteryCapacity">Ёмкость аккумулятора, мАч</label>
                <Field 
                  id="batteryCapacity" 
                  name="batteryCapacity" 
                  type="text" 
                  placeholder=""
                  className={classNames({
                    [styles.borderRed]: touched.batteryCapacity && errors.batteryCapacity
                  })}
                />
                <ErrorMessage className={styles.errorMsg} name="batteryCapacity" component="div" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="color">Цвет товара</label>
                <Field 
                  as="select"
                  id="color" 
                  name="color" 
                  className={classNames({
                    [styles.borderRed]: touched.color && errors.color
                  })}
                >
                  <option value="">выберите цвет</option>
                  <option value="white">белый</option>
                  <option value="black">черный</option>
                  <option value="gray">серый</option>
                  <option value="blue">синий</option>
                  <option value="red">красный</option>
                  <option value="pink">розовый</option>
                  <option value="green">зеленый</option>
                  <option value="yellow">желтый</option>
                </Field>
                <ErrorMessage className={styles.errorMsg} name="color" component="div" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="productCode">Артикул товара</label>
                <Field 
                  id="productCode" 
                  name="productCode" 
                  type="text" 
                  className={classNames({
                    [styles.borderRed]: touched.productCode && errors.productCode
                  })}
                />
                <ErrorMessage className={styles.errorMsg} name="productCode" component="div" />
              </div>
              <div className={classNames(styles.inputGroup, styles.shortDesc)}>
                <label htmlFor="shortDesc">Краткое описание</label>
                <Field 
                  as="textarea"
                  id="shortDesc" 
                  name="shortDesc" 
                  className={classNames({ 
                    [styles.borderRed]: touched.shortDesc && errors.shortDesc 
                  })}
                />
                <ErrorMessage className={styles.errorMsg} name="shortDesc" component="div" />
              </div>
              <div className={classNames(styles.inputGroup, styles.description)}>
                <label htmlFor="description">Описание</label>
                <Field 
                  as="textarea"
                  id="description" 
                  name="description" 
                  className={classNames({ 
                    [styles.borderRed]: touched.description && errors.description 
                  })}
                />
                <ErrorMessage className={styles.errorMsg} name="description" component="div" />
              </div>
              <button 
                type="submit" 
                disabled={!isValid || !dirty || isSubmitting}
                className={classNames(styles.submit, { 
                  [styles.disabled]: !isValid || !dirty || isSubmitting 
                })}
              >
                Изменить товар
              </button>
              <button 
                type="button" 
                disabled={isSubmitting}
                className={classNames(styles.cancel, { 
                  [styles.disabled]: isSubmitting 
                })}
                onClick={goToAccount}
              >
                Отмена
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
