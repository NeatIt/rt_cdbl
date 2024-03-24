import { Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';

// Import components
import AppTemplate from 'components/AppTemplate/AppTemplate';
import AppLayout from 'components/AppLayout/AppLayout';
import NoMatch from 'components/NoMatch/NoMatch';
import ProductsTable from 'components/ProductsTable/ProductsTable';

const App = () => {
	return (
		<Box display="flex" flexDirection="column" minHeight="100vh">
			<AppTemplate>
				<Routes>
					<Route path="/" element={<AppLayout />}>
						<Route index element={<ProductsTable />} />
						<Route path="*" element={<NoMatch />} />
					</Route>
				</Routes>
			</AppTemplate>
		</Box>
	);
};

export default App;
