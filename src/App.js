import { BrowserRouter, Switch, Route } from "react-router-dom";

// Pages
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import About from "./pages/about/About";
import Item from "./pages/item/Item";
// Styles
import "./App.css";

// Components
import Navbar from "./components/NavbarMain";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/shop">
            <Shop />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="/products/:id">
            <Item />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
