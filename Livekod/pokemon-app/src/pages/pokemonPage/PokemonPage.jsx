import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function PokemonPage({ pokemonList }) {
  const [activePokemon, setActivePokemon] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const pokemon = pokemonList.find(p => p.id === parseInt(id));
    setActivePokemon(pokemon);
  }, []);

  return (
    <>
        <h1>Who's that Pokemon!?!?!?!?</h1>
        <img src={ activePokemon.image } alt={ 'Image of ' + activePokemon.name } />
        <h3>It's { activePokemon.name }</h3>
    </>
  )
}

export default PokemonPage
;