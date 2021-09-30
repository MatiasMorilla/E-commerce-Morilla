import './App.css';
import ItemDetail from './components/itemDetail/itemDetail';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import NavBar from './components/navBar/navBar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      {/* <ItemListContainer greeting="Lista de productos"/> */}
      <ItemDetailContainer greeting="Detalles de producto" />
    </div>
  );
}

export default App;
