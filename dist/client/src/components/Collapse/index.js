"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collapse = void 0;
const React = __importStar(require("react"));
const Collapse_module_scss_1 = __importDefault(require("./Collapse.module.scss"));
const classnames_1 = __importDefault(require("classnames"));
const Collapse = ({ collapsed, children, filterName, elementType: ElementType = 'h5' }) => {
    const [isCollapsed, setIsCollapsed] = React.useState(collapsed);
    return (<>
      <div className={Collapse_module_scss_1.default.collapseDiv} onClick={() => setIsCollapsed(!isCollapsed)}>
        <ElementType>{filterName}</ElementType>
        {isCollapsed ? (<i className="fa-solid fa-chevron-down"></i>) : (<i className="fa-solid fa-chevron-up"></i>)}
      </div>
      <div className={(0, classnames_1.default)(Collapse_module_scss_1.default.collapseContent, {
            [Collapse_module_scss_1.default.collapsed]: isCollapsed,
            [Collapse_module_scss_1.default.expanded]: !isCollapsed
        })} aria-expanded={isCollapsed}>
        {children}
      </div>
    </>);
};
exports.Collapse = Collapse;
//# sourceMappingURL=index.js.map