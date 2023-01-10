import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// project import
// import useAuth from 'hooks/useAuth';

// ==============================|| AUTH GUARD ||============================== //

const AuthGuard = ({ children }) => {
	// const { isLoggedIn } = useAuth();
	const navigate = useNavigate();
	const logged = sessionStorage.getItem('isLoggedIn');

	useEffect(() => {
		if (!logged) {
			navigate('login', { replace: true });
		}
	}, [logged, navigate]);

	if (logged) return children;
};

AuthGuard.propTypes = {
	children: PropTypes.node,
};

export default AuthGuard;
