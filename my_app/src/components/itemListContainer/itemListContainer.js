/* CUSTOM STYLES */
import './itemListContainer.css';
/* COMPONENTS */
import ItemList from '../itemList/itemList';
import ItemFilter from '../itemFilter/itemFilter';



const ItemListContainer = () => 
{
    

    return(
        <div className="itemListContainer">
            <ItemList/>
            <ItemFilter />
        </div>
    );
}

export default ItemListContainer;