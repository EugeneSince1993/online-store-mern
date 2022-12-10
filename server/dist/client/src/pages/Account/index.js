"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const components_1 = require("../../components");
const selectors_1 = require("../../redux/auth/selectors");
const filterSlice_1 = require("../../redux/filter/filterSlice");
const selectors_2 = require("../../redux/filter/selectors");
const hooks_1 = require("../../redux/hooks");
const asyncActions_1 = require("../../redux/product/asyncActions");
const selectors_3 = require("../../redux/product/selectors");
const Account_module_scss_1 = __importDefault(require("./Account.module.scss"));
const Spinner_1s_200px_gif_1 = __importDefault(require("../../assets/img/Spinner-1s-200px.gif"));
const components_2 = require("../../components");
const react_router_dom_1 = require("react-router-dom");
const Favorites_1 = require("../Favorites");
let pageSize = 8;
const Account = () => {
    const { data } = (0, hooks_1.useAppSelector)(selectors_1.selectAuth);
    const isAuth = (0, hooks_1.useAppSelector)(selectors_1.selectIsAuth);
    const dispatch = (0, hooks_1.useAppDispatch)();
    const { products, isLoading } = (0, hooks_1.useAppSelector)(selectors_3.selectProduct);
    const { sort, currentPage } = (0, hooks_1.useAppSelector)(selectors_2.selectFilter);
    let finalProducts = products;
    const setFirstPage = () => {
        dispatch((0, filterSlice_1.setCurrentPage)(1));
    };
    const getProducts = () => {
        const sortBy = sort.sortProperty.replace('-', '');
        const order = sort.sortProperty.includes('-') ? 'desc' : 'asc';
        dispatch((0, asyncActions_1.fetchProducts)({ sortBy, order }));
        setFirstPage();
    };
    (0, react_1.useEffect)(() => {
        getProducts();
    }, [sort.sortProperty]);
    (0, react_1.useEffect)(() => {
        window.scrollTo(0, 0);
    }, []);
    const currentData = (0, react_1.useMemo)(() => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        return finalProducts.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, finalProducts]);
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Account_module_scss_1.default.account }, { children: [(0, jsx_runtime_1.jsx)("h3", { children: "\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442" }), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Account_module_scss_1.default.content }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: Account_module_scss_1.default.mainData }, { children: data.role === "ADMIN" ? ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Account_module_scss_1.default.adminMain }, { children: [(0, jsx_runtime_1.jsx)("h4", { children: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0442\u043E\u0432\u0430\u0440\u043E\u0432" }), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: Account_module_scss_1.default.addProduct }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, Object.assign({ to: "/create-product" }, { children: (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: Account_module_scss_1.default.icon }, { children: (0, jsx_runtime_1.jsx)("i", { className: "fa-solid fa-plus" }) })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: Account_module_scss_1.default.text }, { children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0442\u043E\u0432\u0430\u0440" }))] }) })) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: Account_module_scss_1.default.sorting }, { children: (0, jsx_runtime_1.jsx)(components_1.Sorting, {}) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: Account_module_scss_1.default.productListContainer }, { children: isLoading ? ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: Account_module_scss_1.default.loadingBlock }, { children: (0, jsx_runtime_1.jsx)("img", { src: Spinner_1s_200px_gif_1.default }) }))) : (currentData.length && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: Account_module_scss_1.default.productListWrapper }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: Account_module_scss_1.default.productList }, { children: currentData.map((item, index) => ((0, jsx_runtime_1.jsx)(components_2.ProductBlock, Object.assign({ getProducts: getProducts }, item), index))) })) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: Account_module_scss_1.default.productsPagination }, { children: (0, jsx_runtime_1.jsx)(components_1.Pagination, { className: Account_module_scss_1.default.paginationBar, currentPage: currentPage, totalCount: finalProducts.length, pageSize: pageSize, onPageChange: (page) => dispatch((0, filterSlice_1.setCurrentPage)(page)) }) }))] }))) }))] }))) : ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: Account_module_scss_1.default.userMain }, { children: (0, jsx_runtime_1.jsx)(Favorites_1.Favorites, {}) }))) })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Account_module_scss_1.default.userData }, { children: [(0, jsx_runtime_1.jsx)("h4", { children: "\u0414\u0430\u043D\u043D\u044B\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F" }), data && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: Account_module_scss_1.default.userName }, { children: data.fullName })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: Account_module_scss_1.default.userEmail }, { children: data.email }))] }))] }))] }))] })));
};
exports.Account = Account;
//# sourceMappingURL=index.js.map