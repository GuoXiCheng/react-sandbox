import { useState } from "react";

function Button({
    theme,
    toggleTheme,
}: {
    theme: string;
    toggleTheme: () => void;
}) {
    return (
        <>
            <p>{theme}</p>
            <button onClick={toggleTheme}>Toggle Theme Through Props</button>
        </>
    );
}

function Card({
    theme,
    toggleTheme,
}: {
    theme: string;
    toggleTheme: () => void;
}) {
    const cardStyle = {
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    };

    return (
        <div style={cardStyle}>
            <Button theme={theme} toggleTheme={toggleTheme} />
        </div>
    );
}

export default function ContextReplaceWithProps() {
    const [theme, setTheme] = useState("light");

    function toggleTheme() {
        setTheme(theme === "light" ? "dark" : "light");
    }

    return (
        <>
            <Card theme={theme} toggleTheme={toggleTheme} />
        </>
    );
}
