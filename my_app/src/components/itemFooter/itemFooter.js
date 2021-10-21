import { Link } from 'react-router-dom';
import './itemFooter.css';

/* MATERIAL UI */
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import RoomIcon from '@mui/icons-material/Room';

const ItemFooter = () => {
    return(
        <div className="footer-container">
            <div>
                <div className="sub-container contact-container">
                    <h2 className="title">CONTACTO</h2>
                    <div className="link-container">
                        <p>Horario de atención Lunes a Sábados de 9.30 a 18hs</p>
                        <a href="#"><MailIcon />ventas@sneakers.com.ar</a>
                    </div>
                </div> 
                <div className="sub-container category-container">
                    <h2 className="title">CATEGORIAS</h2>
                    <div className="link-container">
                        <Link to={"/category/Hombre"}>Zapatillas de Hombre</Link>
                        <Link to={"/category/Mujer"}>Zapatillas de Mujer</Link>
                        <Link to={"/category/Niños"}>Zapatillas de Niño</Link>
                        <Link to={"/category/Running"}>Zapatillas de Running</Link>
                        <Link to={"/category/Lifestyle"}>Zapatillas de Lifestyle</Link>
                    </div>
                </div> 
                <div className="sub-container redes-container">
                    <h2 className="title">REDES</h2>
                    <div className="link-container">
                        <a href="#"><InstagramIcon />Instagram</a>
                        <a href="#"><FacebookIcon />Facebook</a>
                        <a href="#"><ChatBubbleIcon />Blog</a>
                        <a href="#"><RoomIcon />Tiendas</a>
                    </div>
                </div> 
            </div>
        </div>
    );
}

export default ItemFooter;