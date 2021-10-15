import { Route } from "react-router";
import Header from "./layouts/Client/Header/Header";
import Footer from "./layouts/Client/Footer/Footer";
import Home from "./pages/Client/Home";
import Product from "./pages/Client/Product";
import Cart from "./pages/Client/Cart";

function App() {
  return (
    <div>
      <Header />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/product">
        <Product />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
