import { NextAppDirEmotionCacheProvider } from "tss-react/next";
import { DsfrHead } from "@codegouvfr/react-dsfr/next-appdir/DsfrHead";
import { getColorSchemeHtmlAttributes } from "@codegouvfr/react-dsfr/next-appdir/getColorSchemeHtmlAttributes";
import { defaultColorScheme } from "./defaultColorScheme";
import { Footer } from "@codegouvfr/react-dsfr/Footer";

export default function RootLayout({ children }: { children: JSX.Element; }) {

	return (
		<html {...getColorSchemeHtmlAttributes({ defaultColorScheme })} >
			<head>
				<title>Next 13 AppDir Demo DSFR setup</title>
				<DsfrHead
					defaultColorScheme={defaultColorScheme}
				/>
			</head>
			<body>
				<NextAppDirEmotionCacheProvider options={{ "key": "css" }}>
					{children}
					<Footer
						brandTop={<>INTITULE<br />OFFICIEL</>}
						accessibility="fully compliant"
						contentDescription={""}
						homeLinkProps={{ "href": "/", "title": "Accueil - Nom de l’entité (ministère, secrétariat d‘état, gouvernement)" }}
					/>
				</NextAppDirEmotionCacheProvider>
			</body>
		</html>
	);
}
