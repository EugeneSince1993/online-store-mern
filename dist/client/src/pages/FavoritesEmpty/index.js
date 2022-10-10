"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoritesEmpty = void 0;
const FavoritesEmpty_module_scss_1 = __importDefault(require("./FavoritesEmpty.module.scss"));
const components_1 = require("../../components");
const favorites_png_1 = __importDefault(require("../../assets/img/favorites.png"));
const FavoritesEmpty = () => {
    return (<div className={FavoritesEmpty_module_scss_1.default.favoritesEmpty}>
      <h1>Избранное</h1>
      <div className={FavoritesEmpty_module_scss_1.default.favoritesContainer}>
        <div className={FavoritesEmpty_module_scss_1.default.info}>
          <h3>В Избранном нет товаров</h3>
          <img src={favorites_png_1.default}/>
          <p>
            Зайдите в каталог и добавьте товары в Избранное
          </p>
          <components_1.Button display="block" variant="solid" link="/" justifyContentCenter>
            В каталог
          </components_1.Button>
        </div>
      </div>
    </div>);
};
exports.FavoritesEmpty = FavoritesEmpty;
//# sourceMappingURL=index.js.map