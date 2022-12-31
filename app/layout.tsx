import { NextAppDirEmotionCacheProvider } from "tss-react/next";
import { DsfrHead } from "@codegouvfr/react-dsfr/next-appdir/DsfrHead";
import { DsfrProvider } from "@codegouvfr/react-dsfr/next-appdir/DsfrProvider";
import { getColorSchemeHtmlAttributes } from "@codegouvfr/react-dsfr/next-appdir/getColorSchemeHtmlAttributes";
import { StartDsfr } from "./StartDsfr";
import { defaultColorScheme } from "./defaultColorScheme";
import { MuiDsfrThemeProvider } from "@codegouvfr/react-dsfr/mui";
import { Footer } from "@codegouvfr/react-dsfr/Footer";
import { headerFooterDisplayItem } from "@codegouvfr/react-dsfr/Display";

const brandTop = <>INTITULE<br />OFFICIEL</>;

const homeLinkPops = { "href": "/", "title": "Accueil - Nom de l’entité (ministère, secrétariat d‘état, gouvernement)" };

export default function RootLayout({ children }: { children: JSX.Element; }) {

	return (
		<html {...getColorSchemeHtmlAttributes({ defaultColorScheme })} >
			<head>
				<title>Next 13 AppDir Demo DSFR setup</title>
				<StartDsfr />
				<DsfrHead
					defaultColorScheme={defaultColorScheme}
				/>
			</head>
			<body>
				<DsfrProvider defaultColorScheme={defaultColorScheme}>
					<NextAppDirEmotionCacheProvider options={{ "key": "css" }}>
						<MuiDsfrThemeProvider>
							{children}
							<Footer
								brandTop={brandTop}
								accessibility="fully compliant"
								contentDescription={`
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                    eu fugiat nulla pariatur. 
                `}
								homeLinkProps={homeLinkPops}
								bottomItems={[headerFooterDisplayItem]}
							/>
						</MuiDsfrThemeProvider>
					</NextAppDirEmotionCacheProvider>
				</DsfrProvider>
			</body>
		</html>
	);
}
