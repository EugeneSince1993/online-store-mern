"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const hooks_1 = require("../../redux/hooks");
const react_redux_1 = require("react-redux");
const selectors_1 = require("../../redux/cart/selectors");
const react_number_format_1 = __importDefault(require("react-number-format"));
const classnames_1 = __importDefault(require("classnames"));
const cartSlice_1 = require("../../redux/cart/cartSlice");
const components_1 = require("../../components");
const Cart_module_scss_1 = __importDefault(require("./Cart.module.scss"));
const CartEmpty_1 = require("../CartEmpty");
const Cart = () => {
    const dispatch = (0, hooks_1.useAppDispatch)();
    const { totalPrice, items } = (0, react_redux_1.useSelector)(selectors_1.selectCart);
    const totalCount = items.reduce((sum, item) => sum + item.count, 0);
    const onClickClear = () => {
        if (window.confirm('Очистить корзину?')) {
            dispatch((0, cartSlice_1.clearItems)());
        }
    };
    if (!totalPrice) {
        return <CartEmpty_1.CartEmpty />;
    }
    return (<div className={Cart_module_scss_1.default.cartBlock}>
      <h1>Корзина</h1>
      <div className={Cart_module_scss_1.default.cartContainer}>
        <div className={Cart_module_scss_1.default.productList}>
          {items.map((item) => (<components_1.CartItem key={item.id} {...item}/>))}
        </div>
        <div className={Cart_module_scss_1.default.summary}>
          <div className={Cart_module_scss_1.default.summaryContainer}>
            <h3>Итого</h3>
            <div className={Cart_module_scss_1.default.summaryBlocks}>
              <div className={Cart_module_scss_1.default.productQuantity}>
                <div className={Cart_module_scss_1.default.quantityKey}>Количество товаров</div>
                <div className={Cart_module_scss_1.default.quantityValue}>{totalCount}</div>
              </div>
              <div className={Cart_module_scss_1.default.total}>
                <div className={Cart_module_scss_1.default.totalKey}>Сумма</div>
                <div className={(0, classnames_1.default)(Cart_module_scss_1.default.price, Cart_module_scss_1.default.totalValue)}>
                  <div className={Cart_module_scss_1.default.priceValue}>
                    <react_number_format_1.default value={totalPrice} displayType='text' thousandSeparator=' '/>
                  </div>
                  <div className={Cart_module_scss_1.default.currency}>₽</div>
                </div>        
              </div>
            </div>
          </div>
          <components_1.Button display="block" variant="solid">
            Оформить заказ
          </components_1.Button>
          <components_1.Button display="block" variant="outlined" onClickFunc={onClickClear}>
            Очистить корзину
          </components_1.Button>
        </div>
      </div>
    </div>);
};
exports.Cart = Cart;
//# sourceMappingURL=index.js.map