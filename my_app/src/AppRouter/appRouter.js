import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from '../components/navBar/navBar';
import ItemDetailContainer from '../components/itemDetailContainer/itemDetailContainer';
import ItemListContainer from '../components/itemListContainer/itemListContainer';
import Slider from '../components/slider/slider'


const AppRouter = () => {
    return(
        <>
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route path="/category/:categoryId">
                        <ItemListContainer greeting="Lista de productos"/>
                    </Route>
                    <Route path="/product/:productId">
                        <ItemDetailContainer greeting="Detalles de producto" />
                    </Route>
                    <Route path="/cart">
                        <h1>Cart</h1>
                    </Route>
                    <Route path="/">
                        <Slider />
                        <ItemListContainer greeting="Lista de productos"/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default AppRouter;