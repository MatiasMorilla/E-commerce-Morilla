/* CUSTOM STYLES */
import './itemCount.css';
/* MATERIAL UI */
import Button from '@material-ui/core/Button'


const ItemCount = ({stock, onAdd, onSubtract, quantity}) => 
{

    return(
        <>
            <div className="controls">
                <Button variant="text" color="primary" disabled={stock === 0 || quantity <= 0} onClick={onSubtract}>-</Button>
                <span>{stock === 0 ? 'Sin stock' : quantity}</span>
                <Button variant="text" color="primary" disabled={stock === 0 || quantity >= stock} onClick={onAdd}>+</Button>
            </div>
        </>
    );
}

export default ItemCount;