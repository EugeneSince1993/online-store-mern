"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Popup = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Popup_module_scss_1 = __importDefault(require("./Popup.module.scss"));
const Popup = ({ toShow, title, onClose, children }) => {
    const [show, setShow] = (0, react_1.useState)(false);
    const myRef = (0, react_1.useRef)();
    const closeHandler = () => {
        setShow(false);
        onClose(false);
    };
    (0, react_1.useEffect)(() => {
        setShow(toShow);
    }, [toShow]);
    (0, react_1.useEffect)(() => {
        const checkIfClickedOutside = (e) => {
            if (show && myRef.current && !myRef.current.contains(e.target)) {
                closeHandler();
            }
        };
        document.addEventListener('mousedown', checkIfClickedOutside);
        return () => {
            document.removeEventListener('mousedown', checkIfClickedOutside);
        };
    }, [show]);
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: Popup_module_scss_1.default.overlay, style: {
            visibility: show ? "visible" : "hidden",
            opacity: show ? "1" : "0"
        } }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Popup_module_scss_1.default.popup, ref: myRef }, { children: [(0, jsx_runtime_1.jsx)("h2", { children: title }), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: Popup_module_scss_1.default.close, onClick: closeHandler }, { children: "\u00D7" })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: Popup_module_scss_1.default.content }, { children: children }))] })) })));
};
exports.Popup = Popup;
//# sourceMappingURL=index.js.map