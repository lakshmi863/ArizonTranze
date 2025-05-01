import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CartPage from './pages/CartPage'; // The new CartPage component
import ProductListing from './components/Product/ProductListing'; // Product listing component

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ProductListing} />
        <Route path="/cart" component={CartPage} /> {/* Cart Page Route */}
      </Switch>
    </Router>
  );
}

export default App;
