"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const components_1 = require("./components");
const pages_1 = require("./pages");
function App() {
    return (<>
      <components_1.Header />
      <div className="app-container app-content">
        <react_router_dom_1.Routes>
          <react_router_dom_1.Route path="/" element={<pages_1.Home />}/>
          <react_router_dom_1.Route path="/products/:id" element={<pages_1.Product />}/>
          <react_router_dom_1.Route path="/cart" element={<pages_1.Cart />}/>
          <react_router_dom_1.Route path="/empty-cart" element={<pages_1.CartEmpty />}/>
          <react_router_dom_1.Route path="/favorites" element={<pages_1.Favorites />}/>
          <react_router_dom_1.Route path="/empty-favorites" element={<pages_1.FavoritesEmpty />}/>
        </react_router_dom_1.Routes>
      </div>
      <components_1.Footer />
    </>);
}
exports.default = App;
//# sourceMappingURL=App.js.map