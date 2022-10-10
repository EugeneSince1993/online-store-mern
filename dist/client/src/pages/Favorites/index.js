"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Favorites = void 0;
const hooks_1 = require("../../redux/hooks");
const react_redux_1 = require("react-redux");
const components_1 = require("../../components");
const FavoritesEmpty_1 = require("../FavoritesEmpty");
const selectors_1 = require("../../redux/favorites/selectors");
const favoriteSlice_1 = require("../../redux/favorites/favoriteSlice");
const Favorites_module_scss_1 = __importDefault(require("./Favorites.module.scss"));
const Favorites = () => {
    const dispatch = (0, hooks_1.useAppDispatch)();
    const { items } = (0, react_redux_1.useSelector)(selectors_1.selectFavorites);
    const onClickClear = () => {
        if (window.confirm('Очистить избранное?')) {
            dispatch((0, favoriteSlice_1.clearFavoriteItems)());
        }
    };
    if (!items.length) {
        return <FavoritesEmpty_1.FavoritesEmpty />;
    }
    return (<div className={Favorites_module_scss_1.default.favoritesBlock}>
      <h1>Избранное</h1>
      <div className={Favorites_module_scss_1.default.favoritesContainer}>
        <div className={Favorites_module_scss_1.default.productList}>
          {items.map((item) => (<components_1.FavoriteItem key={item.id} {...item}/>))}
        </div>
        <div className={Favorites_module_scss_1.default.summary}>
          <components_1.Button display="block" variant="outlined" onClickFunc={onClickClear}>
            Очистить избранное
          </components_1.Button>
        </div>
      </div>
    </div>);
};
exports.Favorites = Favorites;
//# sourceMappingURL=index.js.map