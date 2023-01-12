import React, { lazy } from 'react';

// PROJECT IMPORT
import Loadable from '../components/Loadable';
// import AuthGuard from '../utils/route-guard/AuthGuard';

// render - dashboard
const UserMaintenance = Loadable(lazy(() => import('../pages/UserMaintenance')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
	path: '/',
	children: [
		{
			path: 'maintenance',
			children: [
				{
					path: 'user-maintenance',
					element: <UserMaintenance />,
				},
			],
		},
	],
};

export default MainRoutes;
