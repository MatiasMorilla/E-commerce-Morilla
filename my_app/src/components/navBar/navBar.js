/* CUSTOMS STYLES */ 
import './navBar.css';
/* BRAND */
import brand from '../../assets/brand/brand.png';
/* MATERIAL UI */
import {AppBar, Toolbar, Typography, IconButton, InputBase, Button} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CartWidget from '../cartWidget/cartWidget';



const NavBar = () => {
  return (
    <div>
        {/* Header */}
        <AppBar position="fixed" className="NavBar">
            {/* Div donde vamos a poner todos los componentes del nav bar */}
            <Toolbar className="Toolbar">
                {/* Sirve para poner textos, en este caso vamos poner un logo */}
                <div className="img-container">
                    <img src={brand} alt="Logo de la marca sneakers"/>
                </div>

                <div className="search-container">
                    <div className="search-icon">
                        <SearchIcon />
                    </div>
                    <InputBase
                        className="search-input"
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
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
        </AppBar>

    </div>
  );
}

export default NavBar;


