import { useParams } from 'react-router-dom';

export const PokemonList = () => {
	const { id } = useParams();

	return (
		<>
			<div>PokemonList {id}</div>
		</>
	);
};
