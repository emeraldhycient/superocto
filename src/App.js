import Index from "./pages";
import Pricing from "./pages/prices";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/prices" component={Pricing} />
      </Switch>
    </Router>
  );
}

export default App;
