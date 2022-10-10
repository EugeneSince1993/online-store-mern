"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartEmpty = void 0;
const CartEmpty_module_scss_1 = __importDefault(require("./CartEmpty.module.scss"));
const components_1 = require("../../components");
const cart_empty_png_1 = __importDefault(require("../../assets/img/cart-empty.png"));
const CartEmpty = () => {
    return (<div className={CartEmpty_module_scss_1.default.cartEmpty}>
      <h1>Корзина</h1>
      <div className={CartEmpty_module_scss_1.default.cartContainer}>
        <div className={CartEmpty_module_scss_1.default.info}>
          <h3>Корзина пуста</h3>
          <img src={cart_empty_png_1.default}/>
          <p>
            Зайдите в каталог и выберите товары
          </p>
          <components_1.Button display="block" variant="solid" link="/" justifyContentCenter>
            В каталог
          </components_1.Button>
        </div>
      </div>
    </div>);
};
exports.CartEmpty = CartEmpty;
//# sourceMappingURL=index.js.map