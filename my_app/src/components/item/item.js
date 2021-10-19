/* CUSTON STYLES */
import './item.css';
/* MATERIAL UI */
import {Button, Card, CardContent, CardMedia} from '@material-ui/core';

const Item = ({name, price, img}) => 
{

    return (
        <Card className="card-container">
           { <CardMedia
                component="img"
                width="200"
                height= "140"
                image={img[0]}
                alt={img[0]}
            />}
            <CardContent className="cardContent">
                <h4 className="cardContent__title">
                    {name}
                </h4>
                <p className="cardContent__price"> 
                    ${price}
                </p>
                <Button variant="contained" color="primary" className="cardContent__btn">
                    Comprar
                </Button>
            </CardContent>
        </Card>
    );
}

export default Item;