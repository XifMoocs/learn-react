import { Route } from "react-router";
import Header from "./layouts/Client/Header/Header";
import Footer from "./layouts/Client/Footer/Footer";
import Home from "./pages/Client/Home";
import Product from "./pages/Client/Product";
import Cart from "./pages/Client/Cart";
import data from "./data";
import { useState } from "react";

function App() {
  const { product } = data;
  const [carts, setcarts] = useState([]);
  const addCart = (product) => {
    const exist = carts.find((x) => x.id === product.id);
    if (exist) {
      setcarts(
        carts.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setcarts([...carts, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div>
      <Header />
      <Route exact path="/">
        <Home />
        <Footer />
      </Route>
      <Route path="/home">
        <Home />
        <Footer />
      </Route>
      <Route path="/product">
        <Product product={product} cart={carts} addCart={addCart} />
        <Footer />
      </Route>
      <Route path="/cart">
        <Cart cart={carts} />
      </Route>
    </div>
  );
}

export default App;
