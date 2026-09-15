import {  BrowserRouter, Routes, Route, NavLink, Navigate  } from 'react-router-dom';
import {  PokemonProvider  } from './context/PokemonContext';
import {  ResgistroUsuario  } from './components/ResgistroUsuario';
import {  BuscadorPokemon  } from './components/BuscadorPokemon';
import {  InventarioPokemon  } from './components/InventarioPokemon';

function App(){
  return(
    <PokemonProvider>
      <BrowserRouter>
        <header>
          <h1> Registro de entrenadores y Pokemon en React</h1>

        <nav> 
          <NavLink to="/registro" className={(isActive) => (isActive? 'active-tab' : '')}> Registro</NavLink> 
          <NavLink to="/buscador" className={(isActive) => (isActive? 'active-tab' : '')}> Pokemon</NavLink> 
          <NavLink to="/inventario" className={(isActive) => (isActive? 'active-tab' : '')}> Inventario</NavLink> 
        </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/registro" replace />} />
            <Route path="/" element={<RegistroUsuario/>} />
            <Route path="/" element={<BuscadorPokemon/>} />
            <Route path="/" element={<InventarioPokemon/>} />
            

          </Routes>
        </main>
      </BrowserRouter>
    </PokemonProvider>
  )
}