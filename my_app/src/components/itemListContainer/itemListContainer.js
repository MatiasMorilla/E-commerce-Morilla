/* CUSTOM STYLES */
import './itemListContainer.css';
import ItemList from '../itemList/itemList';



const ItemListContainer = (props) => 
{
    

    return(
        <div className="itemListContainer">
            <h1>{props.greeting}</h1>
            <ItemList/>
        </div>
    );
}

export default ItemListContainer;