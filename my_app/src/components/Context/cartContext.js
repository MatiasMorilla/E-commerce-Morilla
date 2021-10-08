import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [products, setProducts] = useState([]);

    const addProduct = (product) => {
        products.push(product);
    }

    const removeProduct = (product) => {
        //Obtenemos el indice del producto
        let indexOfProduct = products.indexOf(product);
        //Eliminamos el producto
        products.splice(indexOfProduct, 1); 
    }

    const data = {
        products,
        addProduct,
        removeProduct
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    );
}

export {CartProvider};
export default CartContext;



