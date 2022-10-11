import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import classNames from 'classnames';
import NumberFormat from 'react-number-format';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import parse from 'html-react-parser';
import styles from './Product.module.scss';
import { CartItem } from '../../redux/cart/types';
import { useAppDispatch } from '../../redux/hooks';
import { addItem } from '../../redux/cart/cartSlice';
import { FavoriteItem } from '../../redux/favorites/types';
import { addFavoriteItem } from '../../redux/favorites/favoriteSlice';

export const Product: FC = () => {
  const dispatch = useAppDispatch();

  const [productObj, setProductObj] = useState<{[key: string]: any}>({});
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://62d96f595d893b27b2e676e7.mockapi.io/products/${id}`)
      .then((res) => {
        setProductObj(res.data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);

  const objIsNotEmpty = (obj: any) => {
    return Object.keys(obj).length !== 0;
  };

  const productObjIsNotEmpty = objIsNotEmpty(productObj);

  const galleryImages = productObjIsNotEmpty && productObj.images;

  const divsWithGalImgs = galleryImages && galleryImages.map((el: any, i: number) => {
    return (
      <div onClick={() => setIsOpen(true)} key={i}>
        <img src={galleryImages[i]} />
      </div>
    );
  });

  const specs = productObjIsNotEmpty && productObj.specifications;

  const specList = specs && specs.map((el: any, i: number) => {
    let specKeys = Object.keys(el);

    return (
      <div className={styles.spec} key={i}>
        <div className={styles.specName}>{specKeys[0]}</div>
        <div className={styles.specValue}>{el[specKeys[0]]}</div>
      </div>
    );
  });

  const onClickAddToCart = () => {
    const item: CartItem = {
      id: productObj.id.toString(),
      name: productObj.name,
      price: productObj.price,
      imageUrl: productObj.imageUrl,
      productCode: productObj.productCode,
      count: 0,
    };
    dispatch(addItem(item));
  };

  const onClickAddToFavorites = () => {
    const item: FavoriteItem = {
      id: productObj.id.toString(),
      name: productObj.name,
      price: productObj.price,
      imageUrl: productObj.imageUrl,
      count: 0,
    };
    dispatch(addFavoriteItem(item));
  };

  return (
    <>
      <div className={styles.productContainer}>
        <div className={styles.productImage}>
          <div>
            <Carousel showIndicators={false} showStatus={false}>
              {divsWithGalImgs}
            </Carousel>
          </div>
          <div>
            {isOpen && (
              <Lightbox
                mainSrc={galleryImages[photoIndex]}
                nextSrc={galleryImages[(photoIndex + 1) % galleryImages.length]}
                prevSrc={galleryImages[(photoIndex + galleryImages.length - 1) % galleryImages.length]}
                onCloseRequest={() => setIsOpen(false)}
                onMovePrevRequest={
                  () => setPhotoIndex((photoIndex + galleryImages.length - 1) % galleryImages.length)
                }
                onMoveNextRequest={
                  () => setPhotoIndex((photoIndex + 1) % galleryImages.length)
                }
              />
            )}
          </div>
        </div>
        <div className={styles.mainData}>
          <h1>{productObj.name}</h1>
          <div className={styles.shortSpecs}>
            {productObj.shortDesc}
          </div>
          <div className={styles.productCode}>
            Код товара: {productObj.productCode}
          </div>
          <div className={styles.icons}>
            <div className={classNames(styles.rating, "tooltip", styles.tooltip)}>
              <i className="fa-solid fa-star"></i>
              <span>{productObj.rating}</span>
              <div className={classNames(styles.tooltipText, "tooltipText")}>
                Рейтинг {productObj.rating} из 5
              </div>
            </div>
            <div className={classNames(styles.testimonials, "tooltip", styles.tooltip)}>
              <i className="fa-solid fa-comment"></i>
              <span>{productObj.testimonials}</span>
              <div className={classNames("tooltipText", styles.tooltipText)}>
                {productObj.testimonials} отзывов
              </div>
            </div>
          </div>
          <div className={styles.priceAndBuy}>
            <div className={styles.price}>
              <div className={styles.priceValue}>
                <NumberFormat 
                  value={productObj.price} 
                  displayType='text' 
                  thousandSeparator=' '
                />
              </div>
              <div className={styles.currency}>₽</div>
            </div>
            <div className={styles.addToCartAndFavorites}>
              <div className={styles.addToCart}>
                <button onClick={onClickAddToCart}>
                  <div>
                    <span className={styles.cartIcon}>
                      <i className="fa-solid fa-cart-shopping"></i>
                    </span>
                    <span className={styles.toCart}>В корзину</span>
                  </div>
                </button>
              </div>
              <div 
                className={classNames(styles.favorites, "tooltip")}
                onClick={onClickAddToFavorites}
              >
                <i className="fa-solid fa-heart"></i>
                <div className="tooltipText">Добавить в избранное</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <Tabs>
          <TabList>
            <Tab id="specs-title">Характеристики</Tab>
            <Tab>Описание</Tab>
          </TabList>
          <TabPanel>
            <div className={styles.specs}>
              {specList}
            </div>
          </TabPanel>
          <TabPanel>
            <div className={styles.productDescription}>
              {productObjIsNotEmpty && parse(productObj.description)}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};
