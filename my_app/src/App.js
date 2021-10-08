import './App.css';
import AppRouter from './AppRouter/appRouter';
import { CartProvider } from './components/Context/cartContext';
import { ProductsProvider } from './components/Context/productsContext';


function App() {
  return (
    <div className="App">
        <ProductsProvider>
            <CartProvider>
                <AppRouter />
            </CartProvider> 
        </ProductsProvider>
    </div>
  );
}

export default App;
