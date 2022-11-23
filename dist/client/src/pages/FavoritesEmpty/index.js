"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoritesEmpty = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const FavoritesEmpty_module_scss_1 = __importDefault(require("./FavoritesEmpty.module.scss"));
const components_1 = require("../../components");
const favorites_png_1 = __importDefault(require("../../assets/img/favorites.png"));
const FavoritesEmpty = () => {
    (0, react_1.useEffect)(() => {
        window.scrollTo(0, 0);
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: FavoritesEmpty_module_scss_1.default.favoritesEmpty }, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435" }), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: FavoritesEmpty_module_scss_1.default.favoritesContainer }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: FavoritesEmpty_module_scss_1.default.info }, { children: [(0, jsx_runtime_1.jsx)("h3", { children: "\u0412 \u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u043C \u043D\u0435\u0442 \u0442\u043E\u0432\u0430\u0440\u043E\u0432" }), (0, jsx_runtime_1.jsx)("img", { src: favorites_png_1.default }), (0, jsx_runtime_1.jsx)("p", { children: "\u0417\u0430\u0439\u0434\u0438\u0442\u0435 \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433 \u0438 \u0434\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0442\u043E\u0432\u0430\u0440\u044B \u0432 \u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435" }), (0, jsx_runtime_1.jsx)(components_1.Button, Object.assign({ display: "block", variant: "solid", link: "/", justifyContentCenter: true }, { children: "\u0412 \u043A\u0430\u0442\u0430\u043B\u043E\u0433" }))] })) }))] })));
};
exports.FavoritesEmpty = FavoritesEmpty;
//# sourceMappingURL=index.js.map