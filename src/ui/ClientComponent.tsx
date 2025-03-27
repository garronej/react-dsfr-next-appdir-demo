"use client";

import * as React from "react";
import { useIsDark } from "@codegouvfr/react-dsfr/useIsDark";

export function ClientComponent() {
  // @ts-expect-error: xx
  const { isDark } = useIsDark("!!!!!!!!!!!!!!!!!!");

  console.log("====================> isDark", isDark);

  return (
    <>
        Is dark? {isDark ? "yes" : "no"}
    </>
  );
}
