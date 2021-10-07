/* CUSTOMS STYLES */ 
import './navBar.css';
/* BRAND */
import brand from '../../assets/brand/brand.png';
/* MATERIAL UI */
import {AppBar, Toolbar, Typography, IconButton, InputBase, Button, Divider} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CartWidget from '../cartWidget/cartWidget';
import { Link, NavLink } from 'react-router-dom';



const NavBar = () => {
  return (
    <div className="navBar-container">
        {/* Header */}
        <AppBar position="fixed" className="NavBar">
            {/* Div donde vamos a poner todos los componentes del nav bar */}
            <Toolbar className="Toolbar">
                <div className="img-container">
                    <Link to={"/"} >
                        <img src={brand} alt="Logo de la marca sneakers"/>
                    </Link>
                </div>

                <div className="search-container">
                    <div className="search-icon">
                        <SearchIcon />
                    </div>
                    <InputBase
                        className="search-input"
                        placeholder="Buscar en la tienda..."
                    />
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


