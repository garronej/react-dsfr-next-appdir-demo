"use client"; // Error boundaries must be Client Components

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import MuiDsfrThemeProvider from "@codegouvfr/react-dsfr/mui";
import {
  getHtmlAttributes,
  DsfrHead,
} from "../dsfr-bootstrap/server-only-index";
import { DsfrProvider } from "../dsfr-bootstrap";
import { Tabs } from "@codegouvfr/react-dsfr/Tabs";
import { fr } from "@codegouvfr/react-dsfr";
import { StartDsfrOnHydration } from "../dsfr-bootstrap";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const lang = undefined; // Can be "fr" or "en" ...

  return (
    <html {...getHtmlAttributes({ lang })}>
      <head>
        <title>Next 15 App Router Demo Setup</title>
        <DsfrHead
          preloadFonts={[
            //"Marianne-Light",
            //"Marianne-Light_Italic",
            "Marianne-Regular",
            //"Marianne-Regular_Italic",
            "Marianne-Medium",
            //"Marianne-Medium_Italic",
            "Marianne-Bold",
            //"Marianne-Bold_Italic",
            //"Spectral-Regular",
            //"Spectral-ExtraBold"
          ]}
        />
      </head>
      <body
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <AppRouterCacheProvider>
          <DsfrProvider lang={lang}>
            <MuiDsfrThemeProvider>
              <StartDsfrOnHydration />

              <h2>Something went wrong!</h2>
              <button onClick={() => reset()}>Try again</button>

              <Tabs
                className={fr.cx("fr-mt-7v")}
                label="Name of the tabs system"
                tabs={[
                  {
                    content: <p>Content of tab1</p>,
                    iconId: "fr-icon-add-line",
                    label: "Tab 1",
                  },
                  {
                    content: <p>Content of tab2</p>,
                    iconId: "fr-icon-ball-pen-fill",
                    label: "Tab 2",
                  },
                  {
                    content: <p>Content of tab3</p>,
                    label: "Tab 3",
                  },
                ]}
              />
            </MuiDsfrThemeProvider>
          </DsfrProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
