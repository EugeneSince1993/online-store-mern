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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProduct = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const formik_1 = require("formik");
const Yup = __importStar(require("yup"));
const react_router_dom_1 = require("react-router-dom");
const hooks_1 = require("../../redux/hooks");
const UpdateProduct_module_scss_1 = __importDefault(require("./UpdateProduct.module.scss"));
const classnames_1 = __importDefault(require("classnames"));
const asyncActions_1 = require("../../redux/product/asyncActions");
const selectors_1 = require("../../redux/product/selectors");
const UpdateProduct = () => {
    const dispatch = (0, hooks_1.useAppDispatch)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { currentProduct } = (0, hooks_1.useAppSelector)(selectors_1.selectProduct);
    let { id } = (0, react_router_dom_1.useParams)();
    (0, react_1.useEffect)(() => {
        dispatch((0, asyncActions_1.fetchProductById)(id));
        window.scrollTo(0, 0);
    }, []);
    const imagesExp = /([-a-zA-Z0-9@:%._\+~#=\/]{1,256}\s+){1,5}[-a-zA-Z0-9@:%._\+~#=\/]{1,256}/;
    const imagesRegex = new RegExp(imagesExp);
    const objIsNotEmpty = (obj) => {
        return Object.keys(obj).length !== 0;
    };
    const currentProductIsNotEmpty = objIsNotEmpty(currentProduct);
    const productImages = currentProductIsNotEmpty && currentProduct.images;
    const productImagesStr = productImages && productImages.reduce((previousValue, currentValue) => {
        return previousValue + ' ' + currentValue;
    });
    const goToAccount = () => {
        navigate('/account');
    };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h3", { children: "\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0442\u043E\u0432\u0430\u0440\u0430" }), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: UpdateProduct_module_scss_1.default.form }, { children: (0, jsx_runtime_1.jsx)(formik_1.Formik, Object.assign({ enableReinitialize: true, initialValues: {
                        name: currentProductIsNotEmpty ? currentProduct.name : '',
                        imageUrl: currentProductIsNotEmpty ? currentProduct.imageUrl : '',
                        images: currentProductIsNotEmpty ? productImagesStr : '',
                        brand: currentProductIsNotEmpty ? currentProduct.brand : '',
                        price: currentProductIsNotEmpty ? currentProduct.price : '',
                        memory: currentProductIsNotEmpty ? currentProduct.memory : '',
                        ram: currentProductIsNotEmpty ? currentProduct.ram : '',
                        cpuCores: currentProductIsNotEmpty ? currentProduct.cpuCores : '',
                        screenSize: currentProductIsNotEmpty ? currentProduct.screenSize : '',
                        batteryCapacity: currentProductIsNotEmpty ? currentProduct.batteryCapacity : '',
                        color: currentProductIsNotEmpty ? currentProduct.color : '',
                        productCode: currentProductIsNotEmpty ? currentProduct.productCode : '',
                        shortDesc: currentProductIsNotEmpty ? currentProduct.shortDesc : '',
                        description: currentProductIsNotEmpty ? currentProduct.description : '',
                    }, validationSchema: Yup.object({
                        name: Yup.string()
                            .min(3, 'Минимум 3 символа')
                            .required('Обязательное поле'),
                        imageUrl: Yup.string()
                            .min(20, 'Минимум 20 символов')
                            .required('Обязательное поле'),
                        images: Yup.string()
                            .matches(imagesRegex, 'Введите адреса, разделенные пробелом')
                            .min(20, 'Минимум 20 символов')
                            .required('Обязательное поле'),
                        brand: Yup.string()
                            .min(3, 'Минимум 3 символа')
                            .required('Обязательное поле'),
                        price: Yup.number()
                            .min(4, 'Минимум 4 символа')
                            .required('Обязательное поле'),
                        memory: Yup.number()
                            .min(1, 'Минимум 1 символ')
                            .required('Обязательное поле'),
                        ram: Yup.number()
                            .min(1, 'Минимум 1 символ')
                            .required('Обязательное поле'),
                        cpuCores: Yup.number()
                            .min(1, 'Минимум 1 символ')
                            .required('Обязательное поле'),
                        screenSize: Yup.number()
                            .min(1, 'Минимум 1 символ')
                            .required('Обязательное поле'),
                        batteryCapacity: Yup.number()
                            .min(4, 'Минимум 4 символа')
                            .required('Обязательное поле'),
                        color: Yup.string()
                            .min(3, 'Минимум 3 символа')
                            .required('Обязательное поле'),
                        productCode: Yup.number()
                            .min(5, 'Минимум 5 символов')
                            .required('Обязательное поле'),
                        shortDesc: Yup.string()
                            .min(10, 'Минимум 10 символов')
                            .required('Обязательное поле'),
                        description: Yup.string()
                            .min(30, 'Минимум 30 символов')
                            .required('Обязательное поле'),
                    }), onSubmit: (values, { setSubmitting }) => __awaiter(void 0, void 0, void 0, function* () {
                        const dataForUpdating = Object.assign(Object.assign({}, values), { id });
                        const data = yield dispatch((0, asyncActions_1.updateProductById)(dataForUpdating));
                        if (!data.payload.success) {
                            return alert('Не удалось обновить товар');
                        }
                        else {
                            alert(`Товар "${values.name}" изменен`);
                        }
                        navigate('/account');
                        setSubmitting(false);
                    }) }, { children: ({ isSubmitting, touched, errors, isValid, dirty }) => ((0, jsx_runtime_1.jsxs)(formik_1.Form, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: UpdateProduct_module_scss_1.default.inputGroup }, { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "name" }, { children: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0442\u043E\u0432\u0430\u0440\u0430" })), (0, jsx_runtime_1.jsx)(formik_1.Field, { id: "name", name: "name", type: "text", className: (0, classnames_1.default)({
                                            [UpdateProduct_module_scss_1.default.borderRed]: touched.name && errors.name
                                        }) }), (0, jsx_runtime_1.jsx)(formik_1.ErrorMessage, { className: UpdateProduct_module_scss_1.default.errorMsg, name: "name", component: "div" })] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: UpdateProduct_module_scss_1.default.inputGroup }, { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "imageUrl" }, { children: "\u041C\u0438\u043D\u0438\u0430\u0442\u044E\u0440\u0430 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0442\u043E\u0432\u0430\u0440\u0430" })), (0, jsx_runtime_1.jsx)(formik_1.Field, { id: "imageUrl", name: "imageUrl", type: "text", placeholder: "https://test.com/image123.jpg", className: (0, classnames_1.default)({
                                            [UpdateProduct_module_scss_1.default.borderRed]: touched.imageUrl && errors.imageUrl
                                        }) }), (0, jsx_runtime_1.jsx)(formik_1.ErrorMessage, { className: UpdateProduct_module_scss_1.default.errorMsg, name: "imageUrl", component: "div" })] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, classnames_1.default)(UpdateProduct_module_scss_1.default.inputGroup, UpdateProduct_module_scss_1.default.productImages) }, { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "images" }, { children: "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0442\u043E\u0432\u0430\u0440\u0430" })), (0, jsx_runtime_1.jsx)(formik_1.Field, { as: "textarea", id: "images", name: "images", placeholder: "https://test.com/image123.jpg https://test.com/image123.jpg https://test.com/image123.jpg", className: (0, classnames_1.default)({
                                            [UpdateProduct_module_scss_1.default.borderRed]: touched.images && errors.images
                                        }) }), (0, jsx_runtime_1.jsx)(formik_1.ErrorMessage, { className: UpdateProduct_module_scss_1.default.errorMsg, name: "images", component: "div" })] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: UpdateProduct_module_scss_1.default.inputGroup }, { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "brand" }, { children: "\u0411\u0440\u0435\u043D\u0434" })), (0, jsx_runtime_1.jsx)(formik_1.Field, { id: "brand", name: "brand", type: "text", className: (0, classnames_1.default)({
                                            [UpdateProduct_module_scss_1.default.borderRed]: touched.brand && errors.brand
                                        }) }), (0, jsx_runtime_1.jsx)(formik_1.ErrorMessage, { className: UpdateProduct_module_scss_1.default.errorMsg, name: "brand", component: "div" })] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: UpdateProduct_module_scss_1.default.inputGroup }, { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "price" }, { children: "\u0426\u0435\u043D\u0430, \u0440\u0443\u0431." })), (0, jsx_runtime_1.jsx)(formik_1.Field, { id: "price", name: "price", type: "text", className: (0, classnames_1.default)({
                                            [UpdateProduct_module_scss_1.default.borderRed]: touched.price && errors.price
                                        }) }), (0, jsx_runtime_1.jsx)(formik_1.ErrorMessage, { className: UpdateProduct_module_scss_1.default.errorMsg, name: "price", component: "div" })] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: UpdateProduct_module_scss_1.default.inputGroup }, { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "memory" }, { children: "\u041E\u0431\u044A\u0435\u043C \u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u043E\u0439 \u043F\u0430\u043C\u044F\u0442\u0438, \u0413\u0431" })), (0, jsx_runtime_1.jsx)(formik_1.Field, { id: "memory", name: "memory", type: "text", className: (0, classnames_1.default)({
                                            [UpdateProduct_module_scss_1.default.borderRed]: touched.memory && errors.memory
                                        }) }), (0, jsx_runtime_1.jsx)(formik_1.ErrorMessage, { className: UpdateProduct_module_scss_1.default.errorMsg, name: "memory", component: "div" })] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: UpdateProduct_module_scss_1.default.inputGroup }, { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "ram" }, { children: "\u041E\u0431\u044A\u0435\u043C \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0439 \u043F\u0430\u043C\u044F\u0442\u0438, \u0413\u0431" })), (0, jsx_runtime_1.jsx)(formik_1.Field, { id: "ram", name: "ram", type: "text", className: (0, classnames_1.default)({
                                            [UpdateProduct_module_scss_1.default.borderRed]: touched.ram && errors.ram
                                        }) }), (0, jsx_runtime_1.jsx)(formik_1.ErrorMessage, { className: UpdateProduct_module_scss_1.default.errorMsg, name: "ram", component: "div" })] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: UpdateProduct_module_scss_1.default.inputGroup }, { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "cpuCores" }, { children: "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u044F\u0434\u0435\u0440" })), (0, jsx_runtime_1.jsx)(formik_1.Field, { id: "cpuCores", name: "cpuCores", type: "text", className: (0, classnames_1.default)({
                                            [UpdateProduct_module_scss_1.default.borderRed]: touched.cpuCores && errors.cpuCores
                                        }) }), (0, jsx_runtime_1.jsx)(formik_1.ErrorMessage, { className: UpdateProduct_module_scss_1.default.errorMsg, name: "cpuCores", component: "div" })] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: UpdateProduct_module_scss_1.default.inputGroup }, { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "screenSize" }, { children: "\u0414\u0438\u0430\u0433\u043E\u043D\u0430\u043B\u044C \u044D\u043A\u0440\u0430\u043D\u0430, \u0434\u044E\u0439\u043C" })), (0, jsx_runtime_1.jsx)(formik_1.Field, { id: "screenSize", name: "screenSize", type: "text", className: (0, classnames_1.default)({
                                            [UpdateProduct_module_scss_1.default.borderRed]: touched.screenSize && errors.screenSize
                                        }) }), (0, jsx_runtime_1.jsx)(formik_1.ErrorMessage, { className: UpdateProduct_module_scss_1.default.errorMsg, name: "screenSize", component: "div" })] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: UpdateProduct_module_scss_1.default.inputGroup }, { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "batteryCapacity" }, { children: "\u0401\u043C\u043A\u043E\u0441\u0442\u044C \u0430\u043A\u043A\u0443\u043C\u0443\u043B\u044F\u0442\u043E\u0440\u0430, \u043C\u0410\u0447" })), (0, jsx_runtime_1.jsx)(formik_1.Field, { id: "batteryCapacity", name: "batteryCapacity", type: "text", placeholder: "", className: (0, classnames_1.default)({
                                            [UpdateProduct_module_scss_1.default.borderRed]: touched.batteryCapacity && errors.batteryCapacity
                                        }) }), (0, jsx_runtime_1.jsx)(formik_1.ErrorMessage, { className: UpdateProduct_module_scss_1.default.errorMsg, name: "batteryCapacity", component: "div" })] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: UpdateProduct_module_scss_1.default.inputGroup }, { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "color" }, { children: "\u0426\u0432\u0435\u0442 \u0442\u043E\u0432\u0430\u0440\u0430" })), (0, jsx_runtime_1.jsxs)(formik_1.Field, Object.assign({ as: "select", id: "color", name: "color", className: (0, classnames_1.default)({
                                            [UpdateProduct_module_scss_1.default.borderRed]: touched.color && errors.color
                                        }) }, { children: [(0, jsx_runtime_1.jsx)("option", Object.assign({ value: "" }, { children: "\u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0446\u0432\u0435\u0442" })), (0, jsx_runtime_1.jsx)("option", Object.assign({ value: "white" }, { children: "\u0431\u0435\u043B\u044B\u0439" })), (0, jsx_runtime_1.jsx)("option", Object.assign({ value: "black" }, { children: "\u0447\u0435\u0440\u043D\u044B\u0439" })), (0, jsx_runtime_1.jsx)("option", Object.assign({ value: "gray" }, { children: "\u0441\u0435\u0440\u044B\u0439" })), (0, jsx_runtime_1.jsx)("option", Object.assign({ value: "blue" }, { children: "\u0441\u0438\u043D\u0438\u0439" })), (0, jsx_runtime_1.jsx)("option", Object.assign({ value: "red" }, { children: "\u043A\u0440\u0430\u0441\u043D\u044B\u0439" })), (0, jsx_runtime_1.jsx)("option", Object.assign({ value: "pink" }, { children: "\u0440\u043E\u0437\u043E\u0432\u044B\u0439" })), (0, jsx_runtime_1.jsx)("option", Object.assign({ value: "green" }, { children: "\u0437\u0435\u043B\u0435\u043D\u044B\u0439" })), (0, jsx_runtime_1.jsx)("option", Object.assign({ value: "yellow" }, { children: "\u0436\u0435\u043B\u0442\u044B\u0439" }))] })), (0, jsx_runtime_1.jsx)(formik_1.ErrorMessage, { className: UpdateProduct_module_scss_1.default.errorMsg, name: "color", component: "div" })] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: UpdateProduct_module_scss_1.default.inputGroup }, { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "productCode" }, { children: "\u0410\u0440\u0442\u0438\u043A\u0443\u043B \u0442\u043E\u0432\u0430\u0440\u0430" })), (0, jsx_runtime_1.jsx)(formik_1.Field, { id: "productCode", name: "productCode", type: "text", className: (0, classnames_1.default)({
                                            [UpdateProduct_module_scss_1.default.borderRed]: touched.productCode && errors.productCode
                                        }) }), (0, jsx_runtime_1.jsx)(formik_1.ErrorMessage, { className: UpdateProduct_module_scss_1.default.errorMsg, name: "productCode", component: "div" })] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, classnames_1.default)(UpdateProduct_module_scss_1.default.inputGroup, UpdateProduct_module_scss_1.default.shortDesc) }, { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "shortDesc" }, { children: "\u041A\u0440\u0430\u0442\u043A\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435" })), (0, jsx_runtime_1.jsx)(formik_1.Field, { as: "textarea", id: "shortDesc", name: "shortDesc", className: (0, classnames_1.default)({
                                            [UpdateProduct_module_scss_1.default.borderRed]: touched.shortDesc && errors.shortDesc
                                        }) }), (0, jsx_runtime_1.jsx)(formik_1.ErrorMessage, { className: UpdateProduct_module_scss_1.default.errorMsg, name: "shortDesc", component: "div" })] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, classnames_1.default)(UpdateProduct_module_scss_1.default.inputGroup, UpdateProduct_module_scss_1.default.description) }, { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "description" }, { children: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435" })), (0, jsx_runtime_1.jsx)(formik_1.Field, { as: "textarea", id: "description", name: "description", className: (0, classnames_1.default)({
                                            [UpdateProduct_module_scss_1.default.borderRed]: touched.description && errors.description
                                        }) }), (0, jsx_runtime_1.jsx)(formik_1.ErrorMessage, { className: UpdateProduct_module_scss_1.default.errorMsg, name: "description", component: "div" })] })), (0, jsx_runtime_1.jsx)("button", Object.assign({ type: "submit", disabled: !isValid || !dirty || isSubmitting, className: (0, classnames_1.default)(UpdateProduct_module_scss_1.default.submit, {
                                    [UpdateProduct_module_scss_1.default.disabled]: !isValid || !dirty || isSubmitting
                                }) }, { children: "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0442\u043E\u0432\u0430\u0440" })), (0, jsx_runtime_1.jsx)("button", Object.assign({ type: "button", disabled: isSubmitting, className: (0, classnames_1.default)(UpdateProduct_module_scss_1.default.cancel, {
                                    [UpdateProduct_module_scss_1.default.disabled]: isSubmitting
                                }), onClick: goToAccount }, { children: "\u041E\u0442\u043C\u0435\u043D\u0430" }))] })) })) }))] }));
};
exports.UpdateProduct = UpdateProduct;
//# sourceMappingURL=index.js.map