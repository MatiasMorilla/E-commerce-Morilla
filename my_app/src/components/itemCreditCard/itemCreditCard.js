/* CUSTOM STYLES */
import { TextField } from '@material-ui/core';
import './itemCreditCard.css';


const ItemCreditCard = (props) => {
    return(
        <>
            <form className="form-creditcard">
                <div className="item-input">
                    <TextField
                        required
                        id="outlined-name"
                        label="Nombre Titular"
                        placeholder="Ingrese nombre del titular"
                        onChange={props.hnumber}
                    />
                </div>
                <div className="item-input">
                    <TextField
                        required
                        id="outlined-number"
                        label="Numero de la tarjeta"
                        placeholder="Ingrese el numero de la tarjeta"
                        onChange={props.hon}
                    />
                </div>
                <div className="item-input">
                    <TextField
                        required
                        type="date"
                        id="outlined-dueDate"
                        onChange={props.hdd}
                    />

                </div>
                <div className="item-input">
                    <TextField
                        required
                        type="number"
                        id="outlined-code"
                        label="Codigo de seguridad"
                        placeholder="Ingrese el codigo de seguridad"
                        onChange={props.hsc}
                    />                        
                </div>
            </form>
        </>
    );
}

export default ItemCreditCard;