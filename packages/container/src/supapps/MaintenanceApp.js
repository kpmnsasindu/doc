import React, { useRef, useEffect } from 'react';

import { mount } from 'docubinet_maintenance/MaintenanceApp';

export default function MaintenanceApp() {
	const ref = useRef();

	console.log(typeof mount);

	useEffect(() => {
		mount(ref.current);
	}, []);

	return <div ref={ref} />;
}
