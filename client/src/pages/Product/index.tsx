import { FC, useEffect, useState } from 'react';
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
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addItem } from '../../redux/cart/cartSlice';
import { FavoriteItem } from '../../redux/favorites/types';
import { addFavoriteItem } from '../../redux/favorites/favoriteSlice';
import { fetchProductById } from '../../redux/product/asyncActions';
import { selectProduct } from '../../redux/product/selectors';

export const Product: FC = () => {
  const dispatch = useAppDispatch();
  const { currentProduct } = useAppSelector(selectProduct);

  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, []);

  const objIsNotEmpty = (obj: any) => {
    return Object.keys(obj).length !== 0;
  };

  const currentProductIsNotEmpty = objIsNotEmpty(currentProduct);

  const galleryImages = currentProductIsNotEmpty && currentProduct.images;

  const divsWithGalImgs = galleryImages && galleryImages.map((el: any, i: number) => {
    return (
      <div onClick={() => setIsOpen(true)} key={i}>
        <img src={galleryImages[i]} />
      </div>
    );
  });

  const specs = currentProductIsNotEmpty && currentProduct.specifications;

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
      id: currentProduct._id,
      name: currentProduct.name,
      price: currentProduct.price,
      imageUrl: currentProduct.imageUrl,
      productCode: currentProduct.productCode,
      count: 0,
    };
    dispatch(addItem(item));
  };

  const onClickAddToFavorites = () => {
    const item: FavoriteItem = {
      id: currentProduct._id,
      name: currentProduct.name,
      price: currentProduct.price,
      imageUrl: currentProduct.imageUrl,
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
          <h1>{currentProduct.name}</h1>
          <div className={styles.shortSpecs}>
            {currentProduct.shortDesc}
          </div>
          <div className={styles.productCode}>
            Код товара: {currentProduct.productCode}
          </div>
          <div className={styles.icons}>
            <div className={classNames(styles.rating, "tooltip", styles.tooltip)}>
              <i className="fa-solid fa-star"></i>
              <span>{currentProduct.rating}</span>
              <div className={classNames(styles.tooltipText, "tooltipText")}>
                Рейтинг {currentProduct.rating} из 5
              </div>
            </div>
            <div className={classNames(styles.testimonials, "tooltip", styles.tooltip)}>
              <i className="fa-solid fa-comment"></i>
              <span>{currentProduct.testimonials}</span>
              <div className={classNames("tooltipText", styles.tooltipText)}>
                {currentProduct.testimonials} отзывов
              </div>
            </div>
          </div>
          <div className={styles.priceAndBuy}>
            <div className={styles.price}>
              <div className={styles.priceValue}>
                <NumberFormat 
                  value={currentProduct.price} 
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
              {currentProductIsNotEmpty && parse(currentProduct.description)}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};
