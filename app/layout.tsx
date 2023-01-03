
import Script from "next/script";
import testJsUrl from "./test.min.js";

console.log({ testJsUrl });

export default function RootLayout({ children }: { children: React.ReactNode; }) {

	return (
		<html>
			<head>
				<Script src={testJsUrl}/>
			</head>
			<body>
				{children}
			</body>
		</html>
	);

}
