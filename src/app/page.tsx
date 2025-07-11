//import { ClientComponent } from "#/ui/ClientComponent";
import { Alert } from "@codegouvfr/react-dsfr/Alert";
import { Tabs } from "@codegouvfr/react-dsfr/Tabs";
import { Summary } from "@codegouvfr/react-dsfr/Summary";
import { fr } from "@codegouvfr/react-dsfr";
import { ClientComponent } from "../ui/ClientComponent";
import { StartDsfrOnHydration } from "../dsfr-bootstrap";

export const dynamic = "force-dynamic"; // 🧠 disables SSG and SSR caching


export default function Page() {

    if (typeof window === "undefined") {
        // Only run this on the server at runtime (not build time)
        if (process.env.NODE_ENV === "production") {
            throw new Error("Server-side runtime error triggered only at runtime");
        }
    }

    return (
        <>
            <StartDsfrOnHydration />
            <a href="https://github.com/garronej/react-dsfr-next-appdir-demo" target="_blank" rel="noreferrer">Source code of this Next.js App Router demo setup</a>
            <br/>
            <br/>
            <Summary
                links={[
                    {
                        linkProps: {
                            href: '#'
                        },
                        text: 'Titre de l’ancre'
                    },
                    {
                        linkProps: {
                            href: '#'
                        },
                        text: 'Titre de l’ancre'
                    },
                    {
                        linkProps: {
                            href: '#'
                        },
                        text: 'Titre de l’ancre'
                    }
                ]}
            />
            <Alert
                className={fr.cx("fr-mt-7v")}
                closable
                description="Everything went well"
                severity="success"
                title="Message successfully sent"
            />
            <Tabs
                className={fr.cx("fr-mt-7v")}
                label="Name of the tabs system"
                tabs={[
                    {
                        content: <p>Content of tab1</p>,
                        iconId: 'fr-icon-add-line',
                        label: 'Tab 1'
                    },
                    {
                        content: <p>Content of tab2</p>,
                        iconId: 'fr-icon-ball-pen-fill',
                        label: 'Tab 2'
                    },
                    {
                        content: <p>Content of tab3</p>,
                        label: 'Tab 3'
                    }
                ]}
            />
            <ClientComponent />
        </>
    );

}
