"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_router_dom_1 = require("react-router-dom");
const Footer_module_scss_1 = __importDefault(require("./Footer.module.scss"));
const Footer = () => {
    const date = new Date();
    let year = date.getFullYear();
    return (<footer className={(0, classnames_1.default)(Footer_module_scss_1.default.footerContainer, 'container', 'bgLightGray')}>
      <div className={(0, classnames_1.default)(Footer_module_scss_1.default.footerRow, Footer_module_scss_1.default.footerLinks)} style={{ display: "none" }}>
        <div className={(0, classnames_1.default)(Footer_module_scss_1.default.forClients)}>
          <h6>Покупателям</h6>
          <ul>
            <li>
              <react_router_dom_1.NavLink to="#">Способы оплаты</react_router_dom_1.NavLink>
            </li>
            <li>
              <react_router_dom_1.NavLink to="#">Доставка</react_router_dom_1.NavLink>
            </li>
            <li>
              <react_router_dom_1.NavLink to="#">Вопросы и ответы</react_router_dom_1.NavLink>
            </li>
          </ul>
        </div>
        <div className={(0, classnames_1.default)(Footer_module_scss_1.default.aboutCompany)}>
          <h6>О компании</h6>
          <ul>
            <li>
              <react_router_dom_1.NavLink to="#">О нас</react_router_dom_1.NavLink>
            </li>
            <li>
              <react_router_dom_1.NavLink to="#">Контакты</react_router_dom_1.NavLink>
            </li>
          </ul>
        </div>
        <div className={Footer_module_scss_1.default.followUs}>
          <h6>Мы в соцсетях</h6>
          <ul>
            <li>
              <react_router_dom_1.NavLink to="#">Вконтакте</react_router_dom_1.NavLink>
            </li>
            <li>
              <react_router_dom_1.NavLink to="#">Одноклассники</react_router_dom_1.NavLink>
            </li>
            <li>
              <react_router_dom_1.NavLink to="#">Телеграм</react_router_dom_1.NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className={Footer_module_scss_1.default.footerRow}>
        <div>
          <span>{year} </span> 
          &copy; Online store
        </div>
      </div>
    </footer>);
};
exports.Footer = Footer;
//# sourceMappingURL=index.js.map