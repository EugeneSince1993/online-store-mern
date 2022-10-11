"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorting = exports.sortList = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const classnames_1 = __importDefault(require("classnames"));
const filterSlice_1 = require("../../redux/filter/filterSlice");
const types_1 = require("../../redux/filter/types");
const hooks_1 = require("../../redux/hooks");
const Sorting_module_scss_1 = __importDefault(require("./Sorting.module.scss"));
exports.sortList = [
    { name: 'по популярности (по убыванию)', sortProperty: types_1.SortPropertyEnum.RATING_DESC },
    { name: 'по популярности (по возрастанию)', sortProperty: types_1.SortPropertyEnum.RATING_ASC },
    { name: 'по цене (по убыванию)', sortProperty: types_1.SortPropertyEnum.PRICE_DESC },
    { name: 'по цене (по возрастанию)', sortProperty: types_1.SortPropertyEnum.PRICE_ASC },
    { name: 'по алфавиту (по убыванию)', sortProperty: types_1.SortPropertyEnum.TITLE_DESC },
    { name: 'по алфавиту (по возрастанию)', sortProperty: types_1.SortPropertyEnum.TITLE_ASC },
];
const Sorting = () => {
    const dispatch = (0, hooks_1.useAppDispatch)();
    let [priceVisited, setPriceVisited] = (0, react_1.useState)(false);
    let [titleVisited, setTitleVisited] = (0, react_1.useState)(false);
    let [isRatingActive, setIsRatingActive] = (0, react_1.useState)(false);
    const handleRatingClick = () => {
        onClickListItem(exports.sortList[0]);
        if (isRatingActive) {
            return null;
        }
        else {
            setIsRatingActive(true);
        }
    };
    let [isPriceActive, setIsPriceActive] = (0, react_1.useState)(false);
    let [isPriceAscending, setIsPriceAscending] = (0, react_1.useState)(false);
    const handlePriceClick = () => {
        setPriceVisited(true);
        setIsPriceAscending(current => !current);
        if (isPriceActive) {
            return null;
        }
        else {
            setIsPriceActive(true);
        }
    };
    let [isTitleActive, setIsTitleActive] = (0, react_1.useState)(false);
    let [isTitleAscending, setIsTitleAscending] = (0, react_1.useState)(false);
    const handleTitleClick = () => {
        setTitleVisited(true);
        setIsTitleAscending(current => !current);
        if (isTitleActive) {
            return null;
        }
        else {
            setIsTitleActive(true);
        }
    };
    (0, react_1.useEffect)(() => {
        if (isRatingActive) {
            setIsPriceActive(false);
            setIsTitleActive(false);
        }
    }, [isRatingActive]);
    (0, react_1.useEffect)(() => {
        if (isPriceActive) {
            setIsRatingActive(false);
            setIsTitleActive(false);
        }
        else {
            setPriceVisited(false);
        }
    }, [isPriceActive]);
    (0, react_1.useEffect)(() => {
        if (isTitleActive) {
            setIsRatingActive(false);
            setIsPriceActive(false);
        }
        else {
            setTitleVisited(false);
        }
    }, [isTitleActive]);
    (0, react_1.useEffect)(() => {
        if (isPriceAscending) {
            onClickListItem(exports.sortList[3]);
        }
        else {
            onClickListItem(exports.sortList[2]);
        }
    }, [isPriceAscending]);
    (0, react_1.useEffect)(() => {
        if (isTitleAscending) {
            onClickListItem(exports.sortList[5]);
        }
        else {
            onClickListItem(exports.sortList[4]);
        }
    }, [isTitleAscending]);
    const onClickListItem = (obj) => {
        dispatch((0, filterSlice_1.setSort)(obj));
    };
    (0, react_1.useEffect)(() => {
        onClickListItem(exports.sortList[0]);
        setIsRatingActive(true);
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Sorting_module_scss_1.default.sorting }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, classnames_1.default)(Sorting_module_scss_1.default.rating, { [Sorting_module_scss_1.default.selected]: isRatingActive }), onClick: handleRatingClick }, { children: "\u043F\u043E \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u043E\u0441\u0442\u0438" })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, classnames_1.default)(Sorting_module_scss_1.default.price, { [Sorting_module_scss_1.default.selected]: isPriceActive }), onClick: handlePriceClick }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "\u043F\u043E \u0446\u0435\u043D\u0435" }), !priceVisited ? ''
                        : isPriceAscending ? ((0, jsx_runtime_1.jsx)("i", { className: "fa-solid fa-arrow-up-short-wide" })) : ((0, jsx_runtime_1.jsx)("i", { className: "fa-solid fa-arrow-down-short-wide" }))] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, classnames_1.default)(Sorting_module_scss_1.default.title, { [Sorting_module_scss_1.default.selected]: isTitleActive }), onClick: handleTitleClick }, { children: [(0, jsx_runtime_1.jsx)("span", { children: "\u043F\u043E \u0430\u043B\u0444\u0430\u0432\u0438\u0442\u0443" }), !titleVisited ? ''
                        : isTitleAscending ? ((0, jsx_runtime_1.jsx)("i", { className: "fa-solid fa-arrow-up-short-wide" })) : ((0, jsx_runtime_1.jsx)("i", { className: "fa-solid fa-arrow-down-short-wide" }))] }))] })));
};
exports.Sorting = Sorting;
//# sourceMappingURL=index.js.map