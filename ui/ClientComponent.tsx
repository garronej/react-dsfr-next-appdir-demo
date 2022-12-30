"use client";

import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useIsDark } from "@codegouvfr/react-dsfr/useIsDark";
import { useStyles } from "tss-react/dsfr";
import { fr } from "@codegouvfr/react-dsfr";

export function ClientComponent() {

  const { isDark } = useIsDark();

  const { css } = useStyles();

  return (
    <>
      <Stack spacing={2} direction="row" sx={{ mt: 7 }}>
        <p>This is a client component using MUI used within a server component</p>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <p
      className={css({
        marginTop: fr.spacing("7v")
      })}
      >Is dark? {isDark ? "yes" : "no"}</p>
    </>
  );
}