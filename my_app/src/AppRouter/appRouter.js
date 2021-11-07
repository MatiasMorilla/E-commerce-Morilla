import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from '../components/navBar/navBar';
import ItemDetailContainer from '../components/itemDetailContainer/itemDetailContainer';
import ItemListContainer from '../components/itemListContainer/itemListContainer';
import NotFoundPage from '../components/notFoundPage/notFoundPage';
import ItemCartContainer from '../components/itemCartContainer/itemCartContainer';
import HomePage from '../components/homePage/homePage';


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
                    <Route path="/catalogue/:searchValue">
                        <ItemListContainer />
                    </Route>
                    <Route path="/cart">
                        <ItemCartContainer />
                    </Route>
                    <Route exact path="/">
                        <HomePage />
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