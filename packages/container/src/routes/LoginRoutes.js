import React, { lazy } from 'react';

// PROJECT IMPORT
import Loadable from '../components/Loadable';

// render - login
const Login = Loadable(lazy(() => import('../pages/auth/login/LoginForm')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
	path: '/login',
	element: <Login />,
};

export default LoginRoutes;
