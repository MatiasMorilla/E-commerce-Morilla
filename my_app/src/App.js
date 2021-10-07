import './App.css';
import AppRouter from './AppRouter/appRouter';
import { CartProvider } from './components/cartContext/cartContext';


function App() {
  return (
    <div className="App">
        <CartProvider>
            <AppRouter />
        </CartProvider> 
    </div>
  );
}

export default App;
