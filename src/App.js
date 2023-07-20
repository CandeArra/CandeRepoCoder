import './app.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div>
      <NavBar></NavBar>
      <ItemListContainer greeting="Bienvenido a mi tienda!"></ItemListContainer>
    </div>
  );
}

export default App;
