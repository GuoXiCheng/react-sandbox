import { useState } from "react";
import { ContextTheme } from "./ContextTheme";

function Button() {
    return (
        <ContextTheme.Consumer>
            {({ theme, toggleTheme }) => (
                <>
                    <p>{theme}</p>
                    <button onClick={toggleTheme}>
                        Toggle Theme Through Context
                    </button>
                </>
            )}
        </ContextTheme.Consumer>
    );
}

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

export default function ContextBasic() {
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
