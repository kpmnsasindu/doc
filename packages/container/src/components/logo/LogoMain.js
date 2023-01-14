import React from 'react';
import PropTypes from 'prop-types';

// MUI
import { useTheme } from '@mui/material/styles';

// ASSETS
import darkLogo from '../../assets/images/logos/docubinet-dark-logo.svg';
import lightLogo from '../../assets/images/logos/docubinet-light-logo.svg';

// ==============================|| LOGO SVG ||============================== //

const LogoMain = ({ reverse }) => {
	const theme = useTheme();

	return (
		<>
			<img src={theme.palette.mode === 'dark' ? lightLogo : darkLogo} alt='Docubinet' width='190' />
		</>
	);
};

LogoMain.propTypes = {
	reverse: PropTypes.bool,
};

export default LogoMain;
