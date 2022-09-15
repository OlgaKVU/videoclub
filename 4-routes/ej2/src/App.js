import {useState} from 'react'
import videoclub from './datos/catalogo'
import Catalogo from './componentes/Catalogo'
import Pelicula from './componentes/Pelicula'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';

function App() {
  const [catalogo] = useState(videoclub)
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Catalogo catalogo={catalogo}/>}/>
    {catalogo.map((pelicula, index) =>{
        return (
        <Route path={'/' + pelicula.titulo.replaceAll(" ","-")} element = {<Pelicula key = {index} full ={true} sinopsis ={pelicula.sinopsis} cartel ={pelicula.cartel} titulo = {pelicula.titulo}/>}/>
        )
      })}     
   
    </Routes>
    </BrowserRouter>

  );
}

export default App;
