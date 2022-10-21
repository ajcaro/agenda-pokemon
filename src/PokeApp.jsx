import { PokemonTypesPage } from './pages/PokemonTypesPage';

const pokemonTypes = [
	{
		name: 'normal',
		url: 'https://pokeapi.co/api/v2/type/1/',
	},
	{
		name: 'fighting',
		url: 'https://pokeapi.co/api/v2/type/2/',
	},
	{
		name: 'flying',
		url: 'https://pokeapi.co/api/v2/type/3/',
	},
	{
		name: 'poison',
		url: 'https://pokeapi.co/api/v2/type/4/',
	},
	{
		name: 'ground',
		url: 'https://pokeapi.co/api/v2/type/5/',
	},
	{
		name: 'rock',
		url: 'https://pokeapi.co/api/v2/type/6/',
	},
	{
		name: 'bug',
		url: 'https://pokeapi.co/api/v2/type/7/',
	},
];

const pokeApp = () => {
	return <PokemonTypesPage />;
};

export default pokeApp;
