import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
class Products extends Component {
  state = {
    products: [
      { id: 1, name: "Product 1" },
      { id: 2, name: "Product 2" },
      { id: 3, name: "Product 3" },
    ],
  };

  render() {
    return (
      <Router>
        <div>
          <h1>Products</h1>
          <ul>
            {this.state.products.map((product) => (
              <li key={product.id}>
                <Link to={`/products/${product.id}`}>{product.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Router>
    );
  }
}

export default Products;
