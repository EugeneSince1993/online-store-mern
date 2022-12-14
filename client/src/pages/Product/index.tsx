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
import { ICartItem } from '../../redux/cart/types';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addItem } from '../../redux/cart/cartSlice';
import { IFavoriteItem } from '../../redux/favorites/types';
import { addFavoriteItem } from '../../redux/favorites/favoriteSlice';
import { fetchProductById } from '../../redux/product/asyncActions';
import { selectProduct } from '../../redux/product/selectors';
import { useSelector } from 'react-redux';
import { selectCartItemById } from '../../redux/cart/selectors';
import { selectFavoriteItemById } from '../../redux/favorites/selectors';
import MediaQuery from 'react-responsive';
import { GallerySkeleton } from './Skeletons/GallerySkeleton';
import { MainDataSkeleton } from './Skeletons/MainDataSkeleton';
import { InfoSkeleton } from './Skeletons/InfoSkeleton';
import { GallerySkeleton320 } from './Skeletons/GallerySkeleton320';
import { GallerySkeleton370 } from './Skeletons/GallerySkeleton370';
import { MainDataSkeletonSmartphone } from './Skeletons/MainDataSkeletonSmartphone';
import { GallerySkeletonTablet } from './Skeletons/GallerySkeletonTablet';
import { MainDataSkeletonTablet } from './Skeletons/MainDataSkeletonTablet';
// import { Rating } from '../../components/Rating';
// import { Testimonial } from '../../components';

export const Product: FC = () => {
  const dispatch = useAppDispatch();
  const { currentProduct, isLoading } = useAppSelector(selectProduct);
  let { id } = useParams();
  let idStr = id!.toString();
  const cartItem = useSelector(selectCartItemById(idStr));
  const favoriteItem = useSelector(selectFavoriteItemById(idStr));

  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
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

  let productColor: string;

  switch (currentProduct.color) {
    case "white":
      productColor = "??????????";
      break;
    case "black":
      productColor = "????????????";
      break;
    case "gray":
      productColor = "??????????";
      break;
    case "blue":
      productColor = "??????????";
      break;
    case "red":
      productColor = "??????????????";
      break;
    case "pink":
      productColor = "??????????????";
      break;
    case "green":
      productColor = "??????????????";
      break;
    case "yellow":
      productColor = "????????????";
      break;
    default:
      productColor = "??????????";
  }

  const specs = [
    { "?????????????????? ????????????, ????????": currentProduct.screenSize },
    { "?????????? ???????????????????? ????????????, ????": currentProduct.memory },
    { "?????????? ?????????????????????? ????????????, ????": currentProduct.ram },
    { "???????????????????? ????????": currentProduct.cpuCores },
    { "?????????????? ????????????????????????, ??????": currentProduct.batteryCapacity },
    { "????????": productColor },
  ];

  const specList = currentProductIsNotEmpty && specs.map((el: any, i: number) => {
    let specKeys = Object.keys(el);

    return (
      <div className={styles.spec} key={i}>
        <div className={styles.specName}>{specKeys[0]}</div>
        <div className={styles.specValue}>{el[specKeys[0]]}</div>
      </div>
    );
  });

  const onClickAddToCart = () => {
    const item: ICartItem = {
      _id: currentProduct._id,
      name: currentProduct.name,
      price: currentProduct.price,
      imageUrl: currentProduct.imageUrl,
      productCode: currentProduct.productCode,
      count: 0,
    };
    dispatch(addItem(item));
  };

  const onClickAddToFavorites = () => {
    const item: IFavoriteItem = {
      _id: currentProduct._id,
      name: currentProduct.name,
      price: currentProduct.price,
      imageUrl: currentProduct.imageUrl,
      productCode: currentProduct.productCode,
      count: 0,
    };
    dispatch(addFavoriteItem(item));
  };

  return (
    <>
      <div className={styles.productContainer}>
        <div className={styles.productImage}>
          {isLoading ? (
            <>
              <MediaQuery maxWidth={369}>
                <GallerySkeleton320 />
              </MediaQuery>
              <MediaQuery minWidth={370} maxWidth={699}>
                <GallerySkeleton370 />
              </MediaQuery>
              <MediaQuery minWidth={700} maxWidth={1199}>
                <GallerySkeletonTablet />
              </MediaQuery>              
              <MediaQuery minWidth={1200}>
                <GallerySkeleton />
              </MediaQuery>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
        <div className={styles.mainData}>
          {isLoading ? (
            <>
              <MediaQuery maxWidth={699}>
                <MainDataSkeletonSmartphone />
              </MediaQuery>
              <MediaQuery minWidth={700} maxWidth={1199}>
                <MainDataSkeletonTablet />
              </MediaQuery>
              <MediaQuery minWidth={1200}>
                <MainDataSkeleton />
              </MediaQuery>
            </>
          ) : (
            <>
              <h1>{currentProduct.name}</h1>
              <div className={styles.shortSpecs}>
                {currentProduct.shortDesc}
              </div>
              <div className={styles.productCode}>
                ?????? ????????????: {currentProduct.productCode}
              </div>
              <div className={styles.icons}>
                <div className={classNames(styles.rating, "tooltip", styles.tooltip)}>
                  <i className="fa-solid fa-star"></i>
                  <span>{currentProduct.rating}</span>
                  <div className={classNames(styles.tooltipText, "tooltipText")}>
                    ?????????????? {currentProduct.rating} ???? 5
                  </div>
                </div>
                <div className={classNames(styles.testimonials, "tooltip", styles.tooltip)}>
                  <i className="fa-solid fa-comment"></i>
                  <span>{currentProduct.testimonials}</span>
                  <div className={classNames("tooltipText", styles.tooltipText)}>
                    {currentProduct.testimonials} ??????????????
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
                  <div className={styles.currency}>???</div>
                </div>
                <div className={styles.addToCartAndFavorites}>
                  <div className={styles.addToCart}>
                    <button onClick={onClickAddToCart}>
                      {cartItem ? (
                        <div className={styles.toCartInner}>
                          <span className={styles.cartIcon}>
                            <i className="fa-solid fa-check"></i>
                          </span>
                          <span className={styles.toCart}>?? ??????????????</span>
                        </div>
                      ) : (
                        <div className={styles.toCartInner}>
                          <span className={styles.cartIcon}>
                            <i className="fa-solid fa-cart-shopping"></i>
                          </span>
                          <span className={styles.toCart}>?? ??????????????</span>
                        </div>                    
                      )}
                    </button>
                  </div>
                  <div 
                    className={classNames(styles.favorites, "tooltip")}
                    onClick={onClickAddToFavorites}
                  >
                    {favoriteItem ? (
                      <div className={styles.favoritesInner}>
                        <i className={classNames("fa-solid fa-heart", styles.added)}></i>
                        <div className={classNames("tooltipText", styles.tooltipText)}>
                          ?????????????????? ?? ??????????????????
                        </div>
                      </div>
                    ) : (
                      <div className={styles.favoritesInner}>
                        <i className={classNames("fa-solid fa-heart", styles.add)}></i>
                        <div className={classNames("tooltipText", styles.tooltipText)}>
                          ???????????????? ?? ??????????????????
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className={styles.info}>
        {isLoading ? (
          <InfoSkeleton />
        ) : (
          <Tabs>
            <TabList>
              <Tab id="specs-title">????????????????????????????</Tab>
              <Tab>????????????????</Tab>
              {/* <Tab>????????????</Tab> */}
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
            {/* <TabPanel>
              <div className={styles.productTestimonials}>
                <Testimonial />
                <Testimonial />
                <Testimonial />
              </div>
            </TabPanel> */}
          </Tabs>
        )}
      </div>
    </>
  );
};
