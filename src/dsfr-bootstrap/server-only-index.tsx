import {
  DsfrHeadBase,
  type DsfrHeadProps,
  createGetHtmlAttributes
} from "../next-appdir/server-only-index";
import { defaultColorScheme } from "./defaultColorScheme";
import Link from "next/link";

export const { getHtmlAttributes } = createGetHtmlAttributes({ defaultColorScheme });

export function DsfrHead(props: DsfrHeadProps) {
  return <DsfrHeadBase Link={Link} {...props} />;
}
