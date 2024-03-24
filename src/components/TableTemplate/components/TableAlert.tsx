import { FC } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

type Props = {
	errorCode: string;
	message: string;
};

const TableAlert: FC<Props> = ({ errorCode, message }) => (
	<Alert variant="filled" severity="error" sx={{ my: 4, py: 2 }}>
		<AlertTitle>Error: {errorCode}</AlertTitle>
		{message}
	</Alert>
);

export default TableAlert;
