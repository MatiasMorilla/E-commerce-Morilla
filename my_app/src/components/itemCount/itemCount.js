/* CUSTOM STYLES */
import './itemCount.css';
/* MATERIAL UI */
import Button from '@material-ui/core/Button'
import { useState } from 'react';



const ItemCount = ({stock, initial = 0, onAdd}) => 
{
    const [count, setCount] = useState(initial);

    const add = () =>
    {
         if(count < stock)
         {
            setCount(count + 1);
         }
    }
    const remove = () =>
    { 
        if(count > initial)
        {
            setCount(count - 1);
        }
    }


    return(
        <>
            <div className="controls">
                <Button variant="text" color="primary" disabled={stock === 0 || count <= initial} onClick={remove}>-</Button>
                <span>{stock === 0 ? 'Sin stock' : count}</span>
                <Button variant="text" color="primary" disabled={stock === 0 || count >= stock} onClick={add}>+</Button>
            </div>
            <Button className="btn-buy"
                variant="contained" 
                color="primary" 
                onClick={ () => {onAdd(count)}}
                disabled={stock === 0 || count <= 0 || count > stock}
            >
                Comprar
            </Button>
        </>
    );
}

export default ItemCount;