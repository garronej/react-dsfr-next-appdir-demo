"use client";

import React, { useState, useEffect } from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const isBrowser = typeof window === "object" && typeof document === "object";

export default function Mui() {

	const [isSomething, setIsSomething] = useState(false);

	useEffect(
		() => {
			setIsSomething(true);
		},
		[]
	);

	useState(
		() => {


			if (isBrowser) {

				queueMicrotask(() => {
					console.log("micro task after client side render");
				});

			}
		}
	);

	if( isSomething ){
		console.log("successful hydration");
	}

	return (
		<>
			<FormControlLabel control={<Switch
				checked={isSomething}
				onChange={event => setIsSomething(event.target.checked)}
				inputProps={{ 'aria-label': 'controlled' }}
			/>} label="Something" />
		</>
	);
}


