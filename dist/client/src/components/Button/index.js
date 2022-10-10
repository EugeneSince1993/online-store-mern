"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_router_dom_1 = require("react-router-dom");
const Button_module_scss_1 = __importDefault(require("./Button.module.scss"));
const Button = ({ display = "inline-block", variant, link = "/", justifyContentCenter = false, onClickFunc, children, }) => {
    return (<>
      {display === "block" && (<div className={(0, classnames_1.default)({
                [Button_module_scss_1.default.buttonContainer]: true,
                [Button_module_scss_1.default.justifyContentCenter]: justifyContentCenter,
            })}>
          <react_router_dom_1.NavLink to={link} className={(0, classnames_1.default)({
                [Button_module_scss_1.default.button]: true,
                [Button_module_scss_1.default.outlined]: variant === "outlined",
                [Button_module_scss_1.default.solid]: variant === "solid",
                [Button_module_scss_1.default.db]: true,
            })} onClick={onClickFunc}>
            {children}
          </react_router_dom_1.NavLink>
        </div>)}
      {display === "inline-block" && (<react_router_dom_1.NavLink to={link} className={(0, classnames_1.default)({
                [Button_module_scss_1.default.button]: true,
                [Button_module_scss_1.default.outlined]: variant === "outlined",
                [Button_module_scss_1.default.solid]: variant === "solid",
                [Button_module_scss_1.default.dib]: true,
            })} onClick={onClickFunc}>
          {children}
        </react_router_dom_1.NavLink>)}
    </>);
};
exports.Button = Button;
//# sourceMappingURL=index.js.map