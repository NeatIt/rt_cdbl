import { HashRouter } from 'react-router-dom';

// Import Types
import { FCWithChildren } from 'types/common';

const AppTemplate: FCWithChildren = ({ children }) => {
	return (
		<HashRouter future={{ v7_startTransition: true }}>{children}</HashRouter>
	);
};

export default AppTemplate;
