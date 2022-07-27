import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductState from "./context/product-state";
import { Navbar } from "./components/Navbar";
import Login from "./components/Login";
import Cart from "./components/Cart";
import HomePage from "./components/HomePage";
import Category from "./components/Category";
import Rating from "./components/Rating";
import ProductTable from "./ProductTable";

function App() {
  return (
    <ProductState>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/login" element={<Login />} exact />
          <Route path="/cart" element={<Cart />} exact />
          <Route path="/category/:oneCategory" element={<Category />} exact />
          <Route path="/category/:oneCategory" element={<Rating />} exact />
          <Route path="/section" element={<ProductTable />} exact />
        </Routes>
      </Router>
    </ProductState>
  );
}

export default App;
