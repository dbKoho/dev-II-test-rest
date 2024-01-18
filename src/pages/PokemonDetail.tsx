import { Link, useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

const PokemonDetail = (): JSX.Element => {
  const { id } = useParams();

  const { data: pokemonInfo } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${id}/`
  );

  if (!pokemonInfo) return <>No Info</>;

  return (
    <>
      <h1 className="text-5xl my-4">Pokemon Detail</h1>
      <h2 className="font-bold text-3xl uppercase mb-4">
        Name: <span className="font-normal">{id}</span>
      </h2>
      <code>display the details of the pokemon of the given id</code>
      <hr className="mb-4" />
      <Link to="/">
        <button className="px-4 py-2 bg-blue-500 rounded-2xl text-white hover:text-black">
          Go home
        </button>
      </Link>
      <h2 className="my-4 text-4xl underline">Info:</h2>
      <p>abilities: </p>
      <ul className="pl-6">
        {pokemonInfo.abilities.map((ab) => (
          <li key={ab.ability.url}>{ab.ability.name}</li>
        ))}
      </ul>
    </>
  );
};

export default PokemonDetail;
