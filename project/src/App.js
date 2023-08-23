import Agregar from "./components/Agregar";
import Buscador from "./components/Buscador";
import Peliculas from "./components/Peliculas";

import { useState, useEffect } from 'react';

const App = () =>{

  const [listadoPeliculas, setListadoPeliculas] = useState([]);

  useEffect(()=>{
    setListadoPeliculas(JSON.parse(localStorage.getItem("peliculas")));
  }, [])

  return(
    <div className="layout">
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            <h1 className="title"> Mis peliculas</h1>
        </header>
        <nav className="menu">
            <ul className="items">
                <li className="item"> <a href="#" className="link"> Inicio </a> </li>
                <li className="item"> <a href="#" className="link"> Peliculas </a> </li>
                <li className="item"> <a href="#" className="link"> Blog </a> </li>
                <li className="item"> <a href="#" className="link"> Contacto </a> </li>
            </ul>
        </nav>
        <Peliculas listadoPeliculas={listadoPeliculas} setListadoPeliculas={setListadoPeliculas}/>
        <aside className="formularios">
            <Buscador listadoPeliculas={listadoPeliculas} setListadoPeliculas={setListadoPeliculas}/>
            <Agregar listadoPeliculas={listadoPeliculas} setListadoPeliculas={setListadoPeliculas}/>
        </aside>
        <footer className="footer">
            &copy; Proyecto hecho en React
        </footer>
    </div>
  )
}

export default App;
