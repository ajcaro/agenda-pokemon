import { RouterProvider } from 'react-router-dom';

import router from './router/routes';

const PokeApp = () => {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};

export default PokeApp;
