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
    }
    const remove = () =>
    { 
        if(count > props.initial)
        {
            setCount(count - 1);
        }
    }

    return(
        <>
            <div className="controls">
                <Button variant="text" color="primary" onClick={remove}>-</Button>
                <p>{count}</p>
                <Button variant="text" color="primary" onClick={add}>+</Button>
            </div>
        </>
    );
}

export default ItemCount;