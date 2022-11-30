import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './Componentes/Main/main.jsx'


function App() {
  return (
      <>
        <nav>
          <ul>
          <li>
             <Link to="/">Main</Link> 
          </li>
          <li>
              <Link to="/Completadas">Tareas Completadas</Link>
          </li>
          </ul>
        </nav>
        <Main/>
      </>
  );
}

export default App;
