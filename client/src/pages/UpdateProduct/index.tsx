import { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
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

  const goToAccount = () => {
    navigate('/account');
  };

  const objIsNotEmpty = (obj: any) => {
    return Object.keys(obj).length !== 0;
  };
  const currentProductIsNotEmpty = objIsNotEmpty(currentProduct);

  const inputFileRef = useRef<HTMLInputElement>(null);
  const inputFilesRef = useRef<HTMLInputElement>(null);
  const [productThumbnail, setProductThumbnail] = useState<string>(
    currentProductIsNotEmpty ? currentProduct.imageUrl : ''
  );
  const [productImages, setProductImages] = useState<any>(
    currentProductIsNotEmpty ? currentProduct.images : []
  );
  const productImagesStr = productImages.join(' ');

  const formik = useFormik({
    initialValues: { 
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
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, '?????????????? 3 ??????????????')
        .required('???????????????????????? ????????'),
      imageUrl: Yup.string()
        .required('???????????????? ?????????????????? ?????????????????????? ????????????'),
      images: Yup.string()
        .required('???????????????? ?????????????????????? ????????????'),
      brand: Yup.string()
        .min(3, '?????????????? 3 ??????????????')
        .required('???????????????????????? ????????'), 
      price: Yup.number()
        .min(4, '?????????????? 4 ??????????????')
        .required('???????????????????????? ????????'),
      memory: Yup.number()
        .min(1, '?????????????? 1 ????????????')
        .required('???????????????????????? ????????'),
      ram: Yup.number()
        .min(1, '?????????????? 1 ????????????')
        .required('???????????????????????? ????????'),
      cpuCores: Yup.number()
        .min(1, '?????????????? 1 ????????????')
        .required('???????????????????????? ????????'),
      screenSize: Yup.number()
        .min(1, '?????????????? 1 ????????????')
        .required('???????????????????????? ????????'),
      batteryCapacity: Yup.number()
        .min(4, '?????????????? 4 ??????????????')
        .required('???????????????????????? ????????'),
      color: Yup.string()
        .min(3, '?????????????? 3 ??????????????')
        .required('???????????????????????? ????????'),
      productCode: Yup.number()
        .min(5, '?????????????? 5 ????????????????')
        .required('???????????????????????? ????????'),
      shortDesc: Yup.string()
        .min(10, '?????????????? 10 ????????????????')
        .required('???????????????????????? ????????'),
      description: Yup.string()
        .min(30, '?????????????? 30 ????????????????')
        .required('???????????????????????? ????????'),
    }),
    onSubmit: async (values: IProductParams, { setSubmitting }) => {
      const dataForUpdating: IProductParamsId = { ...values, id };

      const data: any = await dispatch(updateProductById(dataForUpdating));

      if (!data.payload.success) {
        return alert('???? ?????????????? ???????????????? ??????????');
      } else {
        alert(`?????????? "${values.name}" ??????????????`);
      }

      goToAccount();
      setSubmitting(false);
    },
  });  

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchProductById(id));
  }, []);

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
        formik.touched.imageUrl = true;
      } else {
        throw "files array is empty";
      }
    } catch (err) {
      console.warn(err);
      alert('???????????? ?????? ???????????????? ??????????!');
    }
  };  

  if (formik.values.imageUrl) {
    delete formik.errors.imageUrl;
  }

  const onClickRemoveImage = async () => {
    setProductThumbnail('');
    await axios.delete('/uploads', { data: { imagePath: `.${productThumbnail}` } });
    formik.touched.imageUrl = true;
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
          return `/api/uploads/images/${file.originalname}`;
        });
        setProductImages(imageUrlsArr);
        formik.touched.images = true;
      } else {
        throw "files array is empty";
      }
    } catch (err) {
      console.warn(err);
      alert('???????????? ?????? ???????????????? ??????????!');
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
    formik.touched.images = true;
  };

  useEffect(() => {
    formik.setFieldValue('imageUrl', productThumbnail);
  }, [productThumbnail]);

  useEffect(() => {
    formik.setFieldValue('images', productImagesStr);
  }, [productImages]);

  useEffect(() => {
    setProductThumbnail(currentProductIsNotEmpty ? currentProduct.imageUrl : '');
    setProductImages(currentProductIsNotEmpty ? currentProduct.images : []);

    formik.setFieldValue('imageUrl', currentProductIsNotEmpty ? productThumbnail : '');
    formik.setFieldValue('images', currentProductIsNotEmpty ? productImagesStr : '');
    formik.setFieldValue('name', currentProductIsNotEmpty ? currentProduct.name : '');
    formik.setFieldValue('price', currentProductIsNotEmpty ? currentProduct.price : '');
    formik.setFieldValue('brand', currentProductIsNotEmpty ? currentProduct.brand : '');
    formik.setFieldValue('memory', currentProductIsNotEmpty ? currentProduct.memory : '');
    formik.setFieldValue('ram', currentProductIsNotEmpty ? currentProduct.ram : '');
    formik.setFieldValue('cpuCores', currentProductIsNotEmpty ? currentProduct.cpuCores : '');
    formik.setFieldValue('screenSize', currentProductIsNotEmpty ? currentProduct.screenSize : '');
    formik.setFieldValue('batteryCapacity', currentProductIsNotEmpty ? currentProduct.batteryCapacity : '');
    formik.setFieldValue('color', currentProductIsNotEmpty ? currentProduct.color : '');
    formik.setFieldValue('productCode', currentProductIsNotEmpty ? currentProduct.productCode : '');
    formik.setFieldValue('description', currentProductIsNotEmpty ? currentProduct.description : '');
    formik.setFieldValue('shortDesc', currentProductIsNotEmpty ? currentProduct.shortDesc : '');
  }, [currentProduct]);

  return (
    <div>
      <h3>?????????????????? ????????????</h3>
      <div className={styles.form}>
        <form onSubmit={formik.handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">???????????????? ????????????</label>
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
              <div className={styles.errorMsg}><>{formik.errors.name}</></div>
            ) : null}
          </div>
          <div className={classNames(styles.inputGroup, styles.productThumbnail)}>
            <div className={styles.inputHeading}>?????????????????? ?????????????????????? ????????????</div>
            <Button 
              variant="outlined"
              onClickFunc={handleClickInputFile} 
            >
              ??????????????????
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
                  ??????????????
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
              <div className={styles.errorMsg}><>{formik.errors.imageUrl}</></div>
            ) : null}
          </div>
          <div className={classNames(styles.inputGroup, styles.productImages)}>
            <div className={styles.inputHeading}>?????????????????????? ????????????</div>
            <Button 
              variant="outlined"
              onClickFunc={handleClickInputFiles} 
            >
              ??????????????????
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
                        ??????????????
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
              <div className={styles.errorMsg}><>{formik.errors.images}</></div>
            ) : null}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="brand">??????????</label>
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
              <div className={styles.errorMsg}><>{formik.errors.brand}</></div>
            ) : null}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="price">????????, ??????.</label>
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
              <div className={styles.errorMsg}><>{formik.errors.price}</></div>
            ) : null}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="memory">?????????? ???????????????????? ????????????, ????</label>
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
              <div className={styles.errorMsg}><>{formik.errors.memory}</></div>
            ) : null}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="ram">?????????? ?????????????????????? ????????????, ????</label>
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
              <div className={styles.errorMsg}><>{formik.errors.ram}</></div>
            ) : null}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="cpuCores">???????????????????? ????????</label>
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
              <div className={styles.errorMsg}><>{formik.errors.cpuCores}</></div>
            ) : null}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="screenSize">?????????????????? ????????????, ????????</label>
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
              <div className={styles.errorMsg}><>{formik.errors.screenSize}</></div>
            ) : null}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="batteryCapacity">?????????????? ????????????????????????, ??????</label>
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
              <div className={styles.errorMsg}><>{formik.errors.batteryCapacity}</></div>
            ) : null}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="color">???????? ????????????</label>
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
              <option value="">???????????????? ????????</option>
              <option value="white">??????????</option>
              <option value="black">????????????</option>
              <option value="gray">??????????</option>
              <option value="blue">??????????</option>
              <option value="red">??????????????</option>
              <option value="pink">??????????????</option>
              <option value="green">??????????????</option>
              <option value="yellow">????????????</option>
            </select>
            {formik.touched.color && formik.errors.color ? (
              <div className={styles.errorMsg}><>{formik.errors.color}</></div>
            ) : null}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="productCode">?????????????? ????????????</label>
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
              <div className={styles.errorMsg}><>{formik.errors.productCode}</></div>
            ) : null}
          </div>
          <div className={classNames(styles.inputGroup, styles.shortDesc)}>
            <label htmlFor="shortDesc">?????????????? ????????????????</label>
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
              <div className={styles.errorMsg}><>{formik.errors.shortDesc}</></div>
            ) : null}
          </div>
          <div className={classNames(styles.inputGroup, styles.description)}>
            <label htmlFor="description">????????????????</label>
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
              <div className={styles.errorMsg}><>{formik.errors.description}</></div>
            ) : null}
          </div>
          <button 
            type="submit" 
            disabled={formik.isSubmitting || !objIsNotEmpty(formik.touched) || !formik.isValid}
            className={classNames(styles.submit, { 
              [styles.disabled]: formik.isSubmitting || !objIsNotEmpty(formik.touched) || !formik.isValid
            })}
          >
            ???????????????? ??????????
          </button>
          <button 
            type="button" 
            disabled={formik.isSubmitting}
            className={classNames(styles.cancel, { 
              [styles.disabled]: formik.isSubmitting 
            })}
            onClick={goToAccount}
          >
            ????????????
          </button>
        </form>
      </div>
    </div>
  );
};
