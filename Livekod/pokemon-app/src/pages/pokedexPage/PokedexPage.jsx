import './pokedexPage.css';
import PokemonCard from '../../components/pokemonCard/PokemonCard.jsx';

function PokedexPage({ pokemonList }) {
    console.log(pokemonList);

  return (
    <section className="pokedex-page">
        <h1 className="pokedex-heading">Pokédex</h1>
        <section className="pokedex-grid">
            {
                pokemonList.map((pokemon, index) => {
                    return <PokemonCard 
                               pokemon={ pokemon } 
                               key={ index } 
                           />
                })
            }
        </section>
    </section>
  )
}

export default PokedexPage;
