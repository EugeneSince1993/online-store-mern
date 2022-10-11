"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const axios_1 = __importDefault(require("axios"));
const react_router_dom_1 = require("react-router-dom");
require("react-responsive-carousel/lib/styles/carousel.min.css");
const react_responsive_carousel_1 = require("react-responsive-carousel");
const react_image_lightbox_1 = __importDefault(require("react-image-lightbox"));
require("react-image-lightbox/style.css");
const classnames_1 = __importDefault(require("classnames"));
const react_number_format_1 = __importDefault(require("react-number-format"));
const react_tabs_1 = require("react-tabs");
require("react-tabs/style/react-tabs.css");
const html_react_parser_1 = __importDefault(require("html-react-parser"));
const Product_module_scss_1 = __importDefault(require("./Product.module.scss"));
const hooks_1 = require("../../redux/hooks");
const cartSlice_1 = require("../../redux/cart/cartSlice");
const favoriteSlice_1 = require("../../redux/favorites/favoriteSlice");
const Product = () => {
    const dispatch = (0, hooks_1.useAppDispatch)();
    const [productObj, setProductObj] = (0, react_1.useState)({});
    const [photoIndex, setPhotoIndex] = (0, react_1.useState)(0);
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const { id } = (0, react_router_dom_1.useParams)();
    (0, react_1.useEffect)(() => {
        axios_1.default
            .get(`https://62d96f595d893b27b2e676e7.mockapi.io/products/${id}`)
            .then((res) => {
            setProductObj(res.data);
        })
            .catch((err) => {
            console.warn(err);
        });
    }, []);
    const objIsNotEmpty = (obj) => {
        return Object.keys(obj).length !== 0;
    };
    const productObjIsNotEmpty = objIsNotEmpty(productObj);
    const galleryImages = productObjIsNotEmpty && productObj.images;
    const divsWithGalImgs = galleryImages && galleryImages.map((el, i) => {
        return ((0, jsx_runtime_1.jsx)("div", Object.assign({ onClick: () => setIsOpen(true) }, { children: (0, jsx_runtime_1.jsx)("img", { src: galleryImages[i] }) }), i));
    });
    const specs = productObjIsNotEmpty && productObj.specifications;
    const specList = specs && specs.map((el, i) => {
        let specKeys = Object.keys(el);
        return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Product_module_scss_1.default.spec }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: Product_module_scss_1.default.specName }, { children: specKeys[0] })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: Product_module_scss_1.default.specValue }, { children: el[specKeys[0]] }))] }), i));
    });
    const onClickAddToCart = () => {
        const item = {
            id: productObj.id.toString(),
            name: productObj.name,
            price: productObj.price,
            imageUrl: productObj.imageUrl,
            productCode: productObj.productCode,
            count: 0,
        };
        dispatch((0, cartSlice_1.addItem)(item));
    };
    const onClickAddToFavorites = () => {
        const item = {
            id: productObj.id.toString(),
            name: productObj.name,
            price: productObj.price,
            imageUrl: productObj.imageUrl,
            count: 0,
        };
        dispatch((0, favoriteSlice_1.addFavoriteItem)(item));
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Product_module_scss_1.default.productContainer }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Product_module_scss_1.default.productImage }, { children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(react_responsive_carousel_1.Carousel, Object.assign({ showIndicators: false, showStatus: false }, { children: divsWithGalImgs })) }), (0, jsx_runtime_1.jsx)("div", { children: isOpen && ((0, jsx_runtime_1.jsx)(react_image_lightbox_1.default, { mainSrc: galleryImages[photoIndex], nextSrc: galleryImages[(photoIndex + 1) % galleryImages.length], prevSrc: galleryImages[(photoIndex + galleryImages.length - 1) % galleryImages.length], onCloseRequest: () => setIsOpen(false), onMovePrevRequest: () => setPhotoIndex((photoIndex + galleryImages.length - 1) % galleryImages.length), onMoveNextRequest: () => setPhotoIndex((photoIndex + 1) % galleryImages.length) })) })] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Product_module_scss_1.default.mainData }, { children: [(0, jsx_runtime_1.jsx)("h1", { children: productObj.name }), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: Product_module_scss_1.default.shortSpecs }, { children: productObj.shortDesc })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Product_module_scss_1.default.productCode }, { children: ["\u041A\u043E\u0434 \u0442\u043E\u0432\u0430\u0440\u0430: ", productObj.productCode] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Product_module_scss_1.default.icons }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, classnames_1.default)(Product_module_scss_1.default.rating, "tooltip", Product_module_scss_1.default.tooltip) }, { children: [(0, jsx_runtime_1.jsx)("i", { className: "fa-solid fa-star" }), (0, jsx_runtime_1.jsx)("span", { children: productObj.rating }), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, classnames_1.default)(Product_module_scss_1.default.tooltipText, "tooltipText") }, { children: ["\u0420\u0435\u0439\u0442\u0438\u043D\u0433 ", productObj.rating, " \u0438\u0437 5"] }))] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, classnames_1.default)(Product_module_scss_1.default.testimonials, "tooltip", Product_module_scss_1.default.tooltip) }, { children: [(0, jsx_runtime_1.jsx)("i", { className: "fa-solid fa-comment" }), (0, jsx_runtime_1.jsx)("span", { children: productObj.testimonials }), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, classnames_1.default)("tooltipText", Product_module_scss_1.default.tooltipText) }, { children: [productObj.testimonials, " \u043E\u0442\u0437\u044B\u0432\u043E\u0432"] }))] }))] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Product_module_scss_1.default.priceAndBuy }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Product_module_scss_1.default.price }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: Product_module_scss_1.default.priceValue }, { children: (0, jsx_runtime_1.jsx)(react_number_format_1.default, { value: productObj.price, displayType: 'text', thousandSeparator: ' ' }) })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: Product_module_scss_1.default.currency }, { children: "\u20BD" }))] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: Product_module_scss_1.default.addToCartAndFavorites }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: Product_module_scss_1.default.addToCart }, { children: (0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: onClickAddToCart }, { children: (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: Product_module_scss_1.default.cartIcon }, { children: (0, jsx_runtime_1.jsx)("i", { className: "fa-solid fa-cart-shopping" }) })), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: Product_module_scss_1.default.toCart }, { children: "\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443" }))] }) })) })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, classnames_1.default)(Product_module_scss_1.default.favorites, "tooltip"), onClick: onClickAddToFavorites }, { children: [(0, jsx_runtime_1.jsx)("i", { className: "fa-solid fa-heart" }), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "tooltipText" }, { children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435" }))] }))] }))] }))] }))] })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: Product_module_scss_1.default.info }, { children: (0, jsx_runtime_1.jsxs)(react_tabs_1.Tabs, { children: [(0, jsx_runtime_1.jsxs)(react_tabs_1.TabList, { children: [(0, jsx_runtime_1.jsx)(react_tabs_1.Tab, Object.assign({ id: "specs-title" }, { children: "\u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438" })), (0, jsx_runtime_1.jsx)(react_tabs_1.Tab, { children: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435" })] }), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: Product_module_scss_1.default.specs }, { children: specList })) }), (0, jsx_runtime_1.jsx)(react_tabs_1.TabPanel, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: Product_module_scss_1.default.productDescription }, { children: productObjIsNotEmpty && (0, html_react_parser_1.default)(productObj.description) })) })] }) }))] }));
};
exports.Product = Product;
//# sourceMappingURL=index.js.map