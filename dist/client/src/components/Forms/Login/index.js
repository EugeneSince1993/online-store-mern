"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const formik_1 = require("formik");
const Login_module_scss_1 = __importDefault(require("./Login.module.scss"));
const Login = () => {
    const emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: Login_module_scss_1.default.loginForm }, { children: (0, jsx_runtime_1.jsx)(formik_1.Formik, Object.assign({ initialValues: { email: '', password: '' }, validate: values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                }
                else if (!emailRegEx.test(values.email)) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }, onSubmit: (values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            } }, { children: ({ isSubmitting }) => ((0, jsx_runtime_1.jsxs)(formik_1.Form, { children: [(0, jsx_runtime_1.jsx)(formik_1.Field, { type: "email", name: "email" }), (0, jsx_runtime_1.jsx)(formik_1.ErrorMessage, { name: "email", component: "div" }), (0, jsx_runtime_1.jsx)(formik_1.Field, { type: "password", name: "password" }), (0, jsx_runtime_1.jsx)(formik_1.ErrorMessage, { name: "password", component: "div" }), (0, jsx_runtime_1.jsx)("button", Object.assign({ type: "submit", disabled: isSubmitting }, { children: "Submit" }))] })) })) })));
};
exports.Login = Login;
//# sourceMappingURL=index.js.map