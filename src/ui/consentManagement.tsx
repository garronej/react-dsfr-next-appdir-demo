"use client";

import { createConsentManagement } from "@codegouvfr/react-dsfr/consentManagement";
//import { startEulerianAnalytics } from "@codegouvfr/react-dsfr/eulerianAnalytics";

// We do not own the react-dsfr.fr domain anymore (official domain should be .gouv.fr)
// so we disable Eulerian Analytics because I don't want to set it up again on the vercel domain.
/*
const prEulerianApi = startEulerianAnalytics({
    "domain": "zpzs.next-demo.react-dsfr.fr",
    "site": {
        "environment": process.env.NODE_ENV === "development" ? "development" : "production",
        "entity": "Direction interministeriel du numérique"
    }
});
*/

export const {
  ConsentBannerAndConsentManagement,
  FooterConsentManagementItem,
  FooterPersonalDataPolicyItem,
  useConsent,
} = createConsentManagement({
  finalityDescription: (/*{ lang }*/) => ({
    eulerianAnalytics: {
      title: "Eulerian Analytics",
      description: [
        "En cliquant sur 'Accepter', vous consentez à l'utilisation des cookies pour nous",
        "aider à améliorer notre site web en collectant et en rapportant des informations",
        "sur votre utilisation grâce à Eulerian Analytics. Si vous n'êtes pas d'accord, veuillez",
        "cliquer sur 'Refuser'. Votre expérience de navigation ne sera pas affectée.",
      ].join(" "),
    },
  }),
  personalDataPolicyLinkProps: {
    href: "/politique-de-confidentialite",
  },
  consentCallback: async (/*{ finalityConsent }*/) => {
    /*
        const eulerian = await prEulerianApi;

        if (finalityConsent.eulerianAnalytics) {
            console.log("Enabling eulerian analytics");
            eulerian.enable();
        } else {
            console.log("Disabling eulerian analytics");
            eulerian.disable();
        }
        */
  },
});
