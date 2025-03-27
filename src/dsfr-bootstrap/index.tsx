
"use client";
import { DsfrProvider as DsfrProvider_base, StartDsfrOnHydration } from "../next-appdir";
import { defaultColorScheme } from "./defaultColorScheme";
import Link from "next/link";

declare module "../next-appdir" {
  interface RegisterLink {
    Link: typeof Link;
  }
}

export function DsfrProvider(props: { lang: string | undefined; children: React.ReactNode; }) { 
  const { lang, children } = props;
  return (
    <DsfrProvider_base
      lang={lang}
      defaultColorScheme={defaultColorScheme}
      Link={Link}
    >
      {children}
    </DsfrProvider_base>
  );
}

export { StartDsfrOnHydration };


