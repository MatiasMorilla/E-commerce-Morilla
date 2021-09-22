/* CUSTOM STYLES */
import './itemCount.css';
/* MATERIAL UI */
import Button from '@material-ui/core/Button'
import { useState } from 'react';



const ItemCount = (props) => 
{
    const [count, setCount] = useState(props.initial);

    const add = () =>
    {
         if(count < props.stock)
         {
            setCount(count + 1);
         }
         else
         {
            console.log("no hay mas stock");
         }
    }
    const remove = () =>
    { 
        if(count > props.initial)
        {
            setCount(count - 1);
        }
    }

    return(
        <div className="container">
            <h3>Remera</h3>
            <div className="controls">
                <Button variant="text" color="primary" onClick={remove}>-</Button>
                <p>{count}</p>
                <Button variant="text" color="primary" onClick={add}>+</Button>
            </div>
            <Button variant="contained" color="primary" fullWidth={true}>
              Agregar al carrito
            </Button>
        </div>
    );
}

export default ItemCount;