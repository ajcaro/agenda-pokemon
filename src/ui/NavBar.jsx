import { NavLink } from 'react-router-dom';

export const NavBar = () => {
	return (
		<nav className='navbar navbar-expand-lg bg-dark navbar-dark'>
			<div className='container-fluid'>
				<a className='navbar-brand' href='#'>
					PokeUI
				</a>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNavAltMarkup'
					aria-controls='navbarNavAltMarkup'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
					<div className='navbar-nav'>
						<NavLink
							end
							className={({ isActive }) =>
								`nav-link ${isActive ? 'active' : undefined}`
							}
							to='/index'
						>
							Inicio
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								`nav-link ${isActive ? 'active' : undefined}`
							}
							to='/types'
						>
							Tipos
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								`nav-link ${isActive ? 'active' : undefined}`
							}
							to='/search'
						>
							Busqueda
						</NavLink>
					</div>
				</div>
				<button className='btn btn-outline-danger'>
					<i className='fas fa-sign-out-alt'></i>
					&nbsp;
					<span>Salir</span>
				</button>
			</div>
		</nav>
	);
};
