import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { ProductDetail } from "../pages/ProductDetail/ProductDetail";
import { PageError } from "../pages/404/PageError";
export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/product-detail/:id" component={ProductDetail} />
        <Route path="*" component={PageError} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
