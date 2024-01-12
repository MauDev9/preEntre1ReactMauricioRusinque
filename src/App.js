
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/Navbar';
import Home from './components/Pages/Home';
import Productos from './components/Pages/Productos';
import Nosotros from './components/Pages/Nosotros';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/Inicio" element={<Home />} />
          <Route path="/Productos" element={<Productos />} />
          <Route path="/Nosotros" element={<Nosotros />} />
        </Routes>
      </Router>
      <ItemListContainer greeting='Hola, bienvenid@ !'/>
    </div>
  );
}

export default App;