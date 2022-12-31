"use client";

import * as React from "react";
import { useIsDark } from "@codegouvfr/react-dsfr/useIsDark";
import Typography from "@mui/material/Typography";
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';




export default function Mui() {

	const { isDark, setIsDark } = useIsDark();

	return (
		<>
			<FormControlLabel control={<Switch
				checked={isDark}
				onChange={event => setIsDark(event.target.checked)}
				inputProps={{ 'aria-label': 'controlled' }}
			/>} label="Dark mode" />
			<Typography sx={{ mt: 2 }} variant="h4">
				This is a place for testing MUI components
			</Typography>
		</>
	);
}


