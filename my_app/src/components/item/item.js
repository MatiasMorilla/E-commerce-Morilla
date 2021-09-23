/* CUSTON STYLES */
import './item.css';
/* MATERIAL UI */
import {Button, Card, CardContent, CardMedia} from '@material-ui/core';



const Item = (props) => 
{
    return (
        <Card className="card-container">
            <CardMedia
                component="img"
                width="200"
                height= "140"
                image= {props.img}
                alt={props.img}
            />
            <CardContent className="cardContent">
                <h4 className="cardContent__title">
                    {props.name}
                </h4>
                <p className="cardContent__price"> 
                    ${props.price}
                </p>

                <Button className="cardContent__btn-buy" variant="outlined" color="primary">Comprar</Button>
            </CardContent>
        </Card>
    );
}

export default Item;