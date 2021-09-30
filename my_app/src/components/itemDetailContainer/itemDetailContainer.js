/* CUSTOM STYLES */
import './itemDetailContainer.css';
import ItemDetail from '../itemDetail/itemDetail';



const ItemDetailContainer = (props) => 
{
    return(
        <div>
            <h1>{props.greeting}</h1>
            <ItemDetail/>
        </div>
    );
}

export default ItemDetailContainer;