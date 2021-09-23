/* CUSTON STYLES */
import './item.css';
/* MATERIAL UI */
import {Button, Card, CardContent, CardMedia} from '@material-ui/core';
import ItemCount from '../itemCount/itemCount';

const onAdd = (count) => console.log(`Se agregaron ${count} item al carrito`);

const Item = ({name, price, img, stock}) => 
{
    return (
        <Card className="card-container">
            <CardMedia
                component="img"
                width="200"
                height= "140"
                image= {img}
                alt={img}
            />
            <CardContent className="cardContent">
                <h4 className="cardContent__title">
                    {name}
                </h4>
                <p className="cardContent__price"> 
                    ${price}
                </p>
                <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
            </CardContent>
        </Card>
    );
}

export default Item;