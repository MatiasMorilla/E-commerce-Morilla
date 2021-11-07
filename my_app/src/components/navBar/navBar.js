/* CUSTOMS STYLES */ 
import './navBar.css';
/* BRAND */
import brand from '../../assets/brand/brand.png';
/* MATERIAL UI */
import {AppBar, Toolbar, InputBase, Button, Divider} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CartWidget from '../cartWidget/cartWidget';
import { Link, NavLink, Redirect } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';



const NavBar = () => {
    const [searchValue, setSearchValue] = useState("");
    const [redirect, setRedirect] = useState(false);
    const [fixed, setFixed] = useState(false);

    const showCatalogue = (e)=>{
        /* e.preventDefault(); */
        setRedirect(true);
    }

    const handleSearch = (e) =>{
        setSearchValue(e.target.value);
    }

    const handleMenuFixed = () => {
        if(window.scrollY >= 400)
        {
            setFixed(true);
        }
        else
        {
            setFixed(false);
        }
    }

    useEffect( () => {
        window.addEventListener("scroll", handleMenuFixed);
    }, []);


    return(
        <div className="navBar-container">
            {
                redirect ? <Redirect from={"/"} to={"/catalogue/" + searchValue} /> : ""
            }
            {/* Header */}
            <AppBar className={`NavBar ${fixed ? "fixed" : ""}`}>
                {/* Div donde vamos a poner todos los componentes del nav bar */}
                <Toolbar className="Toolbar">
                    <div className="img-container">
                        <Link to={"/"} >
                            <img src={brand} alt="Logo de la marca sneakers"/>
                        </Link>
                    </div>

                    <div className="search-container">
                        <form id="searchForm" onSubmit={showCatalogue}>
                            <div className="search-icon">
                                <SearchIcon type="search" />
                            </div>
                            <InputBase 
                                value={searchValue}
                                onChange={handleSearch}
                                className="search-input"
                                placeholder="Buscar en la tienda..."
                            />
                        </form>
                    </div>

                    <ul className="Toolbar__menu">
                        <li className="Toolbar__menu__item">
                            {/* Sirve para hacer un botn que sea un icono */}
                            <Button variant="text" className="btn-user">
                                {/* Es el icono que va a servir como boton */}
                                <AccountCircleIcon className="btn-user__icon" />
                            </Button>
                        </li>
                        <li className="Toolbar__menu__item">
                            <CartWidget/>
                        </li>
                    </ul>
                </Toolbar>
                <Divider/>
                <Toolbar className="category-container">
                    <li>
                        <NavLink to={"/category/Hombre"} activeClassName="active-category" className="navLink-category" >Hombre</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/category/Mujer"} activeClassName="active-category" className="navLink-category" >Mujer</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/category/Niños"} activeClassName="active-category" className="navLink-category" >Niños</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/category/LifeStyle"} activeClassName="active-category" className="navLink-category" >LifeStyle</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/category/Running"} activeClassName="active-category" className="navLink-category" >Running</NavLink>
                    </li>
                </Toolbar>
            </AppBar>

        </div>
    );
}

export default NavBar;


