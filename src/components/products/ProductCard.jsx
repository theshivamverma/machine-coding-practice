import React from 'react'

import "./productCard.css"

function ProductCard({ product }) {
    return (
      <div className="product-card">
        <div className="product-img-container">
          <img alt="" className="product-img" src={product.imageURL} />
        </div>
        <h2 className="product-name">{product.productName}</h2>
        <h5>{product.brand}</h5>
        <p>{product.price}</p>
        <p>{product.idealFor}</p>
        <p>{product.size}</p>
      </div>
    );
}

export default ProductCard
