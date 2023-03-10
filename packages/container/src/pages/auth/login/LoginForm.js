import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
// import useAuth from 'hooks/useAuth';
import AuthWrapper from './AuthWrapper';
import AuthLogin from './AuthLogin';

export default function LoginForm() {
	return (
		<AuthWrapper>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Stack
						direction='row'
						justifyContent='space-between'
						alignItems='baseline'
						sx={{ mb: { xs: -0.5, sm: 0.5 } }}
					>
						<Typography variant='h3'>Login</Typography>
						<Typography
							component={Link}
							// to={isLoggedIn ? '/auth/register' : '/register'}
							variant='body1'
							sx={{ textDecoration: 'none' }}
							color='primary'
						>
							Don&apos;t have an account?
						</Typography>
					</Stack>
				</Grid>
				<Grid item xs={12}>
					<AuthLogin />
				</Grid>
			</Grid>
		</AuthWrapper>
	);
}
