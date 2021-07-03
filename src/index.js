import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ProductProvider } from "./components/products"
import { FilterProvider } from "./components/filters"

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

