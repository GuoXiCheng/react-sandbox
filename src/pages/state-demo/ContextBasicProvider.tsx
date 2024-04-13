import { useState } from "react";
import { ContextTheme } from "./ContextTheme";
import Button from "./ContextBasicConsumer";

function Card() {
    const cardStyle = {
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    };

    return (
        <div style={cardStyle}>
            <Button />
        </div>
    );
}

export default function ContextBasicProvider() {
    const [theme, setTheme] = useState("light");

    function toggleTheme() {
        setTheme(theme === "light" ? "dark" : "light");
    }

    return (
        <ContextTheme.Provider value={{ theme, toggleTheme }}>
            <Card />
        </ContextTheme.Provider>
    );
}
