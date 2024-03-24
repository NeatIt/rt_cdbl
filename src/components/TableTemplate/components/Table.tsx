import { FC } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// Import utilities
import { useTableContext } from 'utilities/table/useTableContext';

// Import components
import TablePaginationActions from './TablePagination';
import TableAlert from './TableAlert';
import ItemModal from './ItemModal';

type Props = {
	columns: string[];
};

const TableComponent: FC<Props> = ({ columns }) => {
	const { data, page, rowsPerPage, error, total, onPageChange } =
		useTableContext();

	if (error) {
		return <TableAlert errorCode={error.errorCode} message={error.message} />;
	}

	return (
		<TableContainer component={Paper} sx={{ my: 5, width: 1 }} elevation={4}>
			<Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
				<TableHead>
					<TableRow sx={{ textAlign: 'center' }}>
						{columns.map((item) => (
							<TableCell key={item} sx={{ textTransform: 'uppercase' }}>
								{item}
							</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map(({ id, name, year, color, pantone_value }) => (
						<TableRow key={id} sx={{ backgroundColor: color }}>
							<TableCell component="th" scope="row" width={'50px'}>
								{id}
							</TableCell>
							<TableCell component="th" scope="row" width={'150px'}>
								{name}
							</TableCell>
							<TableCell component="th" scope="row">
								{year}
							</TableCell>
							<TableCell component="th" scope="row" width={'150px'}>
								<ItemModal
									id={id}
									name={name}
									year={year}
									color={color}
									pantone_value={pantone_value}
								/>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
				<TableFooter
					sx={{
						['.MuiTablePagination-spacer ']: { display: 'none' }
					}}
				>
					<TableRow>
						<TablePagination
							rowsPerPageOptions={[6]}
							colSpan={4}
							count={total}
							rowsPerPage={rowsPerPage}
							page={page}
							slotProps={{
								select: {
									inputProps: {
										'aria-label': 'rows per page'
									},
									native: true
								}
							}}
							onPageChange={onPageChange}
							ActionsComponent={TablePaginationActions}
							sx={{ minWidth: '300px' }}
						/>
					</TableRow>
				</TableFooter>
			</Table>
		</TableContainer>
	);
};

export default TableComponent;
