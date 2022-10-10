"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const react_1 = require("react");
const axios_1 = __importDefault(require("axios"));
const react_router_dom_1 = require("react-router-dom");
require("react-responsive-carousel/lib/styles/carousel.min.css");
const react_responsive_carousel_1 = require("react-responsive-carousel");
const react_image_lightbox_1 = __importDefault(require("react-image-lightbox"));
require("react-image-lightbox/style.css");
const classnames_1 = __importDefault(require("classnames"));
const react_number_format_1 = __importDefault(require("react-number-format"));
const react_tabs_1 = require("react-tabs");
require("react-tabs/style/react-tabs.css");
const html_react_parser_1 = __importDefault(require("html-react-parser"));
const Product_module_scss_1 = __importDefault(require("./Product.module.scss"));
const hooks_1 = require("../../redux/hooks");
const cartSlice_1 = require("../../redux/cart/cartSlice");
const favoriteSlice_1 = require("../../redux/favorites/favoriteSlice");
const Product = () => {
    const dispatch = (0, hooks_1.useAppDispatch)();
    const [productObj, setProductObj] = (0, react_1.useState)({});
    const [photoIndex, setPhotoIndex] = (0, react_1.useState)(0);
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const { id } = (0, react_router_dom_1.useParams)();
    (0, react_1.useEffect)(() => {
        axios_1.default
            .get(`https://62d96f595d893b27b2e676e7.mockapi.io/products/${id}`)
            .then((res) => {
            setProductObj(res.data);
        })
            .catch((err) => {
            console.warn(err);
        });
    }, []);
    const objIsNotEmpty = (obj) => {
        return Object.keys(obj).length !== 0;
    };
    const productObjIsNotEmpty = objIsNotEmpty(productObj);
    const galleryImages = productObjIsNotEmpty && productObj.images;
    const divsWithGalImgs = galleryImages && galleryImages.map((el, i) => {
        return (<div onClick={() => setIsOpen(true)} key={i}>
        <img src={galleryImages[i]}/>
      </div>);
    });
    const specs = productObjIsNotEmpty && productObj.specifications;
    const specList = specs && specs.map((el, i) => {
        let specKeys = Object.keys(el);
        return (<div className={Product_module_scss_1.default.spec} key={i}>
        <div className={Product_module_scss_1.default.specName}>{specKeys[0]}</div>
        <div className={Product_module_scss_1.default.specValue}>{el[specKeys[0]]}</div>
      </div>);
    });
    const onClickAddToCart = () => {
        const item = {
            id: productObj.id.toString(),
            name: productObj.name,
            price: productObj.price,
            imageUrl: productObj.imageUrl,
            productCode: productObj.productCode,
            count: 0,
        };
        dispatch((0, cartSlice_1.addItem)(item));
    };
    const onClickAddToFavorites = () => {
        const item = {
            id: productObj.id.toString(),
            name: productObj.name,
            price: productObj.price,
            imageUrl: productObj.imageUrl,
            count: 0,
        };
        dispatch((0, favoriteSlice_1.addFavoriteItem)(item));
    };
    return (<>
      <div className={Product_module_scss_1.default.productContainer}>
        <div className={Product_module_scss_1.default.productImage}>
          <div>
            <react_responsive_carousel_1.Carousel showIndicators={false} showStatus={false}>
              {divsWithGalImgs}
            </react_responsive_carousel_1.Carousel>
          </div>
          <div>
            {isOpen && (<react_image_lightbox_1.default mainSrc={galleryImages[photoIndex]} nextSrc={galleryImages[(photoIndex + 1) % galleryImages.length]} prevSrc={galleryImages[(photoIndex + galleryImages.length - 1) % galleryImages.length]} onCloseRequest={() => setIsOpen(false)} onMovePrevRequest={() => setPhotoIndex((photoIndex + galleryImages.length - 1) % galleryImages.length)} onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % galleryImages.length)}/>)}
          </div>
        </div>
        <div className={Product_module_scss_1.default.mainData}>
          <h1>{productObj.name}</h1>
          <div className={Product_module_scss_1.default.shortSpecs}>
            {productObj.shortDesc}
          </div>
          <div className={Product_module_scss_1.default.productCode}>
            Код товара: {productObj.productCode}
          </div>
          <div className={Product_module_scss_1.default.icons}>
            <div className={(0, classnames_1.default)(Product_module_scss_1.default.rating, "tooltip", Product_module_scss_1.default.tooltip)}>
              <i className="fa-solid fa-star"></i>
              <span>{productObj.rating}</span>
              <div className={(0, classnames_1.default)(Product_module_scss_1.default.tooltipText, "tooltipText")}>
                Рейтинг {productObj.rating} из 5
              </div>
            </div>
            <div className={(0, classnames_1.default)(Product_module_scss_1.default.testimonials, "tooltip", Product_module_scss_1.default.tooltip)}>
              <i className="fa-solid fa-comment"></i>
              <span>{productObj.testimonials}</span>
              <div className={(0, classnames_1.default)("tooltipText", Product_module_scss_1.default.tooltipText)}>
                {productObj.testimonials} отзывов
              </div>
            </div>
          </div>
          <div className={Product_module_scss_1.default.priceAndBuy}>
            <div className={Product_module_scss_1.default.price}>
              <div className={Product_module_scss_1.default.priceValue}>
                <react_number_format_1.default value={productObj.price} displayType='text' thousandSeparator=' '/>
              </div>
              <div className={Product_module_scss_1.default.currency}>₽</div>
            </div>
            <div className={Product_module_scss_1.default.addToCartAndFavorites}>
              <div className={Product_module_scss_1.default.addToCart}>
                <button onClick={onClickAddToCart}>
                  <div>
                    <span className={Product_module_scss_1.default.cartIcon}>
                      <i className="fa-solid fa-cart-shopping"></i>
                    </span>
                    <span className={Product_module_scss_1.default.toCart}>В корзину</span>
                  </div>
                </button>
              </div>
              <div className={(0, classnames_1.default)(Product_module_scss_1.default.favorites, "tooltip")} onClick={onClickAddToFavorites}>
                <i className="fa-solid fa-heart"></i>
                <div className="tooltipText">Добавить в избранное</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={Product_module_scss_1.default.info}>
        <react_tabs_1.Tabs>
          <react_tabs_1.TabList>
            <react_tabs_1.Tab id="specs-title">Характеристики</react_tabs_1.Tab>
            <react_tabs_1.Tab>Описание</react_tabs_1.Tab>
          </react_tabs_1.TabList>
          <react_tabs_1.TabPanel>
            <div className={Product_module_scss_1.default.specs}>
              {specList}
            </div>
          </react_tabs_1.TabPanel>
          <react_tabs_1.TabPanel>
            <div className={Product_module_scss_1.default.productDescription}>
              {productObjIsNotEmpty && (0, html_react_parser_1.default)(productObj.description)}
            </div>
          </react_tabs_1.TabPanel>
        </react_tabs_1.Tabs>
      </div>
    </>);
};
exports.Product = Product;
//# sourceMappingURL=index.js.map