import { BrowserRouter } from 'react-router-dom';

// Import Types
import { FCWithChildren } from 'types/common';

const AppTemplate: FCWithChildren = ({ children }) => {
	return <BrowserRouter>{children}</BrowserRouter>;
};

export default AppTemplate;
