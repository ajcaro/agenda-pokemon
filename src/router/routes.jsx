import { createBrowserRouter, Navigate } from 'react-router-dom';
import {
	PokemonTypesPage,
	PokemonList,
	SearchPage,
	IndexPage,
} from '../pages/';
import { RootLayout } from './RootLayout';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				path: '/types',
				element: <PokemonTypesPage />,
			},
			{
				path: '/list/:id',
				element: <PokemonList />,
			},
			{
				path: '/search',
				element: <SearchPage />,
			},
			{
				path: '/index',
				element: <IndexPage />,
			},
			{
				path: '*',
				element: <Navigate to='/types' />,
			},
		],
	},
]);

export default router;
