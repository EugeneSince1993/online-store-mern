"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nav = void 0;
const react_router_dom_1 = require("react-router-dom");
const classnames_1 = __importDefault(require("classnames"));
const Nav_module_scss_1 = __importDefault(require("./Nav.module.scss"));
const Nav = ({ cartTotal, favoritesTotal }) => {
    return (<div className={Nav_module_scss_1.default.nav}>
      <nav>
        <ul>
          <li>
            <react_router_dom_1.NavLink to="/cart">
              <div className={(0, classnames_1.default)(Nav_module_scss_1.default.linkInner, Nav_module_scss_1.default.cartLink)}>
                <div className={Nav_module_scss_1.default.linkGroup}>
                  <div className={Nav_module_scss_1.default.linkInnerText}>
                    <i className="fa-solid fa-cart-shopping"></i>
                    <div>Корзина</div>
                  </div>
                  {cartTotal > 0 && (<div className={Nav_module_scss_1.default.totalCount}>
                      <div>{cartTotal}</div>
                    </div>)}
                </div>
              </div>
            </react_router_dom_1.NavLink>
          </li>
          <li>
            <react_router_dom_1.NavLink to="/favorites">
              <div className={(0, classnames_1.default)(Nav_module_scss_1.default.linkInner, Nav_module_scss_1.default.favoritesLink)}>
                <div className={Nav_module_scss_1.default.linkGroup}>
                  <div className={Nav_module_scss_1.default.linkInnerText}>
                    <i className="fa-solid fa-heart"></i>
                    <div>Избранное</div>
                  </div>
                  {favoritesTotal > 0 && (<div className={Nav_module_scss_1.default.totalCount}>
                      <div>{favoritesTotal}</div>
                    </div>)}
                </div>
              </div>
            </react_router_dom_1.NavLink>
          </li>
          <li className={Nav_module_scss_1.default.login}>
            <a href="#">Войти</a>
          </li>
        </ul>
      </nav>
    </div>);
};
exports.Nav = Nav;
//# sourceMappingURL=index.js.map