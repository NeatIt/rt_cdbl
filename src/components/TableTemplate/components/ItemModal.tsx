import { useState, FC } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// Import types
import { TableItemData } from 'types/table';

const ItemModal: FC<TableItemData> = ({
	id,
	name,
	year,
	color,
	pantone_value
}) => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<>
			<Button variant="contained" onClick={handleOpen}>
				Open modal
			</Button>
			<Modal
				keepMounted
				open={open}
				onClose={handleClose}
				aria-labelledby="keep-mounted-modal-title"
			>
				<Box
					sx={{
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						width: 400,
						bgcolor: 'background.paper',
						p: 4,
						display: 'flex',
						flexDirection: 'column',
						border: `8px solid ${color}`
					}}
				>
					<Typography id="keep-mounted-modal-title" variant="h6" component="h2">
						Product name: {name}
					</Typography>
					<Typography sx={{ mt: 2 }}>Id: {id}</Typography>
					<Typography sx={{ mt: 2 }}>Year: {year}</Typography>
					<Typography sx={{ mt: 2 }}>Color: {color}</Typography>
					<Typography sx={{ mt: 2 }}>Pantone value: {pantone_value}</Typography>

					<Button
						onClick={handleClose}
						variant="contained"
						sx={{ mt: 2, width: '120px', alignSelf: 'flex-end' }}
					>
						Close
					</Button>
				</Box>
			</Modal>
		</>
	);
};

export default ItemModal;
