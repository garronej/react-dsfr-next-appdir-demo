import { ClientComponent } from "../../ui/ClientComponent";
import { StartDsfrOnHydration } from "../../dsfr-bootstrap";

export default function Page() {
  return (
    <>
      <StartDsfrOnHydration />
      <ClientComponent />
    </>
  );
}
