import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [products, setProducts] = useState([]);

    const addProduct = (product, quantity) => {
        if(isInCart(product))
        {
            let indexProduct = getProductById(product.id);
            products[indexProduct].quantity += quantity;
        }
        else
        {
            product.quantity = quantity;
            products.push(product);
        }
    }

    const removeProduct = (product) => {
        //Obtenemos el indice del producto
        let indexOfProduct = products.indexOf(product);
        //Eliminamos el producto
        products.splice(indexOfProduct, 1); 
    }

    const removeAll = () => {
        setProducts([]);
    }

    const getProductById = (id) => {
        return products.findIndex(product => product.id === id);
    }

    const isInCart = (newProduct) => {
        let existProduct = false;

        if(products.length > 0)
        {
            for(let i = 0; i < products.length; i++)
            {
                if(products[i].id == newProduct.id)
                {
                    existProduct = true;
                }
            }
        }

        return existProduct;
    }

    const data = {
        products,
        addProduct,
        removeProduct,
        removeAll
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    );
}

export {CartProvider};
export default CartContext;



