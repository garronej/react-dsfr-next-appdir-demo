"use client";

import * as React from "react";
import { useIsDark } from "@codegouvfr/react-dsfr/useIsDark";
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
		</>
	);
}


