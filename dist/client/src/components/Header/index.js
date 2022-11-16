"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
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
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("header", Object.assign({ className: (0, classnames_1.default)(Header_module_scss_1.default.header, 'bgLightGray') }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Header_module_scss_1.default.headerInner }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: Header_module_scss_1.default.logo }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, Object.assign({ to: "/" }, { children: (0, jsx_runtime_1.jsx)("img", { src: online_store_logo_min_png_1.default, alt: "online store" }) })) })), location.pathname === '/' && (0, jsx_runtime_1.jsx)(Search_1.Search, {}), (0, jsx_runtime_1.jsx)(react_responsive_1.default, Object.assign({ minWidth: 700 }, { children: (0, jsx_runtime_1.jsx)(Nav_1.Nav, { cartTotal: cartTotal, favoritesTotal: favoritesTotal }) }))] })) })), (0, jsx_runtime_1.jsx)(react_responsive_1.default, Object.assign({ maxWidth: 699 }, { children: (0, jsx_runtime_1.jsx)(Nav_1.Nav, { cartTotal: cartTotal, favoritesTotal: favoritesTotal }) }))] }));
};
exports.Header = Header;
//# sourceMappingURL=index.js.map