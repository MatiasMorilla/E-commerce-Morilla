import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from '../components/navBar/navBar';
import ItemDetailContainer from '../components/itemDetailContainer/itemDetailContainer';
import ItemListContainer from '../components/itemListContainer/itemListContainer';
import Slider from '../components/slider/slider'
import NotFoundPage from '../components/notFoundPage/notFoundPage';
import ItemCartContainer from '../components/itemCartContainer/itemCartContainer';
import ItemFooter from '../components/itemFooter/itemFooter';


const AppRouter = () => {
    return(
        <>
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route path="/category/:categoryId">
                        <ItemListContainer />
                    </Route>
                    <Route path="/product/:productId">
                        <ItemDetailContainer  />
                    </Route>
                    <Route path="/cart">
                        <ItemCartContainer />
                    </Route>
                    <Route exact path="/">
                        <Slider />
                        <ItemListContainer />
                        <ItemFooter />
                    </Route>
                    <Route path="*">
                        <NotFoundPage />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default AppRouter;