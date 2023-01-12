import React, { forwardRef, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { activeItem, clearActiveItem } from '../../../store/reducers/menu';

// MUI
import { useTheme } from '@mui/material/styles';
import {
	Avatar,
	Chip,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material';

// ==============================|| NAVIGATION - LIST ITEM ||============================== //

const NavItem = ({ item, level }) => {
	const theme = useTheme();
	const location = useLocation();
	const dispatch = useDispatch();

	const { drawerOpen, openItem } = useSelector((state) => state.menu);
	const pathname = useMemo(() => location.pathname, [location]);

	let itemTarget = '_self';
	if (item.target) {
		itemTarget = '_blank';
	}

	let listItemProps = {
		component: forwardRef((props, ref) => (
			<Link {...props} to={item.url} target={itemTarget} ref={ref} />
		)),
	};
	if (item?.external) {
		listItemProps = { component: 'a', href: item.url, target: itemTarget };
	}

	const Icon = item.icon;
	const itemIcon = item.icon ? (
		<Icon style={{ fontSize: drawerOpen ? '1rem' : '1.25rem' }} />
	) : (
		false
	);

	const isSelected = openItem.findIndex((id) => id === item.id) > -1;

	// active menu item on page load
	useEffect(() => {
		if (pathname.includes(item.url)) {
			dispatch(activeItem({ openItem: [item.id] }));
			dispatch(clearActiveItem({ clearItem: true }));
		}
		// eslint-disable-next-line
	}, [pathname]);

	const textColor = theme.palette.mode === 'dark' ? 'grey.400' : 'text.primary';
	const iconSelectedColor =
		theme.palette.mode === 'dark' && drawerOpen ? 'text.primary' : 'primary.main';

	return (
		<ListItemButton
			{...listItemProps}
			disabled={item.disabled}
			selected={isSelected}
			sx={{
				zIndex: 1201,
				pl: drawerOpen ? `${level * 28}px` : 1.5,
				py: !drawerOpen && level === 1 ? 1.25 : 1,
				...(drawerOpen && {
					'&:hover': {
						bgcolor: theme.palette.mode === 'dark' ? 'divider' : 'primary.lighter',
					},
					'&.Mui-selected': {
						bgcolor: theme.palette.mode === 'dark' ? 'divider' : 'primary.lighter',
						borderRight: `2px solid ${theme.palette.primary.main}`,
						color: iconSelectedColor,
						'&:hover': {
							color: iconSelectedColor,
							bgcolor: theme.palette.mode === 'dark' ? 'divider' : 'primary.lighter',
						},
					},
				}),
				...(!drawerOpen && {
					'&:hover': {
						bgcolor: 'transparent',
					},
					'&.Mui-selected': {
						'&:hover': {
							bgcolor: 'transparent',
						},
						bgcolor: 'transparent',
					},
				}),
			}}
		>
			{itemIcon && (
				<ListItemIcon
					sx={{
						minWidth: 28,
						color: isSelected ? iconSelectedColor : textColor,
						...(!drawerOpen && {
							borderRadius: 1.5,
							width: 36,
							height: 36,
							alignItems: 'center',
							justifyContent: 'center',
							'&:hover': {
								bgcolor: theme.palette.mode === 'dark' ? 'secondary.light' : 'secondary.lighter',
							},
						}),
						...(!drawerOpen &&
							isSelected && {
								bgcolor: theme.palette.mode === 'dark' ? 'primary.900' : 'primary.lighter',
								'&:hover': {
									bgcolor: theme.palette.mode === 'dark' ? 'primary.darker' : 'primary.lighter',
								},
							}),
					}}
				>
					{itemIcon}
				</ListItemIcon>
			)}
			{(drawerOpen || (!drawerOpen && level !== 1)) && (
				<ListItemText
					primary={
						<Typography variant='h6' sx={{ color: isSelected ? iconSelectedColor : textColor }}>
							{item.title}
						</Typography>
					}
				/>
			)}
			{(drawerOpen || (!drawerOpen && level !== 1)) && item.chip && (
				<Chip
					color={item.chip.color}
					variant={item.chip.variant}
					size={item.chip.size}
					label={item.chip.label}
					avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
				/>
			)}
		</ListItemButton>
	);
};

NavItem.propTypes = {
	item: PropTypes.object,
	level: PropTypes.number,
};

export default NavItem;
