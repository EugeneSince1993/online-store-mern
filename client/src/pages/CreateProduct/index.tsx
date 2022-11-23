import { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import styles from "./CreateProduct.module.scss";
import classNames from "classnames";
import { createProduct } from "../../redux/product/asyncActions";
import { IProductParams } from "../../types/IProductParams";
import axios from "../../axios";
import { Button } from "../../components";

export const CreateProduct: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const goToAccount = () => {
    navigate('/account');
  };

  const inputFileRef = useRef<HTMLInputElement>(null);
  const inputFilesRef = useRef<HTMLInputElement>(null);
  const [productThumbnail, setProductThumbnail] = useState<string>('');
  const [productImages, setProductImages] = useState<string[]>([]);
  const productImagesStr = productImages.join(' ');

  const formik = useFormik({
    initialValues: { 
      name: '',
      imageUrl: '',
      images: '',
      brand: '', 
      price: '',
      memory: '',
      ram: '',
      cpuCores: '',
      screenSize: '',
      batteryCapacity: '',
      color: '',
      productCode: '',
      shortDesc: '',
      description: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Минимум 3 символа')
        .required('Обязательное поле'),
      imageUrl: Yup.string()
        .required('Добавьте миниатюру изображения товара'),
      images: Yup.string()
        .required('Добавьте изображения товара'),
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
    }),
    onSubmit: async (values: IProductParams, { setSubmitting }) => { 
      const data: any = await dispatch(createProduct(values));

      if (!data.payload) {
        return alert('Не удалось создать товар');
      } else {
        alert(`Товар "${data.payload.name}" добавлен`);
      }

      goToAccount();
      setSubmitting(false);
    },
  });

  const handleClickInputFile = () => {
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  };

  const handleChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    try {
      if (event.target.files) {
        const formData = new FormData();
        const file = event.target.files[0];
        formData.append('inputFile', file);
        const { data } = await axios.post('/uploads/thumbnail', formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });
        setProductThumbnail(data.url);
      } else {
        throw "files array is empty";
      }
    } catch (err) {
      console.warn(err);
      alert('Ошибка при загрузке файла!');
    }
  };

  if (formik.values.imageUrl) {
    delete formik.errors.imageUrl;
  }

  const onClickRemoveImage = async () => {
    setProductThumbnail('');
    await axios.delete('/uploads', { data: { imagePath: `.${productThumbnail}` } });
  }; 

  const handleClickInputFiles = () => {
    if (inputFilesRef.current) {
      inputFilesRef.current.click();
    }
  };

  const handleChangeFiles = async (event: ChangeEvent<HTMLInputElement>) => {
    try {
      if (event.target.files) {
        const formData = new FormData();
        const files = event.target.files;
        for (let i = 0; i < files.length; i++) {
          formData.append('inputFiles', files[i]);
        }
        const { data } = await axios.post('/uploads/images', formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });
        const imageUrlsArr = data.files.map((file: any) => {
          return `/uploads/images/${file.originalname}`;
        });
        setProductImages(imageUrlsArr);
      } else {
        throw "files array is empty";
      }
    } catch (err) {
      console.warn(err);
      alert('Ошибка при загрузке файла!');
    }
  };

  if (formik.values.images) {
    delete formik.errors.images;
  }

  const onClickRemoveImageItem = async (imageUrl: string) => {
    setProductImages((prevState: string[]) => {
      return prevState.filter((image: string) => {
        return image !== imageUrl;
      });
    });

    await axios.delete('/uploads', { data: { imagePath: `.${imageUrl}` } });
  };

  useEffect(() => {
    formik.setFieldValue('imageUrl', productThumbnail);
  }, [productThumbnail]);

  useEffect(() => {
    formik.setFieldValue('images', productImagesStr);
  }, [productImages]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <h3>Добавление товара</h3>
      <div className={styles.form}>
        <form onSubmit={formik.handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Название товара</label>
            <input 
              id="name" 
              name="name" 
              type="text" 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className={classNames({
                [styles.borderRed]: formik.touched.name && formik.errors.name
              })}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className={styles.errorMsg}>{formik.errors.name}</div>
            ) : null}
          </div>
          <div className={classNames(styles.inputGroup, styles.productThumbnail)}>
            <div className={styles.inputHeading}>Миниатюра изображения товара</div>
            <Button 
              variant="outlined"
              onClickFunc={handleClickInputFile} 
            >
              Загрузить
            </Button>
            <input 
              ref={inputFileRef}
              type="file"
              name="inputFile"
              onChange={handleChangeFile} 
              className={styles.inputFileImage}
            />
            {productThumbnail && (
              <>
                <div className={styles.imageContainer}>
                  <div className={styles.image}>
                    <img src={productThumbnail} alt="product-thumbnail" />
                  </div>
                </div>
                <Button 
                  variant="outlined"
                  onClickFunc={onClickRemoveImage}
                >
                  Удалить
                </Button>
              </>
            )}
            <input 
              name="imageUrl" 
              type="text" 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.imageUrl}
              className={styles.imageUrl}
            />
            {formik.touched.imageUrl && formik.errors.imageUrl ? (
              <div className={styles.errorMsg}>{formik.errors.imageUrl}</div>
            ) : null}
          </div>
          <div className={classNames(styles.inputGroup, styles.productImages)}>
            <div className={styles.inputHeading}>Изображения товара</div>
            <Button 
              variant="outlined"
              onClickFunc={handleClickInputFiles} 
            >
              Загрузить
            </Button>
            <input 
              ref={inputFilesRef}
              type="file"
              multiple
              name="inputFiles"
              onChange={handleChangeFiles} 
              className={styles.inputFilesImages}
            />
            {productImages && (
              <div className={styles.imagesContainer}>
                {productImages.map((imageUrl: string, idx: number) => {
                  return (
                    <div className={styles.imageContainer} key={idx}>
                      <div className={styles.image}>
                        <img src={imageUrl} alt="product-image" />
                      </div>
                      <Button 
                        variant="outlined"
                        onClickFunc={() => onClickRemoveImageItem(imageUrl)}
                      >
                        Удалить
                      </Button>
                    </div>
                  );
                })}
              </div>
            )}
            <input
              name="images" 
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.images}
              className={styles.images} 
            />
            {formik.touched.images && formik.errors.images ? (
              <div className={styles.errorMsg}>{formik.errors.images}</div>
            ) : null}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="brand">Бренд</label>
            <input 
              id="brand" 
              name="brand" 
              type="text" 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.brand}
              className={classNames({
                [styles.borderRed]: formik.touched.brand && formik.errors.brand
              })}
            />
            {formik.touched.brand && formik.errors.brand ? (
              <div className={styles.errorMsg}>{formik.errors.brand}</div>
            ) : null}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="price">Цена, руб.</label>
            <input 
              id="price" 
              name="price" 
              type="text" 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.price}
              className={classNames({
                [styles.borderRed]: formik.touched.price && formik.errors.price
              })}
            />
            {formik.touched.price && formik.errors.price ? (
              <div className={styles.errorMsg}>{formik.errors.price}</div>
            ) : null}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="memory">Объем встроенной памяти, Гб</label>
            <input 
              id="memory" 
              name="memory" 
              type="text" 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.memory}
              className={classNames({
                [styles.borderRed]: formik.touched.memory && formik.errors.memory
              })}
            />
            {formik.touched.memory && formik.errors.memory ? (
              <div className={styles.errorMsg}>{formik.errors.memory}</div>
            ) : null}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="ram">Объем оперативной памяти, Гб</label>
            <input 
              id="ram" 
              name="ram" 
              type="text" 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.ram}
              className={classNames({
                [styles.borderRed]: formik.touched.ram && formik.errors.ram
              })}
            />
            {formik.touched.ram && formik.errors.ram ? (
              <div className={styles.errorMsg}>{formik.errors.ram}</div>
            ) : null}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="cpuCores">Количество ядер</label>
            <input 
              id="cpuCores" 
              name="cpuCores" 
              type="text" 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.cpuCores}
              className={classNames({
                [styles.borderRed]: formik.touched.cpuCores && formik.errors.cpuCores
              })}
            />
            {formik.touched.cpuCores && formik.errors.cpuCores ? (
              <div className={styles.errorMsg}>{formik.errors.cpuCores}</div>
            ) : null}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="screenSize">Диагональ экрана, дюйм</label>
            <input 
              id="screenSize" 
              name="screenSize" 
              type="text" 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.screenSize}
              className={classNames({
                [styles.borderRed]: formik.touched.screenSize && formik.errors.screenSize
              })}
            />
            {formik.touched.screenSize && formik.errors.screenSize ? (
              <div className={styles.errorMsg}>{formik.errors.screenSize}</div>
            ) : null}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="batteryCapacity">Ёмкость аккумулятора, мАч</label>
            <input 
              id="batteryCapacity" 
              name="batteryCapacity" 
              type="text" 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.batteryCapacity}
              className={classNames({
                [styles.borderRed]: formik.touched.batteryCapacity && formik.errors.batteryCapacity
              })}
            />
            {formik.touched.batteryCapacity && formik.errors.batteryCapacity ? (
              <div className={styles.errorMsg}>{formik.errors.batteryCapacity}</div>
            ) : null}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="color">Цвет товара</label>
            <select
              id="color" 
              name="color" 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.color}
              className={classNames({
                [styles.borderRed]: formik.touched.color && formik.errors.color
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
            </select>
            {formik.touched.color && formik.errors.color ? (
              <div className={styles.errorMsg}>{formik.errors.color}</div>
            ) : null}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="productCode">Артикул товара</label>
            <input 
              id="productCode" 
              name="productCode" 
              type="text" 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.productCode}
              className={classNames({
                [styles.borderRed]: formik.touched.productCode && formik.errors.productCode
              })}
            />
            {formik.touched.productCode && formik.errors.productCode ? (
              <div className={styles.errorMsg}>{formik.errors.productCode}</div>
            ) : null}
          </div>
          <div className={classNames(styles.inputGroup, styles.shortDesc)}>
            <label htmlFor="shortDesc">Краткое описание</label>
            <textarea
              id="shortDesc" 
              name="shortDesc" 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.shortDesc}
              className={classNames({ 
                [styles.borderRed]: formik.touched.shortDesc && formik.errors.shortDesc 
              })}
            ></textarea>
            {formik.touched.shortDesc && formik.errors.shortDesc ? (
              <div className={styles.errorMsg}>{formik.errors.shortDesc}</div>
            ) : null}
          </div>
          <div className={classNames(styles.inputGroup, styles.description)}>
            <label htmlFor="description">Описание</label>
            <textarea
              id="description" 
              name="description" 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
              className={classNames({ 
                [styles.borderRed]: formik.touched.description && formik.errors.description 
              })}
            ></textarea>
            {formik.touched.description && formik.errors.description ? (
              <div className={styles.errorMsg}>{formik.errors.description}</div>
            ) : null}
          </div>
          <button 
            type="submit" 
            disabled={formik.isSubmitting || !formik.isValid}
            className={classNames(styles.submit, { 
              [styles.disabled]: formik.isSubmitting || !formik.isValid
            })}
          >
            Создать товар
          </button>
          <button 
            type="button" 
            disabled={formik.isSubmitting}
            className={classNames(styles.cancel, { 
              [styles.disabled]: formik.isSubmitting 
            })}
            onClick={goToAccount}
          >
            Отмена
          </button>
        </form>
      </div>
    </div>
  );
};
