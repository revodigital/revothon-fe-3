import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Box, Button, Grid, Typography } from '@mui/material';

const LangSelection = () => {
	const navigate = useNavigate()

	const handleClick = async () => {

		navigate('/scan-license')
	}

	return (
		<Box sx={{ textAlign: 'center', padding: 4 }}>
			{/* Titolo */}
			<Typography variant="h2" gutterBottom>
				Scegli la lingua
			</Typography>

			{/* Griglia dei pulsanti */}
			<Grid container spacing={3} justifyContent="center" sx={{ marginBottom: 4 }}>
				<Grid item xs={6}>
					<Button variant="contained" size="large">IT</Button>
				</Grid>
				<Grid item xs={6}>
					<Button variant="contained" size="large">EN</Button>
				</Grid>
				<Grid item xs={6}>
					<Button variant="contained" size="large">ES</Button>
				</Grid>
				<Grid item xs={6}>
					<Button variant="contained" size="large">DE</Button>
				</Grid>
			</Grid>

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

export default LangSelection
