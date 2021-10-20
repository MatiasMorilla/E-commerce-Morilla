/* CUSTOM STYLES */
import { TextField } from '@material-ui/core';
import './itemUserData.css';


const ItemUserData = (props) => {


    return(
        <>
            <form className="form-userdata">
                <div className="item-input">
                    <TextField
                        required
                        id="outlined-name"
                        label="Nombre"
                        placeholder="Ingrese su nombre"
                        onChange={props.hn}
                    />
                </div>
                <div className="item-input">
                    <TextField
                        required
                        id="outlined-lastName"
                        label="Apellido"
                        placeholder="Ingrese su apellido"
                        onChange={props.hlm}
                    />
                </div>
                <div className="item-input">
                    <TextField
                        required
                        id="outlined-email"
                        label="Email"
                        placeholder="Ingrese su email"
                        onChange={props.he}
                    />

                </div>
                <div className="item-input">
                    <TextField
                        required
                        id="outlined-province"
                        label="Provincia"
                        placeholder="Ingrese su provincia"
                        onChange={props.hp}
                    />                        
                </div>
                <div className="item-input">
                    <TextField
                        required
                        id="outlined-city"
                        label="Ciudad"
                        placeholder="Ingrese su ciudad"
                        onChange={props.hc}
                    />
                </div>
                <div className="item-input">
                    <TextField
                        required
                        id="outlined-address"
                        label="Direccion"
                        placeholder="Ingrese su direccion"
                        onChange={props.hd}
                    />
                </div>
                <div className="item-input">
                    <TextField
                        id="outlined-piso"
                        label="Piso"
                        placeholder="Ingrese su piso"
                        onChange={props.hpiso}
                    />
                </div>
                <div className="item-input">
                    <TextField
                        id="outlined-depto"
                        label="Departamento"
                        placeholder="Ingrese su departamento"
                        onChange={props.hdepto}
                    />
                </div>
                <div className="item-input">
                    <TextField
                        required
                        id="outlined-postalCode"
                        label="Codigo Postal"
                        placeholder="Ingrese su codigo postal"
                        onChange={props.hpd}
                    />    
                </div>
            </form>
        </>
    );
}

export default ItemUserData;