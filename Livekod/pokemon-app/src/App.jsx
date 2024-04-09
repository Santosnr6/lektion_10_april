import './app.css';
import { useState } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import PokedexPage from './pages/pokedexPage/PokedexPage';
import TeamGeneratorPage from './pages/teamGeneratorPage/TeamGeneratorPage';

import pokemonObjects from './assets/pokemons.js';

function App() {
  const pokemonList = [...pokemonObjects];
  console.log("Judge: \"I sentence you to the maximum punishment...\"\nMe (thinking): \"Please be death, please be death...\"\nJudge: \"Learn Java!\"\nMe: \"Damn.\"");

  return (
    <div className="app">
      <Header />
        <PokedexPage pokemonList={ pokemonList } />
        {/* <TeamGeneratorPage pokemonList={ pokemonList} /> */}
      <Footer />
    </div>
  )
}

export default App
