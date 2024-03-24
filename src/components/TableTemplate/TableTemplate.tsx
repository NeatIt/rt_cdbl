import { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// Import components
import TableProvider from 'utilities/table/TableProvider';
import TableComponent from './components/Table';
import Filters from './components/Filters';

type Props = {
	tableName: string;
	apiUrl: string;
	columns: string[];
};

const TableTemplate: FC<Props> = ({ tableName, apiUrl, columns }) => (
	<Box px={{ xs: 2, sm: 6, md: 12 }} py={2}>
		<TableProvider apiUrl={apiUrl}>
			<Typography
				variant="h4"
				component="h2"
				fontWeight="bold"
				sx={{ textTransform: 'capitalize' }}
			>
				{tableName}
			</Typography>
			<Filters />
			<TableComponent columns={columns} />
		</TableProvider>
	</Box>
);

export default TableTemplate;
