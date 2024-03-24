import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

// Import utilities
import { useTableContext } from 'utilities/table/useTableContext';

const Filters = () => {
	const { filterId, onIdChange } = useTableContext();

	return (
		<Box sx={{ textAlign: 'end' }}>
			<TextField
				type="number"
				InputProps={{
					inputProps: {
						min: 1
					}
				}}
				label="Enter ID"
				value={filterId || ''}
				onChange={onIdChange}
				size="small"
				sx={{
					my: 2
				}}
			/>
		</Box>
	);
};

export default Filters;
