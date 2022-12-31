import { NextAppDirEmotionCacheProvider } from "./NextAppDirEmotionCacheProvider";
import { Badge } from "./Badge";
import "@codegouvfr/react-dsfr/dsfr/dsfr.css";

export default function RootLayout({ children }: { children: React.ReactNode; }) {

	return (
		<html data-fr-theme="dark">
			<head></head>
			<body>
				<NextAppDirEmotionCacheProvider options={{ "key": "css" }}>
					{children}
					<Badge
						label="Label badge"
						severity="success"
					/>
				</NextAppDirEmotionCacheProvider>
			</body>
		</html>
	);
}
