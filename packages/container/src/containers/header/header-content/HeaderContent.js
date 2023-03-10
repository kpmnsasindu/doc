import React, { useMemo } from 'react';

// MUI
import { Box, useMediaQuery } from '@mui/material';

// PROJECT IMPORT
import useConfig from '../../../hooks/useConfig';
import Search from './Search';
import Message from './Message';
import Profile from '../header-profile/Profile';
import Localization from './Localization';
import Notification from './Notification';
import Customization from '../header-customization/Customization';
import MobileSection from './MobileSection';
import MegaMenuSection from './MegaMenuSection';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
	const { i18n } = useConfig();
	const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const localization = useMemo(() => <Localization />, [i18n]);
	const megaMenu = useMemo(() => <MegaMenuSection />, []);

	return (
		<>
			{!matchesXs && <Search />}
			{!matchesXs && megaMenu}
			{!matchesXs && localization}
			{matchesXs && <Box sx={{ width: '100%', ml: 1 }} />}

			<Notification />
			<Message />
			<Customization />
			{!matchesXs && <Profile />}
			{matchesXs && <MobileSection />}
		</>
	);
};

export default HeaderContent;
