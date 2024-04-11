import { createContext } from "react";

export const UseContextTheme = createContext({
    theme: "light",
    setTheme: (_theme: string | ((theme: string) => any)) => {}
});