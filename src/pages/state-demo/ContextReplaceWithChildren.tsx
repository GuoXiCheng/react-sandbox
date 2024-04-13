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
            <button onClick={toggleTheme}>Toggle Theme Through Children</button>
        </>
    );
}

function Card({ children }: { children: React.ReactNode }) {
    const cardStyle = {
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    };

    return <div style={cardStyle}>{children}</div>;
}

export default function ContextReplaceWithChildren() {
    const [theme, setTheme] = useState("light");

    function toggleTheme() {
        setTheme(theme === "light" ? "dark" : "light");
    }

    return (
        <>
            <Card>
                <Button theme={theme} toggleTheme={toggleTheme} />
            </Card>
        </>
    );
}
