import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import { Home, Product, Cart, Favorites, CartEmpty, FavoritesEmpty } from "./pages";

function App() {
  return (
    <>
      <Header />
      <div className="app-container app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/empty-cart" element={<CartEmpty />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/empty-favorites" element={<FavoritesEmpty />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
