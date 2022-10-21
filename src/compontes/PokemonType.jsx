import '../styles/pokemonStyle.css';

export const PokemonType = ({ type }) => {
	const onClickType = () => {
		alert('alert');
	};

	return (
		<div className='card' onClick={onClickType}>
			<div className={`${type.name} card-img-top`}></div>
			<div className='card-body'>
				<p className='card-text'>
					<strong>Tipo: {type.name}</strong>
				</p>
			</div>
		</div>
	);
};
