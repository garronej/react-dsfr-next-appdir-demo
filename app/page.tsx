"use client";

import React, { useState, useEffect } from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function Mui() {

	const [isSomething, setIsSomething] = useState(false);

	useEffect(
		()=> {
			setIsSomething(true);
		},
		[]
	);


	return (
		<>
			<FormControlLabel control={<Switch
				checked={isSomething}
				onChange={event => setIsSomething(event.target.checked)}
				inputProps={{ 'aria-label': 'controlled' }}
			/>} label="Dark mode" />
		</>
	);
}


