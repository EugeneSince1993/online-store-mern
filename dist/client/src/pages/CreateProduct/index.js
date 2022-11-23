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
exports.CreateProduct = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const formik_1 = require("formik");
const Yup = __importStar(require("yup"));
const react_router_dom_1 = require("react-router-dom");
const hooks_1 = require("../../redux/hooks");
const CreateProduct_module_scss_1 = __importDefault(require("./CreateProduct.module.scss"));
const classnames_1 = __importDefault(require("classnames"));
const asyncActions_1 = require("../../redux/product/asyncActions");
const axios_1 = __importDefault(require("../../axios"));
const components_1 = require("../../components");
const CreateProduct = () => {
    const dispatch = (0, hooks_1.useAppDispatch)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const goToAccount = () => {
        navigate('/account');
    };
    const inputFileRef = (0, react_1.useRef)(null);
    const inputFilesRef = (0, react_1.useRef)(null);
    const [productThumbnail, setProductThumbnail] = (0, react_1.useState)('');
    const [productImages, setProductImages] = (0, react_1.useState)([]);
    const productImagesStr = productImages.join(' ');
    const formik = (0, formik_1.useFormik)({
        initialValues: {
            name: '',
            imageUrl: '',
            images: '',
            brand: '',
            price: '',
            memory: '',
            ram: '',
            cpuCores: '',
            screenSize: '',
            batteryCapacity: '',
            color: '',
            productCode: '',
            shortDesc: '',
            description: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(3, 'Минимум 3 символа')
                .required('Обязательное поле'),
            imageUrl: Yup.string()
                .required('Добавьте миниатюру изображения товара'),
            images: Yup.string()
                .required('Добавьте изображения товара'),
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
        }),
        onSubmit: (values, { setSubmitting }) => __awaiter(void 0, void 0, void 0, function* () {
            const data = yield dispatch((0, asyncActions_1.createProduct)(values));
            if (!data.payload) {
                return alert('Не удалось создать товар');
            }
            else {
                alert(`Товар "${data.payload.name}" добавлен`);
            }
            goToAccount();
            setSubmitting(false);
        }),
    });
    const handleClickInputFile = () => {
        if (inputFileRef.current) {
            inputFileRef.current.click();
        }
    };
    const handleChangeFile = (event) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if (event.target.files) {
                const formData = new FormData();
                const file = event.target.files[0];
                formData.append('inputFile', file);
                const { data } = yield axios_1.default.post('/uploads/thumbnail', formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                });
                setProductThumbnail(data.url);
            }
            else {
                throw "files array is empty";
            }
        }
        catch (err) {
            console.warn(err);
            alert('Ошибка при загрузке файла!');
        }
    });
    if (formik.values.imageUrl) {
        delete formik.errors.imageUrl;
    }
    const onClickRemoveImage = () => __awaiter(void 0, void 0, void 0, function* () {
        setProductThumbnail('');
        yield axios_1.default.delete('/uploads', { data: { imagePath: `.${productThumbnail}` } });
    });
    const handleClickInputFiles = () => {
        if (inputFilesRef.current) {
            inputFilesRef.current.click();
        }
    };
    const handleChangeFiles = (event) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if (event.target.files) {
                const formData = new FormData();
                const files = event.target.files;
                for (let i = 0; i < files.length; i++) {
                    formData.append('inputFiles', files[i]);
                }
                const { data } = yield axios_1.default.post('/uploads/images', formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                });
                const imageUrlsArr = data.files.map((file) => {
                    return `/uploads/images/${file.originalname}`;
                });
                setProductImages(imageUrlsArr);
            }
            else {
                throw "files array is empty";
            }
        }
        catch (err) {
            console.warn(err);
            alert('Ошибка при загрузке файла!');
        }
    });
    if (formik.values.images) {
        delete formik.errors.images;
    }
    const onClickRemoveImageItem = (imageUrl) => __awaiter(void 0, void 0, void 0, function* () {
        setProductImages((prevState) => {
            return prevState.filter((image) => {
                return image !== imageUrl;
            });
        });
        yield axios_1.default.delete('/uploads', { data: { imagePath: `.${imageUrl}` } });
    });
    (0, react_1.useEffect)(() => {
        formik.setFieldValue('imageUrl', productThumbnail);
    }, [productThumbnail]);
    (0, react_1.useEffect)(() => {
        formik.setFieldValue('images', productImagesStr);
    }, [productImages]);
    (0, react_1.useEffect)(() => {
        window.scrollTo(0, 0);
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h3", { children: "\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0442\u043E\u0432\u0430\u0440\u0430" }), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: CreateProduct_module_scss_1.default.form }, { children: (0, jsx_runtime_1.jsxs)("form", Object.assign({ onSubmit: formik.handleSubmit }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: CreateProduct_module_scss_1.default.inputGroup }, { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "name" }, { children: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0442\u043E\u0432\u0430\u0440\u0430" })), (0, jsx_runtime_1.jsx)("input", { id: "name", name: "name", type: "text", onChange: formik.handleChange, onBlur: formik.handleBlur, value: formik.values.name, className: (0, classnames_1.default)({
                                        [CreateProduct_module_scss_1.default.borderRed]: formik.touched.name && formik.errors.name
                                    }) }), formik.touched.name && formik.errors.name ? ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: CreateProduct_module_scss_1.default.errorMsg }, { children: formik.errors.name }))) : null] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, classnames_1.default)(CreateProduct_module_scss_1.default.inputGroup, CreateProduct_module_scss_1.default.productThumbnail) }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: CreateProduct_module_scss_1.default.inputHeading }, { children: "\u041C\u0438\u043D\u0438\u0430\u0442\u044E\u0440\u0430 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0442\u043E\u0432\u0430\u0440\u0430" })), (0, jsx_runtime_1.jsx)(components_1.Button, Object.assign({ variant: "outlined", onClickFunc: handleClickInputFile }, { children: "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C" })), (0, jsx_runtime_1.jsx)("input", { ref: inputFileRef, type: "file", name: "inputFile", onChange: handleChangeFile, className: CreateProduct_module_scss_1.default.inputFileImage }), productThumbnail && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: CreateProduct_module_scss_1.default.imageContainer }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: CreateProduct_module_scss_1.default.image }, { children: (0, jsx_runtime_1.jsx)("img", { src: productThumbnail, alt: "product-thumbnail" }) })) })), (0, jsx_runtime_1.jsx)(components_1.Button, Object.assign({ variant: "outlined", onClickFunc: onClickRemoveImage }, { children: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C" }))] })), (0, jsx_runtime_1.jsx)("input", { name: "imageUrl", type: "text", onChange: formik.handleChange, onBlur: formik.handleBlur, value: formik.values.imageUrl, className: CreateProduct_module_scss_1.default.imageUrl }), formik.touched.imageUrl && formik.errors.imageUrl ? ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: CreateProduct_module_scss_1.default.errorMsg }, { children: formik.errors.imageUrl }))) : null] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, classnames_1.default)(CreateProduct_module_scss_1.default.inputGroup, CreateProduct_module_scss_1.default.productImages) }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: CreateProduct_module_scss_1.default.inputHeading }, { children: "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0442\u043E\u0432\u0430\u0440\u0430" })), (0, jsx_runtime_1.jsx)(components_1.Button, Object.assign({ variant: "outlined", onClickFunc: handleClickInputFiles }, { children: "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C" })), (0, jsx_runtime_1.jsx)("input", { ref: inputFilesRef, type: "file", multiple: true, name: "inputFiles", onChange: handleChangeFiles, className: CreateProduct_module_scss_1.default.inputFilesImages }), productImages && ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: CreateProduct_module_scss_1.default.imagesContainer }, { children: productImages.map((imageUrl, idx) => {
                                        return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: CreateProduct_module_scss_1.default.imageContainer }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: CreateProduct_module_scss_1.default.image }, { children: (0, jsx_runtime_1.jsx)("img", { src: imageUrl, alt: "product-image" }) })), (0, jsx_runtime_1.jsx)(components_1.Button, Object.assign({ variant: "outlined", onClickFunc: () => onClickRemoveImageItem(imageUrl) }, { children: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C" }))] }), idx));
                                    }) }))), (0, jsx_runtime_1.jsx)("input", { name: "images", type: "text", onChange: formik.handleChange, onBlur: formik.handleBlur, value: formik.values.images, className: CreateProduct_module_scss_1.default.images }), formik.touched.images && formik.errors.images ? ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: CreateProduct_module_scss_1.default.errorMsg }, { children: formik.errors.images }))) : null] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: CreateProduct_module_scss_1.default.inputGroup }, { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "brand" }, { children: "\u0411\u0440\u0435\u043D\u0434" })), (0, jsx_runtime_1.jsx)("input", { id: "brand", name: "brand", type: "text", onChange: formik.handleChange, onBlur: formik.handleBlur, value: formik.values.brand, className: (0, classnames_1.default)({
                                        [CreateProduct_module_scss_1.default.borderRed]: formik.touched.brand && formik.errors.brand
                                    }) }), formik.touched.brand && formik.errors.brand ? ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: CreateProduct_module_scss_1.default.errorMsg }, { children: formik.errors.brand }))) : null] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: CreateProduct_module_scss_1.default.inputGroup }, { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "price" }, { children: "\u0426\u0435\u043D\u0430, \u0440\u0443\u0431." })), (0, jsx_runtime_1.jsx)("input", { id: "price", name: "price", type: "text", onChange: formik.handleChange, onBlur: formik.handleBlur, value: formik.values.price, className: (0, classnames_1.default)({
                                        [CreateProduct_module_scss_1.default.borderRed]: formik.touched.price && formik.errors.price
                                    }) }), formik.touched.price && formik.errors.price ? ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: CreateProduct_module_scss_1.default.errorMsg }, { children: formik.errors.price }))) : null] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: CreateProduct_module_scss_1.default.inputGroup }, { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "memory" }, { children: "\u041E\u0431\u044A\u0435\u043C \u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u043E\u0439 \u043F\u0430\u043C\u044F\u0442\u0438, \u0413\u0431" })), (0, jsx_runtime_1.jsx)("input", { id: "memory", name: "memory", type: "text", onChange: formik.handleChange, onBlur: formik.handleBlur, value: formik.values.memory, className: (0, classnames_1.default)({
                                        [CreateProduct_module_scss_1.default.borderRed]: formik.touched.memory && formik.errors.memory
                                    }) }), formik.touched.memory && formik.errors.memory ? ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: CreateProduct_module_scss_1.default.errorMsg }, { children: formik.errors.memory }))) : null] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: CreateProduct_module_scss_1.default.inputGroup }, { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "ram" }, { children: "\u041E\u0431\u044A\u0435\u043C \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0439 \u043F\u0430\u043C\u044F\u0442\u0438, \u0413\u0431" })), (0, jsx_runtime_1.jsx)("input", { id: "ram", name: "ram", type: "text", onChange: formik.handleChange, onBlur: formik.handleBlur, value: formik.values.ram, className: (0, classnames_1.default)({
                                        [CreateProduct_module_scss_1.default.borderRed]: formik.touched.ram && formik.errors.ram
                                    }) }), formik.touched.ram && formik.errors.ram ? ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: CreateProduct_module_scss_1.default.errorMsg }, { children: formik.errors.ram }))) : null] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: CreateProduct_module_scss_1.default.inputGroup }, { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "cpuCores" }, { children: "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u044F\u0434\u0435\u0440" })), (0, jsx_runtime_1.jsx)("input", { id: "cpuCores", name: "cpuCores", type: "text", onChange: formik.handleChange, onBlur: formik.handleBlur, value: formik.values.cpuCores, className: (0, classnames_1.default)({
                                        [CreateProduct_module_scss_1.default.borderRed]: formik.touched.cpuCores && formik.errors.cpuCores
                                    }) }), formik.touched.cpuCores && formik.errors.cpuCores ? ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: CreateProduct_module_scss_1.default.errorMsg }, { children: formik.errors.cpuCores }))) : null] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: CreateProduct_module_scss_1.default.inputGroup }, { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "screenSize" }, { children: "\u0414\u0438\u0430\u0433\u043E\u043D\u0430\u043B\u044C \u044D\u043A\u0440\u0430\u043D\u0430, \u0434\u044E\u0439\u043C" })), (0, jsx_runtime_1.jsx)("input", { id: "screenSize", name: "screenSize", type: "text", onChange: formik.handleChange, onBlur: formik.handleBlur, value: formik.values.screenSize, className: (0, classnames_1.default)({
                                        [CreateProduct_module_scss_1.default.borderRed]: formik.touched.screenSize && formik.errors.screenSize
                                    }) }), formik.touched.screenSize && formik.errors.screenSize ? ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: CreateProduct_module_scss_1.default.errorMsg }, { children: formik.errors.screenSize }))) : null] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: CreateProduct_module_scss_1.default.inputGroup }, { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "batteryCapacity" }, { children: "\u0401\u043C\u043A\u043E\u0441\u0442\u044C \u0430\u043A\u043A\u0443\u043C\u0443\u043B\u044F\u0442\u043E\u0440\u0430, \u043C\u0410\u0447" })), (0, jsx_runtime_1.jsx)("input", { id: "batteryCapacity", name: "batteryCapacity", type: "text", onChange: formik.handleChange, onBlur: formik.handleBlur, value: formik.values.batteryCapacity, className: (0, classnames_1.default)({
                                        [CreateProduct_module_scss_1.default.borderRed]: formik.touched.batteryCapacity && formik.errors.batteryCapacity
                                    }) }), formik.touched.batteryCapacity && formik.errors.batteryCapacity ? ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: CreateProduct_module_scss_1.default.errorMsg }, { children: formik.errors.batteryCapacity }))) : null] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: CreateProduct_module_scss_1.default.inputGroup }, { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "color" }, { children: "\u0426\u0432\u0435\u0442 \u0442\u043E\u0432\u0430\u0440\u0430" })), (0, jsx_runtime_1.jsxs)("select", Object.assign({ id: "color", name: "color", onChange: formik.handleChange, onBlur: formik.handleBlur, value: formik.values.color, className: (0, classnames_1.default)({
                                        [CreateProduct_module_scss_1.default.borderRed]: formik.touched.color && formik.errors.color
                                    }) }, { children: [(0, jsx_runtime_1.jsx)("option", Object.assign({ value: "" }, { children: "\u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0446\u0432\u0435\u0442" })), (0, jsx_runtime_1.jsx)("option", Object.assign({ value: "white" }, { children: "\u0431\u0435\u043B\u044B\u0439" })), (0, jsx_runtime_1.jsx)("option", Object.assign({ value: "black" }, { children: "\u0447\u0435\u0440\u043D\u044B\u0439" })), (0, jsx_runtime_1.jsx)("option", Object.assign({ value: "gray" }, { children: "\u0441\u0435\u0440\u044B\u0439" })), (0, jsx_runtime_1.jsx)("option", Object.assign({ value: "blue" }, { children: "\u0441\u0438\u043D\u0438\u0439" })), (0, jsx_runtime_1.jsx)("option", Object.assign({ value: "red" }, { children: "\u043A\u0440\u0430\u0441\u043D\u044B\u0439" })), (0, jsx_runtime_1.jsx)("option", Object.assign({ value: "pink" }, { children: "\u0440\u043E\u0437\u043E\u0432\u044B\u0439" })), (0, jsx_runtime_1.jsx)("option", Object.assign({ value: "green" }, { children: "\u0437\u0435\u043B\u0435\u043D\u044B\u0439" })), (0, jsx_runtime_1.jsx)("option", Object.assign({ value: "yellow" }, { children: "\u0436\u0435\u043B\u0442\u044B\u0439" }))] })), formik.touched.color && formik.errors.color ? ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: CreateProduct_module_scss_1.default.errorMsg }, { children: formik.errors.color }))) : null] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: CreateProduct_module_scss_1.default.inputGroup }, { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "productCode" }, { children: "\u0410\u0440\u0442\u0438\u043A\u0443\u043B \u0442\u043E\u0432\u0430\u0440\u0430" })), (0, jsx_runtime_1.jsx)("input", { id: "productCode", name: "productCode", type: "text", onChange: formik.handleChange, onBlur: formik.handleBlur, value: formik.values.productCode, className: (0, classnames_1.default)({
                                        [CreateProduct_module_scss_1.default.borderRed]: formik.touched.productCode && formik.errors.productCode
                                    }) }), formik.touched.productCode && formik.errors.productCode ? ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: CreateProduct_module_scss_1.default.errorMsg }, { children: formik.errors.productCode }))) : null] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, classnames_1.default)(CreateProduct_module_scss_1.default.inputGroup, CreateProduct_module_scss_1.default.shortDesc) }, { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "shortDesc" }, { children: "\u041A\u0440\u0430\u0442\u043A\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435" })), (0, jsx_runtime_1.jsx)("textarea", { id: "shortDesc", name: "shortDesc", onChange: formik.handleChange, onBlur: formik.handleBlur, value: formik.values.shortDesc, className: (0, classnames_1.default)({
                                        [CreateProduct_module_scss_1.default.borderRed]: formik.touched.shortDesc && formik.errors.shortDesc
                                    }) }), formik.touched.shortDesc && formik.errors.shortDesc ? ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: CreateProduct_module_scss_1.default.errorMsg }, { children: formik.errors.shortDesc }))) : null] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, classnames_1.default)(CreateProduct_module_scss_1.default.inputGroup, CreateProduct_module_scss_1.default.description) }, { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "description" }, { children: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435" })), (0, jsx_runtime_1.jsx)("textarea", { id: "description", name: "description", onChange: formik.handleChange, onBlur: formik.handleBlur, value: formik.values.description, className: (0, classnames_1.default)({
                                        [CreateProduct_module_scss_1.default.borderRed]: formik.touched.description && formik.errors.description
                                    }) }), formik.touched.description && formik.errors.description ? ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: CreateProduct_module_scss_1.default.errorMsg }, { children: formik.errors.description }))) : null] })), (0, jsx_runtime_1.jsx)("button", Object.assign({ type: "submit", disabled: formik.isSubmitting || !formik.isValid, className: (0, classnames_1.default)(CreateProduct_module_scss_1.default.submit, {
                                [CreateProduct_module_scss_1.default.disabled]: formik.isSubmitting || !formik.isValid
                            }) }, { children: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0442\u043E\u0432\u0430\u0440" })), (0, jsx_runtime_1.jsx)("button", Object.assign({ type: "button", disabled: formik.isSubmitting, className: (0, classnames_1.default)(CreateProduct_module_scss_1.default.cancel, {
                                [CreateProduct_module_scss_1.default.disabled]: formik.isSubmitting
                            }), onClick: goToAccount }, { children: "\u041E\u0442\u043C\u0435\u043D\u0430" }))] })) }))] }));
};
exports.CreateProduct = CreateProduct;
//# sourceMappingURL=index.js.map