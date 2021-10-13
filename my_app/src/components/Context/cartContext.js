import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalItem, setTotalItem] = useState(0);

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
        getTotal();
        getTotalItems();
    }

    const removeProduct = (product) => {
        //Obtenemos el indice del producto
        let indexOfProduct = products.indexOf(product);

        if(product.quantity > 1)
        {
            //Eliminamos un producto hasta llegar a 1
            products[indexOfProduct].quantity--; 
        }
        else
        {
            //Eliminamos el producto
            products.splice(indexOfProduct, 1);
        }

        getTotal();
        getTotalItems();
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

    const getTotal = () => {
        let total = 0;

        products.forEach( (product) => {
            total += (product.price * product.quantity);
        });

        setTotal(total);
    }

    const getTotalItems = () => {
        let totalItem = 0;

        products.forEach( (product) => {
            totalItem++;
        });

        setTotalItem(totalItem);
    }

    const data = {
        products,
        addProduct,
        removeProduct,
        removeAll,
        getProductById,
        total,
        totalItem,
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    );
}

export {CartProvider};
export default CartContext;



