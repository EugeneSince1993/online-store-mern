"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("react-dom/client");
const react_router_dom_1 = require("react-router-dom");
const App_1 = __importDefault(require("./App"));
require("./scss/app.scss");
const store_1 = require("./redux/store");
const react_redux_1 = require("react-redux");
const container = document.getElementById("root");
const root = (0, client_1.createRoot)(container);
root.render(<react_redux_1.Provider store={store_1.store}>
    <react_router_dom_1.BrowserRouter>
      <App_1.default />
    </react_router_dom_1.BrowserRouter>
  </react_redux_1.Provider>);
//# sourceMappingURL=index.js.map