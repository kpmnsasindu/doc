import { configureStore } from '@reduxjs/toolkit';
import docubinetReducer from './features/docubinetReducer';

const store = configureStore({
	reducer: {
		docubinet: docubinetReducer,
	},
});

export default store;
