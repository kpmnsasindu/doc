import React from 'react';
import PropTypes from 'prop-types';

// MUI
import { useTheme } from '@mui/material/styles';

// PROJECT IMPORT
import DrawerHeaderStyled from '../drawer-styles/DrawerHeaderStyled';
import Logo from '../../../components/logo';

// ==============================|| DRAWER HEADER ||============================== //

const DrawerHeader = ({ open }) => {
	const theme = useTheme();

	return (
		<DrawerHeaderStyled theme={theme} open={open}>
			<Logo isIcon={!open} sx={{ width: open ? 'auto' : 35, height: 35 }} />
		</DrawerHeaderStyled>
	);
};

DrawerHeader.propTypes = {
	open: PropTypes.bool,
};

export default DrawerHeader;
