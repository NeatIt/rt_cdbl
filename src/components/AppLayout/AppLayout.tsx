import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const AppLayout = () => (
	<Box>
		<Typography
			variant="h5"
			component="h1"
			fontWeight="bold"
			sx={{ textTransform: 'capitalize', textAlign: 'center', mt: 4, mb: 6 }}
		>
			Recruitment task
		</Typography>
		<Outlet />
	</Box>
);

export default AppLayout;
