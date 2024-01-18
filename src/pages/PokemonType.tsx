import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

const PokemonType = (): JSX.Element => {
  const { type } = useParams();

  const { data: pokemonTypeInfo } = useFetch(
    `https://pokeapi.co/api/v2/type/${type}`
  );

  if (!pokemonTypeInfo) return <></>;

  const pokemonList = pokemonTypeInfo.pokemon;

  return (
    <>
      <h1 className="text-5xl my-4">Pokemon Type</h1>
      <code>display all the pokemon of the given type</code>
      <hr />
      <Link to="/">
        <button className="px-4 py-2 bg-blue-500 rounded-2xl text-white hover:text-black">
          Go home
        </button>
      </Link>
      <ul>
        {pokemonList.map(({ pokemon }) => (
          <li key={pokemon.name}>
            <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PokemonType;
