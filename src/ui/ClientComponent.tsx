"use client";

import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useIsDark } from "@codegouvfr/react-dsfr/useIsDark";
import { fr } from "@codegouvfr/react-dsfr";

export function ClientComponent() {
  // useIsDark requires "use client"
  const { isDark } = useIsDark();

  return (
    <>
      <Stack spacing={2} direction="row" sx={{ mt: 7 }}>
        <p>
          This is a client component using MUI used within a server component
        </p>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <p
        style={{
          marginTop: fr.spacing("7v"),
        }}
      >
        Is dark? {isDark ? "yes" : "no"}
      </p>
    </>
  );
}
