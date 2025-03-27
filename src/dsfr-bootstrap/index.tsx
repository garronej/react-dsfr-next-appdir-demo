"use client";
import { DsfrProviderBase, StartDsfrOnHydration } from "../next-appdir";
import { defaultColorScheme } from "./defaultColorScheme";
import Link from "next/link";

declare module "../next-appdir" {
  interface RegisterLink {
    Link: typeof Link;
  }
}

export function DsfrProvider(props: {
  lang: string | undefined;
  children: React.ReactNode;
}) {
  const { lang, children } = props;
  return (
    <DsfrProviderBase
      lang={lang}
      defaultColorScheme={defaultColorScheme}
      Link={Link}
    >
      {children}
    </DsfrProviderBase>
  );
}

export { StartDsfrOnHydration };
