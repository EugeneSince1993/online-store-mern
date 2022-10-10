"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const react_1 = require("react");
const react_responsive_1 = __importDefault(require("react-responsive"));
const react_redux_1 = require("react-redux");
const classnames_1 = __importDefault(require("classnames"));
const react_router_dom_1 = require("react-router-dom");
const Search_1 = require("./Search");
const selectors_1 = require("../../redux/cart/selectors");
const selectors_2 = require("../../redux/favorites/selectors");
const Nav_1 = require("./Nav");
const Header_module_scss_1 = __importDefault(require("./Header.module.scss"));
const online_store_logo_min_png_1 = __importDefault(require("../../assets/img/online-store-logo-min.png"));
const Header = () => {
    const { items: cartItems } = (0, react_redux_1.useSelector)(selectors_1.selectCart);
    const { items: favoriteItems } = (0, react_redux_1.useSelector)(selectors_2.selectFavorites);
    const location = (0, react_router_dom_1.useLocation)();
    const isMounted = (0, react_1.useRef)(false);
    const cartTotal = cartItems.reduce((sum, item) => sum + item.count, 0);
    const favoritesTotal = favoriteItems.reduce((sum, item) => sum + item.count, 0);
    (0, react_1.useEffect)(() => {
        if (isMounted.current) {
            const json = JSON.stringify(cartItems);
            localStorage.setItem('cart', json);
        }
        isMounted.current = true;
    }, [cartItems]);
    (0, react_1.useEffect)(() => {
        if (isMounted.current) {
            const json = JSON.stringify(favoriteItems);
            localStorage.setItem('favorites', json);
        }
        isMounted.current = true;
    }, [favoriteItems]);
    return (<>
      <header className={(0, classnames_1.default)(Header_module_scss_1.default.header, 'bgLightGray')}>
        <div className={Header_module_scss_1.default.logo}>
          <react_router_dom_1.NavLink to="/">
            <img src={online_store_logo_min_png_1.default} alt="online store"/>
          </react_router_dom_1.NavLink>
        </div>
        {location.pathname === '/' && <Search_1.Search />}
        <react_responsive_1.default minWidth={700}>
          <Nav_1.Nav cartTotal={cartTotal} favoritesTotal={favoritesTotal}/>
        </react_responsive_1.default>
      </header>
      <react_responsive_1.default maxWidth={699}>
        <Nav_1.Nav cartTotal={cartTotal} favoritesTotal={favoritesTotal}/>
      </react_responsive_1.default>
    </>);
};
exports.Header = Header;
//# sourceMappingURL=index.js.map