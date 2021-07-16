import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, ProductDetail } from "../pages";
function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/product-detail/:id" exact component={ProductDetail} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
