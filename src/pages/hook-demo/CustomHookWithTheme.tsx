import { useEffect, useState } from "react";

// 自定义 Hook：主题切换
function useTheme(defaultTheme = 'light') {
    const [theme, setTheme] = useState(() => {
        const storedTheme = window.localStorage.getItem('theme');
        return storedTheme || defaultTheme;
    });

    useEffect(() => {
        window.localStorage.setItem('theme', theme);
    }, [theme]);

    return { theme, setTheme };
}

export default function CustomHookWithTheme() {
    const {theme, setTheme} = useTheme();

    function toggleTheme() {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    }

    const currentTheme = {
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff'
    };

    return (
        <div style={currentTheme}>
            <p>当前主题是：{theme}</p>
            <button onClick={toggleTheme}>切换主题</button>
        </div>
    );
}