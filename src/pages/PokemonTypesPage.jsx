import { PokemonType } from '../compontes/PokemonType';

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
	{
		name: 'ghost',
		url: 'https://pokeapi.co/api/v2/type/8/',
	},
	{
		name: 'steel',
		url: 'https://pokeapi.co/api/v2/type/9/',
	},
	{
		name: 'fire',
		url: 'https://pokeapi.co/api/v2/type/10/',
	},
	{
		name: 'water',
		url: 'https://pokeapi.co/api/v2/type/11/',
	},
	{
		name: 'grass',
		url: 'https://pokeapi.co/api/v2/type/12/',
	},
	{
		name: 'electric',
		url: 'https://pokeapi.co/api/v2/type/13/',
	},
	{
		name: 'psychic',
		url: 'https://pokeapi.co/api/v2/type/14/',
	},
	{
		name: 'ice',
		url: 'https://pokeapi.co/api/v2/type/15/',
	},
	{
		name: 'dragon',
		url: 'https://pokeapi.co/api/v2/type/16/',
	},
	{
		name: 'dark',
		url: 'https://pokeapi.co/api/v2/type/17/',
	},
	{
		name: 'fairy',
		url: 'https://pokeapi.co/api/v2/type/18/',
	},
	{
		name: 'unknown',
		url: 'https://pokeapi.co/api/v2/type/10001/',
	},
	{
		name: 'shadow',
		url: 'https://pokeapi.co/api/v2/type/10002/',
	},
];

export const PokemonTypesPage = () => {
	return (
		<>
			<div className='container bgcolor-app'>
				<h1>Tipos de pokemon </h1>
				<small>
					Haga click en un tipo de pokemón para ver sus diferentis pokemons y
					caracteristicas
				</small>
				<hr />
				<div className='row'>
					{pokemonTypes.map(type => (
						<div key={type.name} className='col-md-4 col-xl-3 mt-3'>
							<PokemonType type={type} />
						</div>
					))}
				</div>
			</div>
		</>
	);
};
