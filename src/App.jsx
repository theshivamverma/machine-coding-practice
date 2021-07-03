import './App.css';
import { Sidebar } from './components/sidebar';
import { ProductList, useProduct } from "./components/products"
import { useFilter } from "./components/filters"

function App() {

  const { filterState } = useFilter()
  const { products } = useProduct()

  const { sort, brands, sizes, idealFor } = filterState

  console.log({ sort, brands, sizes, idealFor });

  function getSortedData(sort, products){
    if(sort === "HTOL"){
      return products.sort((a, b) => b.price - a.price)
    }
    if(sort === "LTOH"){
      return products.sort((a, b) => a.price - b.price)
    }
    return products;
  }

  function getFilteredData(brands, sizes, idealFor, productData){
    return productData
      .filter((product) => (brands.length > 0 ? brands.includes(product.brand) ? true : false : true))
      .filter((product) => (sizes.length > 0 ? sizes.includes(product.size) ? true : false : true))
      .filter((product) => idealFor.length > 0 ? idealFor.includes(product.idealFor) ? true : false : true);
  }

  const sortedProducts = getSortedData(sort, products)

  const filteredProducts = getFilteredData(brands, sizes, idealFor, sortedProducts)

  return (
    <>
      <Sidebar />
      <div className="App">
        <ProductList filteredProducts={filteredProducts} />
      </div>
    </>
  );
}

export default App;
