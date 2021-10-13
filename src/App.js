import { createBrowserHistory } from "history";
import { Route, Router, Switch } from "react-router";
import Header from "./layouts/Header/Header";
import Home from "./pages/User/Home";
import Product from "./pages/User/Product";

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
    </div>
  );
}

export default App;
