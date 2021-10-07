/* CUSTOM STYLES */
import './itemCart.css';
/* MATERIAL UI */
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button'

import img1 from "../../assets/productImg/zapatillas-mujer-new-balance-1.jpg";


const ItemCart = ({product})=> {

    return ( 
        <div className="product">
            <div className="product-img">
                <img src={img1}/>
            </div>
            <div className="product-data">
                <h5>Nombre producto</h5>
                <span>$12.000</span>
            </div>
            <div className="product-quantity">
                <span>5</span>
            </div> 
            <div className="product-delete">
                <Button className="button-delete">
                    <DeleteForeverIcon className="button-delete-icon" />
                </Button>   
            </div>  
        </div>
    );
}

export default ItemCart;