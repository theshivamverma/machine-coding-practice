/* eslint-disable */

import React, { useEffect, useState } from "react";

import { useFilter } from "../filters";
import { useProduct } from "../products";

function Sidebar() {
  const [displayBrands, setdisplayBrands] = useState([]);
  const [displaySizes, setdisplaySizes] = useState([]);
  const [displayIdealFor, setdisplayIdealFor] = useState([]);

  const { filterState, filterDispatch } = useFilter();

  const { brands, idealFor, sizes, sort } = filterState;

  const { products } = useProduct();

  function setBrandNames() {
    let result = [];
    products.forEach((product) => {
      if (!result.includes(product.brand)) {
        result.push(product.brand);
      }
    });
    setdisplayBrands(result);
  }

  function setdisplaySizesFromData() {
    let result = [];
    products.forEach((product) => {
      if (!result.includes(product.size)) {
        result.push(product.size);
      }
    });
    setdisplaySizes(result);
  }

  function setdisplayIdealForFromData() {
    let result = [];
    products.forEach((product) => {
      if (!result.includes(product.idealFor)) {
        result.push(product.idealFor);
      }
    });
    setdisplayIdealFor(result);
  }

  function handleBrandClick(e) {
    if (e.target.checked) {
      filterDispatch({
        type: "INCLUDE_BRAND",
        payload: { brand: e.target.value },
      });
    } else {
      filterDispatch({
        type: "REMOVE_BRAND",
        payload: { brand: e.target.value },
      });
    }
  }

  function handleSizeClick(e) {
    if (e.target.checked) {
      filterDispatch({
        type: "INCLUDE_SIZE",
        payload: { size: e.target.value },
      });
    } else {
      filterDispatch({
        type: "REMOVE_SIZE",
        payload: { size: e.target.value },
      });
    }
  }

  function handleIdealForClick(e) {
    if (e.target.checked) {
      filterDispatch({
        type: "INCLUDE_IDEAL_FOR",
        payload: { idealFor: e.target.value },
      });
    } else {
      filterDispatch({
        type: "REMOVE_IDEAL_FOR",
        payload: { idealFor: e.target.value },
      });
    }
  }

  useEffect(() => {
    setBrandNames();
    setdisplayIdealForFromData();
    setdisplaySizesFromData();
  }, [products]);

  return (
    <div>
      <h1>Sort and Filter</h1>
      <div>
        <p>Sort by Price</p>
        <div>
          <label>High to Low</label>
          <input
            checked={sort === "HTOL"}
            name="sort"
            type="radio"
            onChange={() => filterDispatch({ type: "HIGH_TO_LOW" })}
          />{" "}
          <br />
        </div>
        <div>
          <label>Low to High</label>
          <input
            checked={sort === "LTOH"}
            name="sort"
            type="radio"
            onChange={() => filterDispatch({ type: "LOW_TO_HIGH" })}
          />
        </div>
      </div>
      <div>
        <p>Filter by brand</p>
        {displayBrands.map((brandName) => {
          return (
            <div>
              <label>{brandName}</label>
              <input
                type="checkbox"
                checked={brands.includes(brandName)}
                value={brandName}
                onChange={handleBrandClick}
              />{" "}
              <br />
            </div>
          );
        })}
      </div>
      <div>
        <p>Filter by size</p>
        {displaySizes.map((size) => {
          return (
            <div>
              <label>{size}</label>
              <input
                type="checkbox"
                value={size}
                checked={sizes.includes(size)}
                onChange={handleSizeClick}
              />{" "}
              <br />
            </div>
          );
        })}
      </div>
      <div>
        <p>Ideal for</p>
        {displayIdealFor.map((type) => {
          return (
            <div>
              <label>{type}</label>
              <input
                type="checkbox"
                value={type}
                checked={idealFor.includes(type)}
                onChange={handleIdealForClick}
              />{" "}
              <br />
            </div>
          );
        })}
      </div>
      <button onClick={() => filterDispatch({ type: "CLEAR_ALL_FILTERS" })}>
        Clear all filters
      </button>
    </div>
  );
}

export default Sidebar;
