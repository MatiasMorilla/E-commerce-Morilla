import { useState } from 'react';
import { useEffect } from 'react';
/* CUSTOM STYLES */
import './itemCartContainer.css';
/* COMPONENTS */
import ItemUserData from '../itemUserData/itemUserData';
import ItemCreditCard from '../itemCreditCard/itemCreditCard';
import CartBuyer from '../cartBuyer/cartBuyer';


const ItemCartContainer = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [province, setProvince] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [piso, setPiso] = useState("");
    const [depto, setDepto] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [number, setNumber] = useState("");
    const [ownerName, setOwnerName] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [securityCode, setSecurityCode] = useState("");

    const handleName = (e) =>{
        setName(e.target.value);
    }

    const handleLastName = (e) =>{
        setLastName(e.target.value);
    }

    const handleEmail = (e) =>{
        setEmail(e.target.value);
    }

    const handleProvince = (e) =>{
        setProvince(e.target.value);
    }

    const handleCity = (e) =>{
        setCity(e.target.value);
    }

    const handleAddress = (e) =>{
        setAddress(e.target.value);
    }

    const handlePiso = (e) =>{
        setPiso(e.target.value);
    }

    const handleDepto = (e) =>{
        setDepto(e.target.value);
    }

    const handlePostalCode = (e) =>{
        setPostalCode(e.target.value);
    }

    const handleNumber = (e) =>{
        setNumber(e.target.value);
    }

    const handleOwnerName = (e) =>{
        setOwnerName(e.target.value);
    }

    const handleDueDate = (e) =>{
        setDueDate(e.target.value);
    }

    const handleSecurityCode = (e) =>{
        setSecurityCode(e.target.value);
    }

    const buyer = {
        name: name,
        lastName: lastName,
        email: email,
        province: province,
        city: city,
        address: address,
        piso: piso,
        depto: depto,
        postalCode: postalCode,
        creditCard: {
            number: number,
            ownerName: ownerName,
            dueDate: dueDate,
            securityCode: securityCode
        }
    }

    return(
        <div>
            <h2>Mi Pedido</h2>
            <div className="itemCart-container">
                <div className="container-userdata">
                    <p>1. Direccion de envio</p>
                    <hr/>
                    <ItemUserData hn={handleName} hlm={handleLastName} he={handleEmail} hp={handleProvince} hc={handleCity} hd={handleAddress} hpiso={handlePiso} hdepto={handleDepto} hpd={handlePostalCode} />
                </div>
                <div className="container-products">
                    <p>3. Finalizar Compra</p>
                    <hr/>
                    <CartBuyer buyer={buyer} />
                </div>
                <div className="container-creditcard">
                    <p>2. Metodo de pago</p>
                    <hr/>
                    <ItemCreditCard hnumber={handleNumber} hon={handleOwnerName} hdd={handleDueDate} hsc={handleSecurityCode}/>
                </div>
            </div>
        </div>
    );
}

export default ItemCartContainer;