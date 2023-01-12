import { useRoutes } from 'react-router-dom';

// PROJECT IMPORT
import MaintenanceRoutes from './MaintenanceRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
	return useRoutes([MaintenanceRoutes]);
}
