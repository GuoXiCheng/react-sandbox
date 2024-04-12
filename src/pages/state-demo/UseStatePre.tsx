import { useState } from "react";

export default function UseStatePre() {
    const [theme, setTheme] = useState("dark");

    return (
        <>
            <div>当前主题: {theme}</div>
            <button
                onClick={() =>
                    setTheme((pre) => (pre === "dark" ? "light" : "dark"))
                }
            >
                切换主题
            </button>
        </>
    );
}
