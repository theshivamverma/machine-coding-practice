import { createContext, useContext, useEffect, useState } from "react"

const ProductContext = createContext();

export function ProductProvider({ children }){

    const [products, setProducts] = useState([])

    const getData = () => {
      fetch("data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (myJson) {
          setProducts(myJson.productData);
        });
    };

    useEffect(() => {
      getData();
    }, []);

    return(
        <ProductContext.Provider value={{products}}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProduct = () => useContext(ProductContext)