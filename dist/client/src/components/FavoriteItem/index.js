"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteItem = void 0;
const react_number_format_1 = __importDefault(require("react-number-format"));
const hooks_1 = require("../../redux/hooks");
const react_router_dom_1 = require("react-router-dom");
const classnames_1 = __importDefault(require("classnames"));
const FavoriteItem_module_scss_1 = __importDefault(require("./FavoriteItem.module.scss"));
const favoriteSlice_1 = require("../../redux/favorites/favoriteSlice");
const cartSlice_1 = require("../../redux/cart/cartSlice");
;
const FavoriteItem = ({ id, name, price, imageUrl, productCode }) => {
    const dispatch = (0, hooks_1.useAppDispatch)();
    const onClickRemove = () => {
        if (window.confirm('Вы действительно хотите удалить товар?')) {
            dispatch((0, favoriteSlice_1.removeFavoriteItem)(id));
        }
    };
    const onClickAddToCart = () => {
        const item = {
            id: id.toString(),
            name: name,
            price: price,
            imageUrl: imageUrl,
            productCode: productCode,
            count: 0,
        };
        dispatch((0, cartSlice_1.addItem)(item));
    };
    return (<div className={FavoriteItem_module_scss_1.default.productItem}>
      <react_router_dom_1.NavLink to={`/products/${id}`} className={FavoriteItem_module_scss_1.default.thumbnail}>
        <img src={imageUrl}/>
      </react_router_dom_1.NavLink>
      <div className={FavoriteItem_module_scss_1.default.dataContainer}>
        <div className={FavoriteItem_module_scss_1.default.productInfo}>
          <react_router_dom_1.NavLink to={`/products/${id}`} className={FavoriteItem_module_scss_1.default.productName}>
            {name}
          </react_router_dom_1.NavLink>
        </div>
        <div className={FavoriteItem_module_scss_1.default.price}>
          <div className={FavoriteItem_module_scss_1.default.priceValue}>
            <react_number_format_1.default value={price} displayType='text' thousandSeparator=' '/>
          </div>
          <div className={FavoriteItem_module_scss_1.default.currency}>₽</div>
        </div>
        <div className={FavoriteItem_module_scss_1.default.addToCart}>
          <button onClick={onClickAddToCart}>
            <div>
              <span className={FavoriteItem_module_scss_1.default.cartIcon}>
                <i className="fa-solid fa-cart-shopping"></i>
              </span>
              <span className={FavoriteItem_module_scss_1.default.toCart}>В корзину</span>
            </div>
          </button>
        </div>
        <div className={(0, classnames_1.default)(FavoriteItem_module_scss_1.default.deleteProduct, "tooltip", FavoriteItem_module_scss_1.default.tooltip)}>
          <div onClick={onClickRemove}>
            <i className="fa-solid fa-trash"></i>
            <div className={(0, classnames_1.default)("tooltipText", FavoriteItem_module_scss_1.default.tooltipText)}>
              Удалить
            </div>
          </div>
        </div>
      </div>
    </div>);
};
exports.FavoriteItem = FavoriteItem;
//# sourceMappingURL=index.js.map