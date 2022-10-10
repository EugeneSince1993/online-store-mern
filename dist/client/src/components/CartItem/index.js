"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartItem = void 0;
const react_number_format_1 = __importDefault(require("react-number-format"));
const hooks_1 = require("../../redux/hooks");
const react_router_dom_1 = require("react-router-dom");
const classnames_1 = __importDefault(require("classnames"));
const cartSlice_1 = require("../../redux/cart/cartSlice");
const CartItem_module_scss_1 = __importDefault(require("./CartItem.module.scss"));
;
const CartItem = ({ id, name, price, imageUrl, count, productCode }) => {
    const dispatch = (0, hooks_1.useAppDispatch)();
    const onClickAdd = () => {
        dispatch((0, cartSlice_1.addItem)({
            id,
        }));
    };
    const onClickSubtract = () => {
        dispatch((0, cartSlice_1.subtractItem)(id));
    };
    const onClickRemove = () => {
        if (window.confirm('Вы действительно хотите удалить товар?')) {
            dispatch((0, cartSlice_1.removeItem)(id));
        }
    };
    return (<div className={CartItem_module_scss_1.default.productItem}>
      <react_router_dom_1.NavLink to={`/products/${id}`} className={CartItem_module_scss_1.default.thumbnail}>
        <img src={imageUrl}/>
      </react_router_dom_1.NavLink>
      <div className={CartItem_module_scss_1.default.dataContainer}>
        <div className={CartItem_module_scss_1.default.productInfo}>
          <react_router_dom_1.NavLink to={`/products/${id}`} className={CartItem_module_scss_1.default.productName}>
            {name}
          </react_router_dom_1.NavLink>
          <div className={CartItem_module_scss_1.default.productCode}>
            Код товара: {productCode}
          </div>
        </div>
        <div className={CartItem_module_scss_1.default.quantityContainer}>
          <div className={CartItem_module_scss_1.default.quantity}>
            <button disabled={count === 1} onClick={onClickSubtract}>
              <i className="fa-solid fa-minus"></i>
            </button>
            <div>{count}</div>
            <button onClick={onClickAdd}>
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
        <div className={CartItem_module_scss_1.default.price}>
          <div className={CartItem_module_scss_1.default.priceValue}>
            <react_number_format_1.default value={price * count} displayType='text' thousandSeparator=' '/>
          </div>
          <div className={CartItem_module_scss_1.default.currency}>₽</div>
        </div>
        <div className={(0, classnames_1.default)(CartItem_module_scss_1.default.deleteProduct, "tooltip", CartItem_module_scss_1.default.tooltip)}>
          <div onClick={onClickRemove}>
            <i className="fa-solid fa-trash"></i>
            <div className={(0, classnames_1.default)("tooltipText", CartItem_module_scss_1.default.tooltipText)}>
              Удалить
            </div>
          </div>
        </div>
      </div>
    </div>);
};
exports.CartItem = CartItem;
//# sourceMappingURL=index.js.map