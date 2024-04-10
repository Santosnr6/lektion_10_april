import './app.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import PokedexPage from './pages/pokedexPage/PokedexPage';
import TeamGeneratorPage from './pages/teamGeneratorPage/TeamGeneratorPage';
import pokemonObjects from './assets/pokemons.js';
import PokemonPage from './pages/pokemonPage/PokemonPage.jsx';

function App() {
  const pokemonList = [...pokemonObjects];
  
  return (
    <div className="app">
      <Header />
        <Routes>
          <Route path="/" element={ <PokedexPage pokemonList={ pokemonList } /> } />
          <Route path="/teamGen" element={ <TeamGeneratorPage pokemonList={ pokemonList } /> } />
          <Route path="/pokemon/:id" element={ <PokemonPage pokemonList={ pokemonList } />} />
        </Routes>
      <Footer />
    </div>
    
  )
}

export default App
