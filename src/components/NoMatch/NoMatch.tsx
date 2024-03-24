import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const NoMatch = () => {
	return (
		<Box>
			<Typography
				variant="h5"
				component="h1"
				fontWeight="bold"
				sx={{ textAlign: 'center', mt: 4, mb: 6, p: 4 }}
			>
				Upsss... The route does not exist. Please go back to the home page.
			</Typography>
			<Button
				variant="contained"
				sx={{ textDecoration: 'none', margin: '0 auto', display: 'block' }}
			>
				<Link style={{ textDecoration: 'none', color: '#fff' }} to="/">
					HOME
				</Link>
			</Button>
		</Box>
	);
};

export default NoMatch;
