"use client";

import React, { useState, useEffect } from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const isBrowser = typeof window === "object" && typeof document === "object";

console.log("evaluate app/page.tsx");

export default function Page() {

	const [isSuccessfullyHydrated, setIsSuccessfullyHydrated] = useState(false);

	useEffect(
		() => {
			setIsSuccessfullyHydrated(true);
		},
		[]
	);

	useState(
		() => {
			if (isBrowser) {

				console.log("rendering app/page.tsx");

				queueMicrotask(() => {
					console.log("micro task after rendering app/page.tsx");
				});

			}
		}
	);

	if (isSuccessfullyHydrated) {
		queueMicrotask(() => {
			console.log("micro task after successful hydration");
		});
	}

	return (
		<>
			<FormControlLabel control={<Switch
				checked={isSuccessfullyHydrated}
				onChange={event => setIsSuccessfullyHydrated(event.target.checked)}
				inputProps={{ 'aria-label': 'controlled' }}
			/>} label={`Hydrated (${isSuccessfullyHydrated ? "yes" : "not yet"})`} />
		</>
	);
}


