import React from 'react';
import { useSelector } from 'react-redux';

// MUI
import { Box, Typography } from '@mui/material';

// PROJECT IMPORT
import NavGroup from './NavGroup';
import menuItem from '../../menu-items';

// ==============================|| DRAWER CONTENT - NAVIGATION ||============================== //

const Navigation = () => {
	const { drawerOpen } = useSelector((state) => state.menu);

	const navGroups = menuItem.items.map((item) => {
		switch (item.type) {
			case 'group':
				return <NavGroup key={item.id} item={item} />;
			default:
				return (
					<Typography key={item.id} variant='h6' color='error' align='center'>
						Fix - Navigation Group
					</Typography>
				);
		}
	});

	return <Box sx={{ pt: drawerOpen ? 2 : 0, '& > ul:first-of-type': { mt: 0 } }}>{navGroups}</Box>;
};

export default Navigation;
