"use client";

import { HeaderQuickAccessItem } from "@codegouvfr/react-dsfr/Header";

export function LoginHeaderItem() {

    //NOTE: Here you can use hooks like useAuth() to display a different header item depending on the user authentication state

    return (
        <HeaderQuickAccessItem
            quickAccessItem={
                {
                    "iconId": "ri-account-box-line",
                    "text": "Se connecter",
                    "buttonProps": { 
                        "onClick": () => {
                            alert("TODO: implement login");
                        }
                    }
                }
            }
        />
    );
}