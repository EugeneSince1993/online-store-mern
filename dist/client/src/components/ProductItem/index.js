"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductItem = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_router_dom_1 = require("react-router-dom");
const react_number_format_1 = __importDefault(require("react-number-format"));
const ProductItem_module_scss_1 = __importDefault(require("./ProductItem.module.scss"));
const hooks_1 = require("../../redux/hooks");
const cartSlice_1 = require("../../redux/cart/cartSlice");
const favoriteSlice_1 = require("../../redux/favorites/favoriteSlice");
const ProductItem = ({ phoneImage, rating, testimonials, productName, priceValue, productId, productCode }) => {
    const dispatch = (0, hooks_1.useAppDispatch)();
    const onClickAddToCart = () => {
        const item = {
            id: productId.toString(),
            name: productName,
            price: priceValue,
            imageUrl: phoneImage,
            productCode: productCode,
            count: 0,
        };
        dispatch((0, cartSlice_1.addItem)(item));
    };
    const onClickAddToFavorites = () => {
        const item = {
            id: productId.toString(),
            name: productName,
            price: priceValue,
            imageUrl: phoneImage,
            count: 0,
        };
        dispatch((0, favoriteSlice_1.addFavoriteItem)(item));
    };
    return (<div className={ProductItem_module_scss_1.default.productItem}>
      <div className={ProductItem_module_scss_1.default.productItemInner}>
        <react_router_dom_1.NavLink to={`/products/${productId}`} className={ProductItem_module_scss_1.default.image}>
          <img src={phoneImage}/>
        </react_router_dom_1.NavLink>
        <div className={ProductItem_module_scss_1.default.icons}>
          <div className={(0, classnames_1.default)(ProductItem_module_scss_1.default.rating, "tooltip", ProductItem_module_scss_1.default.tooltip)}>
            <i className="fa-solid fa-star"></i>
            <span>{rating}</span>
            <div className={(0, classnames_1.default)("tooltipText", ProductItem_module_scss_1.default.tooltipText)}>
              Рейтинг {rating} из 5
            </div>
          </div>
          <div className={(0, classnames_1.default)(ProductItem_module_scss_1.default.testimonials, "tooltip", ProductItem_module_scss_1.default.tooltip)}>
            <i className="fa-solid fa-comment"></i>
            <span>{testimonials}</span>
            <div className={(0, classnames_1.default)("tooltipText", ProductItem_module_scss_1.default.tooltipText)}>
              {testimonials} отзывов
            </div>
          </div>
          <div className={(0, classnames_1.default)(ProductItem_module_scss_1.default.favorites, "tooltip", ProductItem_module_scss_1.default.tooltip)} onClick={onClickAddToFavorites}>
            <i className="fa-solid fa-heart"></i>
            <div className={(0, classnames_1.default)("tooltipText", ProductItem_module_scss_1.default.tooltipText)}>
              Добавить в избранное
            </div>
          </div>
        </div>
        <react_router_dom_1.NavLink to={`/products/${productId}`} className={ProductItem_module_scss_1.default.productLink}>
          {productName}
        </react_router_dom_1.NavLink>
        <div className={ProductItem_module_scss_1.default.buyContainer}>
          <div className={ProductItem_module_scss_1.default.buy}>
            <react_router_dom_1.NavLink to={`/products/${productId}`} className={ProductItem_module_scss_1.default.price}>
              <div className={ProductItem_module_scss_1.default.priceValue}>
                <react_number_format_1.default value={priceValue} displayType='text' thousandSeparator=' '/>
              </div>
              <div className={ProductItem_module_scss_1.default.currency}>₽</div>
            </react_router_dom_1.NavLink>
            <div className={ProductItem_module_scss_1.default.addToCart}>
              <button className="tooltip" onClick={onClickAddToCart}>
                <i className="fa-solid fa-cart-shopping"></i>
                <div className="tooltipText">Добавить в корзину</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>);
};
exports.ProductItem = ProductItem;
//# sourceMappingURL=index.js.map