"use client";

import { HeaderQuickAccessItem } from "@codegouvfr/react-dsfr/Header";

/** NOTE: It's important to forward the id */
type Props = {
    id?: string;
};

export function LoginHeaderItem(props: Props) {

    const { id } = props;

    //NOTE: Here you can use hooks like useAuth() to display a different header item depending on the user authentication state

    return (
        <HeaderQuickAccessItem
            id={id}
            quickAccessItem={
                {
                    iconId: "ri-account-box-line",
                    text: "Se connecter",
                    buttonProps: {
                        onClick: () => {
                            alert("TODO: implement login");
                        }
                    }
                }
            }
        />
    );
}