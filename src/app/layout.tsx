import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import MuiDsfrThemeProvider from "@codegouvfr/react-dsfr/mui";
import { Header } from "@codegouvfr/react-dsfr/Header";
import { Footer } from "@codegouvfr/react-dsfr/Footer";
import { headerFooterDisplayItem } from "@codegouvfr/react-dsfr/Display";
import { fr } from "@codegouvfr/react-dsfr";
import { Navigation } from "./Navigation";
import { LoginHeaderItem } from "./LoginHeaderItem";
import {
	ConsentBannerAndConsentManagement,
	FooterConsentManagementItem,
	FooterPersonalDataPolicyItem
} from "../ui/consentManagement";
import { getHtmlAttributes, DsfrHead } from "../dsfr-bootstrap/server-only-index";
import { DsfrProvider } from "../dsfr-bootstrap";


export default function RootLayout({ children }: { children: React.JSX.Element; }) {

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
						"Marianne-Bold"
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
					flexDirection: "column"
				}}
			>
				<AppRouterCacheProvider>
					<DsfrProvider lang={lang} >
						<ConsentBannerAndConsentManagement />
						<MuiDsfrThemeProvider>
							<Header
								brandTop={<>INTITULE<br />OFFICIEL</>}
								serviceTitle="Nom du site / service"
								homeLinkProps={{
									href: "/",
									title: "Accueil - Nom de l’entité (ministère, secrétariat d‘état, gouvernement)"
								}}
								quickAccessItems={[
									headerFooterDisplayItem,
									{
										iconId: "ri-mail-line",
										linkProps: {
											href: "mailto:contact@code.gouv.fr",
										},
										text: "Contact us"
									},
									<LoginHeaderItem key={0} />
								]}
								navigation={<Navigation />}
							/>
							<div
								style={{
									flex: 1,
									margin: "auto",
									maxWidth: 1000,
									...fr.spacing("padding", {
										topBottom: "10v"
									})
								}}>
								{children}
							</div>
							<Footer
								accessibility="fully compliant"
								contentDescription={`
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                    eu fugiat nulla pariatur. 
                `}
								bottomItems={[
									headerFooterDisplayItem,
									<FooterConsentManagementItem key={0} />,
									<FooterPersonalDataPolicyItem key={1} />
								]}
							/>
						</MuiDsfrThemeProvider>
					</DsfrProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
