"use client";

import { useIsDark } from "@codegouvfr/react-dsfr/useIsDark";
import { Button } from "@codegouvfr/react-dsfr/Button";



export function DarkModeSwitch(){

    const { isDark, setIsDark } = useIsDark();

    return (
        <Button
            onClick={()=> setIsDark(!isDark)}
        >{isDark ? "Set to light mode" : "Set to dark mode"}</Button>
    );



}