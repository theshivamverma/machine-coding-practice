import ProductCard from "./ProductCard"

function ProductList({ filteredProducts }) {

    return (
        <div className="product-list">
            {
                filteredProducts.map(product => <ProductCard key={product.id} product={product} />)
            }
        </div>
    )
}

export default ProductList
