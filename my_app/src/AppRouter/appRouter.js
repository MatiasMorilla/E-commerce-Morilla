import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from '../components/navBar/navBar';
import ItemDetailContainer from '../components/itemDetailContainer/itemDetailContainer';
import ItemListContainer from '../components/itemListContainer/itemListContainer';


const AppRouter = () => {
    return(
        <>
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route path="/product/:productId">
                        <ItemDetailContainer greeting="Detalles de producto" />
                    </Route>
                    <Route path="/cart">
                        <h1>Cart</h1>
                    </Route>
                    <Route path="/">
                        <ItemListContainer greeting="Lista de productos"/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default AppRouter;