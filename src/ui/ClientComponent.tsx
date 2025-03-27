"use client";

import * as React from "react";
import { useIsDark } from "@codegouvfr/react-dsfr/useIsDark";

export function ClientComponent() {
  // useIsDark requires "use client"
  const { isDark } = useIsDark();

  return (
    <>
        Is dark? {isDark ? "yes" : "no"}
    </>
  );
}
