import { useContext, useState } from "react";
import { UseContextTheme } from "./UseContextTheme";

function ButtonComponent({ children }: { children: React.ReactNode }) {
    const { theme, setTheme } = useContext(UseContextTheme);

    const currentTheme = {
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff"
    };

    return (
        <div style={currentTheme}>
            <p>当前主题是：{theme}</p>
            <button onClick={
                () => setTheme(pre => pre === "light" ? "dark" : "light")
            }>
                {children}
            </button>
        </div>
    );
}

function FormComponent() {
    return <ButtonComponent>切换主题</ButtonComponent>;
}

export default function UseContextBasic() {
    const [theme, setTheme] = useState("light");
    return (
        <UseContextTheme.Provider value={{ theme, setTheme }}>
            <FormComponent />
        </UseContextTheme.Provider>
    );
}