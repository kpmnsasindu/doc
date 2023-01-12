// third-party
import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
	openItem: [],
	openComponent: 'buttons',
	drawerOpen: false,
	componentDrawerOpen: true,
	clearItem: false,
};

// ==============================|| SLICE - MENU ||============================== //

const menu = createSlice({
	name: 'menu',
	initialState,
	reducers: {
		activeItem(state, action) {
			state.openItem = action.payload.openItem;
		},

		activeComponent(state, action) {
			state.openComponent = action.payload.openComponent;
		},

		openDrawer(state, action) {
			state.drawerOpen = action.payload.drawerOpen;
		},

		openComponentDrawer(state, action) {
			state.componentDrawerOpen = action.payload.componentDrawerOpen;
		},

		clearActiveItem(state, action) {
			state.clearItem = action.payload.clearItem;
		},
	},
});

export default menu.reducer;

export const { activeItem, activeComponent, openDrawer, openComponentDrawer, clearActiveItem } =
	menu.actions;
