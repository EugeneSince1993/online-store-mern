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
exports.Login = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const formik_1 = require("formik");
const Login_module_scss_1 = __importDefault(require("./Login.module.scss"));
const Yup = __importStar(require("yup"));
const classnames_1 = __importDefault(require("classnames"));
const hooks_1 = require("../../../redux/hooks");
const asyncActions_1 = require("../../../redux/auth/asyncActions");
const react_router_dom_1 = require("react-router-dom");
const selectors_1 = require("../../../redux/auth/selectors");
const Login = ({ onClose }) => {
    const dispatch = (0, hooks_1.useAppDispatch)();
    const isAuth = (0, hooks_1.useAppSelector)(selectors_1.selectIsAuth);
    const navigate = (0, react_router_dom_1.useNavigate)();
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: Login_module_scss_1.default.form }, { children: (0, jsx_runtime_1.jsx)(formik_1.Formik, Object.assign({ initialValues: { email: '', password: '' }, validationSchema: Yup.object({
                email: Yup.string().email('Неверный email').required('Обязательное поле'),
                password: Yup.string().min(5, 'Минимальная длина пароля 5 символов').required('Обязательное поле'),
            }), onSubmit: (values, { setSubmitting }) => __awaiter(void 0, void 0, void 0, function* () {
                const data = yield dispatch((0, asyncActions_1.fetchAuth)(values));
                if (!data.payload) {
                    return alert('Не удалось авторизоваться');
                }
                if ('token' in data.payload) {
                    window.localStorage.setItem('token', data.payload.token);
                }
                onClose(false);
                navigate('/account');
                setSubmitting(false);
            }) }, { children: ({ isSubmitting, touched, errors }) => ((0, jsx_runtime_1.jsxs)(formik_1.Form, { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "email" }, { children: "Email" })), (0, jsx_runtime_1.jsx)(formik_1.Field, { id: "email", name: "email", type: "email", placeholder: "test@test.com", className: (0, classnames_1.default)({ [Login_module_scss_1.default.borderRed]: touched.email && errors.email }) }), (0, jsx_runtime_1.jsx)(formik_1.ErrorMessage, { name: "email", component: "div" }), (0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "password" }, { children: "\u041F\u0430\u0440\u043E\u043B\u044C" })), (0, jsx_runtime_1.jsx)(formik_1.Field, { id: "password", type: "password", name: "password", className: (0, classnames_1.default)({ [Login_module_scss_1.default.borderRed]: touched.password && errors.password }) }), (0, jsx_runtime_1.jsx)(formik_1.ErrorMessage, { name: "password", component: "div" }), (0, jsx_runtime_1.jsx)("button", Object.assign({ type: "submit", disabled: isSubmitting }, { children: "\u0412\u043E\u0439\u0442\u0438" }))] })) })) })));
};
exports.Login = Login;
//# sourceMappingURL=index.js.map