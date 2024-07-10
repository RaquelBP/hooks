import './App.css';
import useFetchCharacters from "./hooks/useFetchCharacters";

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1'
  const urlRick = 'https://rickandmortyapi.com/api/character/1'

  const fetchPokemon = useFetchCharacters(urlPokemon)
  const fetchRick = useFetchCharacters(urlRick)

  console.log("Pokemon:", fetchPokemon.data)
  console.log("Rick:", fetchRick.data)

  if (fetchPokemon.isLoading || fetchRick.isLoading) {
    return (
      <div>
        <h1>Cargando...</h1>
      </div>
    );
  }

  return (
    <>
      <h2>Personaje Pokemon</h2>
      <p>{fetchPokemon.data?.name}</p>
      <img src={fetchPokemon.data.sprites.front_default} alt={fetchPokemon.data.name} />

      <h2>Personaje Rick and Morty</h2>
      <p>{fetchRick.data.name}</p>
      <img src={fetchRick.data.image} alt={fetchRick.data.name} />
    </>
  );
}

export default App;


