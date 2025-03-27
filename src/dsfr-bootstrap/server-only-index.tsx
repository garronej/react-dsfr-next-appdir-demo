import {
  DsfrHead as DsfrHead_base,
  type DsfrHeadProps,
  getHtmlAttributes as getHtmlAttributes_base,
} from "../next-appdir/server-only-index";
import { defaultColorScheme } from "./defaultColorScheme";
import Link from "next/link";

export function getHtmlAttributes(params: { lang: string | undefined }) {
  const { lang } = params;

  return getHtmlAttributes_base({ defaultColorScheme, lang });
}

export function DsfrHead(props: Omit<DsfrHeadProps, "Link">) {
  return <DsfrHead_base Link={Link} {...props} />;
}
