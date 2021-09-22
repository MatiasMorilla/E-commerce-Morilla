/* CUSTOM STYLES */
import ItemCount from '../itemCount/itemCount';
import './itemListContainer.css';


const ItemListContainer = (props) => 
{
    return(
        <div>
            <h1>{props.greeting}</h1>
            <ItemCount stock="5" initial={1} />
        </div>
    );
}

export default ItemListContainer;