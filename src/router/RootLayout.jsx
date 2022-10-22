import { Outlet } from 'react-router-dom';
import { NavBar } from '../ui/NavBar';

export const RootLayout = () => {
	return (
		<>
			<NavBar />
			<Outlet />
		</>
	);
};
