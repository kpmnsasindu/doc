import React, { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

// project import
import Loadable from '../components/Loadable';
// import ComponentsRoutes from './ComponentsRoutes';
import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
	return useRoutes([
		// {
		// 	path: '/',
		// 	element: <CommonLayout layout='landing' />,
		// 	children: [
		// 		{
		// 			path: '/',
		// 			element: <PagesLanding />,
		// 		},
		// 	],
		// },
		LoginRoutes,
		// ComponentsRoutes,
		MainRoutes,
	]);
}
