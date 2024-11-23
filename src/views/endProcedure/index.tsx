import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Box, Button, Grid, Typography } from '@mui/material';

const EndProcedure = () => {
	const navigate = useNavigate()

	const handleClick = async () => {

		navigate('/scan-license')
	}

	return (
		<Box sx={{ textAlign: 'center', padding: 4 }}>
			{/* Titolo */}
			<Typography variant="h2" gutterBottom>
				Complimenti!\n
				Hai completato correttamente la procedura.
			</Typography>

			{/* Pulsante Avanti */}
			<Button
				variant="contained"
				color="primary"
				size="large"
				onClick={handleClick}
				sx={{ width: '50%', fontSize: '1.2rem' }}
			>
				Avanti
			</Button>
		</Box>
	)
}

export default EndProcedure