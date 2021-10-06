/* CUSTOM STYLES */
import './itemCount.css';
/* MATERIAL UI */
import Button from '@material-ui/core/Button'


const ItemCount = ({stock, initial = 0, onAdd, onSubtract, quantity}) => 
{

    return(
        <>
            <div className="controls">
                <Button variant="text" color="primary" disabled={stock === 0 || quantity <= initial} onClick={onSubtract}>-</Button>
                <span>{stock === 0 ? 'Sin stock' : quantity}</span>
                <Button variant="text" color="primary" disabled={stock === 0 || quantity >= stock} onClick={onAdd}>+</Button>
            </div>
        </>
    );
}

export default ItemCount;