import React, { useRef, useEffect } from 'react';

import { mount } from 'docubinet_maintenance/MaintenanceApp';

export default function MaintenanceApp() {
	const ref = useRef();

	useEffect(() => {
		mount(ref.current);
	}, []);

	return <div ref={ref} />;
}
