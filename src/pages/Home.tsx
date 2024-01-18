import { Link } from 'react-router-dom';

const pokemonTypes = [
  'normal',
  'fighting',
  'flying',
  'poison',
  'ground',
  'rock',
  'bug',
  'ghost',
  'steel',
  'fire',
  'water',
  'grass',
  'electric',
  'psychic',
  'ice',
  'dragon',
  'dark',
  'fairy',
];

const Home = (): JSX.Element => {
  return (
    <>
      <h1 className="text-5xl my-4">Homepage</h1>
      <code>display all the types with link to /types/:type</code>
      <ul>
        {pokemonTypes.map((type) => (
          <li key={type}>
            <Link to={`/types/${type}`}>{type}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
