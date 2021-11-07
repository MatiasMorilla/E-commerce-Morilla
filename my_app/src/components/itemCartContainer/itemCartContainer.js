import { useState } from 'react';
import { useEffect } from 'react';
/* CUSTOM STYLES */
import './itemCartContainer.css';
/* COMPONENTS */
import ItemUserData from '../itemUserData/itemUserData';
import ItemCreditCard from '../itemCreditCard/itemCreditCard';
import CartBuyer from '../cartBuyer/cartBuyer';


const ItemCartContainer = () => {
    const [name, setName] = useState({value: "", valid: false});
    const [lastName, setLastName] = useState({value: "", valid: false});
    const [email, setEmail] = useState({value: "", valid: false});
    const [province, setProvince] = useState({value: "", valid: false});
    const [city, setCity] = useState({value: "", valid: false});
    const [address, setAddress] = useState({value: "", valid: false});
    const [piso, setPiso] = useState({value: "", valid: false});
    const [depto, setDepto] = useState({value: "", valid: false});
    const [postalCode, setPostalCode] = useState({value: "", valid: false});
    const [number, setNumber] = useState({value: "", valid: false});
    const [ownerName, setOwnerName] = useState({value: "", valid: false});
    const [dueDate, setDueDate] = useState({value: "", valid: false});
    const [securityCode, setSecurityCode] = useState({value: "", valid: false});
    const [validForm, setValidForm] = useState(false);
    const arrayInputs = [name, lastName, email, province, city, address, postalCode, number, ownerName, dueDate, securityCode];

    const handleName = (e) =>{
        let value = e.target.value;

        if(value == "" || value.length < 4)
        {
            setName({value: "", valid: false});
        }
        else
        {
            setName({value: value, valid: true});
        }
    }

    const handleLastName = (e) =>{
        let value = e.target.value;

        if(value == "" || value.length < 4)
        {
            setLastName({value: "", valid: false});
        }
        else
        {
            setLastName({value: value, valid: true});
        }
    }

    const handleEmail = (e) =>{
        let value = e.target.value;

        if(value == "" || value.length < 4)
        {
            setEmail({value: "", valid: false});
        }
        else
        {
            setEmail({value: value, valid: true});
        }
    }

    const handleProvince = (e) =>{
        let value = e.target.value;

        if(value == "" || value.length < 4)
        {
            setProvince({value: "", valid: false});
        }
        else
        {
            setProvince({value: value, valid: true});
        }
    }

    const handleCity = (e) =>{
        let value = e.target.value;

        if(value == "" || value.length < 4)
        {
            setCity({value: "", valid: false});
        }
        else
        {
            setCity({value: value, valid: true});
        }
    }

    const handleAddress = (e) =>{
        let value = e.target.value;

        if(value == "" || value.length < 4)
        {
            setAddress({value: "", valid: false});
        }
        else
        {
            setAddress({value: value, valid: true});
        }
    }

    const handlePiso = (e) =>{
        let value = e.target.value;

        if(value == "" || value.length < 4)
        {
            setPiso({value: "", valid: false});
        }
        else
        {
            setPiso({value: value, valid: true});
        }
    }

    const handleDepto = (e) =>{
        let value = e.target.value;

        if(value == "" || value.length < 4)
        {
            setDepto({value: "", valid: false});
        }
        else
        {
            setDepto({value: value, valid: true});
        }
    }

    const handlePostalCode = (e) =>{
        let value = e.target.value;

        if(value == "" || value.length < 4)
        {
            setPostalCode({value: "", valid: false});
        }
        else
        {
            setPostalCode({value: value, valid: true});
        }
    }

    const handleNumber = (e) =>{
        let value = e.target.value;

        if(value == "" || value.length < 4)
        {
            setNumber({value: "", valid: false});
        }
        else
        {
            setNumber({value: value, valid: true});
        }
    }

    const handleOwnerName = (e) =>{
        let value = e.target.value;

        if(value == "" || value.length < 4)
        {
            setOwnerName({value: "", valid: false});
        }
        else
        {
            setOwnerName({value: value, valid: true});
        }
    }

    const handleDueDate = (e) =>{
        let value = e.target.value;

        if(value == "" || value.length < 4)
        {
            setDueDate({value: "", valid: false});
        }
        else
        {
            setDueDate({value: value, valid: true});
        }
    }

    const handleSecurityCode = (e) =>{
        let value = e.target.value;

        if(value == "" || value.length != 3)
        {
            setSecurityCode({value: "", valid: false});
        }
        else
        {
            setSecurityCode({value: value, valid: true});
        }
    }

    const validInputs = () => {
        let count = 0;
        
        arrayInputs.forEach( (input) => {
            if(input.valid)
            {
                count++;
            }
        });

        count === 11 ? setValidForm(true) : setValidForm(false);
    }

    const buyer = {
        name: name.value,
        lastName: lastName.value,
        email: email.value,
        province: province.value,
        city: city.value,
        address: address.value,
        piso: piso.value,
        depto: depto.value,
        postalCode: postalCode.value,
        creditCard: {
            number: number.value,
            ownerName: ownerName.value,
            dueDate: dueDate.value,
            securityCode: securityCode.value
        }
    }


    useEffect( () => {
        validInputs();
    },[name, lastName, email, province, city, address, piso, depto, postalCode, number, ownerName, dueDate, securityCode]);

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
                    <ItemUserData 
                        hn={handleName}
                        hlm={handleLastName}
                        he={handleEmail}
                        hp={handleProvince}
                        hc={handleCity}
                        hd={handleAddress}
                        hpiso={handlePiso}
                        hdepto={handleDepto}
                        hpd={handlePostalCode}
                        />

                </div>
                <div className="container container-products">
                    <p><span className="step">3</span> Finalizar Compra</p>
                    <hr/>
                    <CartBuyer buyer={buyer} validForm={validForm} />
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