/* eslint-disable @typescript-eslint/no-empty-object-type */
import { data_fr_scheme, data_fr_theme } from "@codegouvfr/react-dsfr/useIsDark/constants";
import type { ColorScheme } from "@codegouvfr/react-dsfr/useIsDark";
import {
    type DefaultColorScheme,
    setDefaultColorSchemeServerSide
} from "./zz_internal/defaultColorScheme";
import { setUseLang } from "@codegouvfr/react-dsfr/i18n";

const suppressHydrationWarning = true;

export function getHtmlAttributes(params: {
    defaultColorScheme: DefaultColorScheme;
    lang: string | undefined;
}): { suppressHydrationWarning: true; lang?: string } & (
    | Record<typeof data_fr_scheme | typeof data_fr_theme, ColorScheme>
    | {}
) {
    const { defaultColorScheme, lang } = params;

    setDefaultColorSchemeServerSide({ defaultColorScheme });

    if (lang !== undefined) {
        setUseLang({ "useLang": () => lang });
    }

    if (defaultColorScheme === "system") {
        return {
            lang,
            suppressHydrationWarning
        };
    }

    return {
        lang,
        suppressHydrationWarning,
        [data_fr_scheme]: defaultColorScheme,
        [data_fr_theme]: defaultColorScheme
    };
}
