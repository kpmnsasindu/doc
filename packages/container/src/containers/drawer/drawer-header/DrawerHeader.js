import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';

// project import
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
