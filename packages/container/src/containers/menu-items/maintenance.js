import React from 'react';

// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { LineChartOutlined, IdcardOutlined, DatabaseOutlined } from '@ant-design/icons';

// icons
const icons = {
	LineChartOutlined,
	IdcardOutlined,
	DatabaseOutlined,
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const widget = {
	id: 'maintenance',
	title: <FormattedMessage id='maintenance' />,
	type: 'group',
	children: [
		{
			id: 3,
			title: <FormattedMessage id='statistics' />,
			type: 'item',
			url: '/maintenance/user-maintenance',
			icon: icons.IdcardOutlined,
		},
	],
};

export default widget;
