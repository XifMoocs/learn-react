import { Route } from "react-router";
import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer/Footer";

import Home from "./pages/Client/Home";
import Product from "./pages/Client/Product";

function App() {
  return (
    <div>
      <Header />
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/product">
        <Product />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
