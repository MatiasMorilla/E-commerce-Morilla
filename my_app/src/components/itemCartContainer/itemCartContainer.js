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
    const [validForm, setValidForm] = useState(false);

    const handleName = (e) =>{
        let value = e.target.value;

        if(value == "" || value.length == 0)
        {
            setValidForm(false);
        }
        else
        {
            setName(e.target.value);
            setValidForm(true);
        }
    }

    const handleLastName = (e) =>{
        let value = e.target.value;

        if(value == "" || value.length == 0)
        {
            setValidForm(false);
        }
        else
        {
            setValidForm(true);
            setLastName(e.target.value);
        }
    }

    const handleEmail = (e) =>{
        let value = e.target.value;

        if(value == "" || value.length == 0)
        {
            setValidForm(false);
        }
        else
        {
            setValidForm(true);
            setEmail(e.target.value);
        }
    }

    const handleProvince = (e) =>{
        let value = e.target.value;

        if(value == "" || value.length == 0)
        {
            setValidForm(false);
        }
        else
        {
            setValidForm(true);
            setProvince(e.target.value);
        }
    }

    const handleCity = (e) =>{
        let value = e.target.value;

        if(value == "" || value.length == 0)
        {
            setValidForm(false);
        }
        else
        {
            setValidForm(true);
            setCity(e.target.value);
        }
    }

    const handleAddress = (e) =>{
        let value = e.target.value;

        if(value == "" || value.length == 0)
        {
            setValidForm(false);
        }
        else
        {
            setValidForm(true);
            setAddress(e.target.value);
        }
    }

    const handlePiso = (e) =>{
        let value = e.target.value;

        if(value == "" || value.length == 0)
        {
            setValidForm(false);
        }
        else
        {
            setValidForm(true);
            setPiso(e.target.value);
        }
    }

    const handleDepto = (e) =>{
        let value = e.target.value;

        if(value == "" || value.length == 0)
        {
            setValidForm(false);
        }
        else
        {
            setValidForm(true);
            setDepto(e.target.value);
        }
    }

    const handlePostalCode = (e) =>{
        let value = e.target.value;

        if(value == "" || value.length == 0)
        {
            setValidForm(false);
        }
        else
        {
            setValidForm(true);
            setPostalCode(e.target.value);
        }
    }

    const handleNumber = (e) =>{
        let value = e.target.value;

        if(value == "" || value.length == 0)
        {
            setValidForm(false);
        }
        else
        {
            setValidForm(true);
            setNumber(e.target.value);
        }
    }

    const handleOwnerName = (e) =>{
        let value = e.target.value;

        if(value == "" || value.length == 0)
        {
            setValidForm(false);
        }
        else
        {
            setValidForm(true);
            setOwnerName(e.target.value);
        }
    }

    const handleDueDate = (e) =>{
        let value = e.target.value;

        if(value == "" || value.length == 0)
        {
            setValidForm(false);
        }
        else
        {
            setValidForm(true);
            setDueDate(e.target.value);
        }
    }

    const handleSecurityCode = (e) =>{
        let value = e.target.value;

        if(value == "" || value.length == 0)
        {
            setValidForm(false);
        }
        else
        {
            setValidForm(true);
            setSecurityCode(e.target.value);
        }
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

    console.log(validForm);

    return(
        <div className="main-container">
            <div className="header-container">
                <h2 className="title">Mi Pedido</h2>
                <p>Por favor llene los campos listados a continuación y luego presione el botón Finalizar Compra.</p>
            </div>
            <div className="itemCart-container">
                <div className="container container-userdata">
                    <p><span className="step">1</span> Direccion de envio</p>
                    <hr/>
                    <ItemUserData hn={handleName} hlm={handleLastName} he={handleEmail} hp={handleProvince} hc={handleCity} hd={handleAddress} hpiso={handlePiso} hdepto={handleDepto} hpd={handlePostalCode} />
                </div>
                <div className="container container-products">
                    <p><span className="step">3</span> Finalizar Compra</p>
                    <hr/>
                    <CartBuyer buyer={buyer} />
                </div>
                <div className="container container-creditcard">
                    <p><span className="step">2</span> Metodo de pago</p>
                    <hr/>
                    <ItemCreditCard hnumber={handleNumber} hon={handleOwnerName} hdd={handleDueDate} hsc={handleSecurityCode}/>
                </div>
            </div>
        </div>
    );
}

export default ItemCartContainer;