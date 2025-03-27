"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-function-type */

import React, { useMemo, useEffect } from "react";
import type { ReactNode } from "react";
import { isBrowser } from "@codegouvfr/react-dsfr/tools/isBrowser";
import { SsrIsDarkProvider } from "@codegouvfr/react-dsfr/useIsDark/server";
import type { DefaultColorScheme } from "./zz_internal/defaultColorScheme";
import { setUseLang } from "@codegouvfr/react-dsfr/i18n";
import { setLink } from "@codegouvfr/react-dsfr/link";
import { start } from "@codegouvfr/react-dsfr/start";

export type DsfrProviderProps = {
  children: ReactNode;
  lang: string | undefined;
  Link: Function;

  defaultColorScheme: DefaultColorScheme;
  /** Default: false */
  verbose?: boolean;
  /**
   * When true, the nonce of the script tag will be checked, fetched from {@link DsfrHead} component and injected in react-dsfr scripts.
   *
   * @see https://developer.mozilla.org/fr/docs/Web/HTML/Global_attributes/nonce
   * @default false
   */
  doCheckNonce?: boolean;
  /**
   * Enable Trusted Types with a custom policy name.
   *
   * Don't forget to also add the policy name in {@link DsfrHead} component.
   *
   * `<trustedTypesPolicyName>` and `<trustedTypesPolicyName>-asap` should be set in your Content-Security-Policy header.
   *
   * For example:
   * ```txt
   * With a policy name of "react-dsfr":
   * Content-Security-Policy:
   *  require-trusted-types-for 'script';
   *  trusted-types react-dsfr react-dsfr-asap nextjs nextjs#bundler;
   * ```
   *
   * @see https://developer.mozilla.org/fr/docs/Web/HTTP/Headers/Content-Security-Policy/trusted-types
   * @see {@link DEFAULT_TRUSTED_TYPES_POLICY_NAME}
   * @default "react-dsfr"
   */
  trustedTypesPolicyName?: string;
};

export function DsfrProvider(props: DsfrProviderProps) {
  const { children, lang, Link, defaultColorScheme, verbose = false, doCheckNonce =false, trustedTypesPolicyName = "react-dsfr" } = props;

  /*
    useEffect(() => {
        dsfrEffect();
    }, []);
    */

  useMemo(() => {
    if (!isBrowser) {
      return;
    }

    start({
        defaultColorScheme,
        verbose,
        doCheckNonce,
        trustedTypesPolicyName,
        "nextParams": {
            "doPersistDarkModePreferenceWithCookie": false,
            "registerEffectAction": action => {
                if (isAfterFirstEffect) {
                    action();
                } else {
                    actions.push(action);
                }
            }
        }
    });

  }, []);

  useMemo(() => {
    if (lang === undefined) {
      return;
    }
    setUseLang({ useLang: () => lang });
  }, [lang]);

  useMemo(() => {
    setLink({ Link: Link as any });
  }, [Link]);

  if (isBrowser) {
    return <>{children}</>;
  }

  const isDark = defaultColorScheme === "dark" ? true : false;

  return <SsrIsDarkProvider value={isDark}>{children}</SsrIsDarkProvider>;
}

let isAfterFirstEffect = false;
const actions: (() => void)[] = [];

function dsfrEffect(): void {
    if (isAfterFirstEffect) {
        return;
    }
    isAfterFirstEffect = true;
    actions.forEach(action => action());
}

export function StartDsfrOnHydration(){

    useEffect(() => {
        dsfrEffect();
    }, []);

    return null;

}

