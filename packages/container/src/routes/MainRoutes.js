import React, { lazy } from 'react';

// PROJECT IMPORT
import MainLayout from '../layout/MainLayout';
import Loadable from '../components/Loadable';
import AuthGuard from '../utils/route-guard/AuthGuard';

// render - dashboard
const DashboardOne = Loadable(lazy(() => import('../pages/DashboardOne')));
const DashboardTwo = Loadable(lazy(() => import('../pages/DashboardTwo')));
const UserMaintenance = Loadable(lazy(() => import('docubinet_maintenance/Maintenance')));
// const UserMaintenance = Loadable(lazy(() => import('../subapps/MaintenanceApp')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
	path: '/',
	children: [
		{
			path: '/',
			element: (
				<AuthGuard>
					<MainLayout />
				</AuthGuard>
			),
			children: [
				{
					path: 'dashboard',
					children: [
						{
							path: 'one',
							element: <DashboardOne />,
						},
						{
							path: 'two',
							element: <DashboardTwo />,
						},
					],
				},
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
		},
	],
};

export default MainRoutes;
