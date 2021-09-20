import './App.css';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import NavBar from './components/navBar/navBar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainer greeting="Lista de productos"/>
    </div>
  );
}

export default App;
