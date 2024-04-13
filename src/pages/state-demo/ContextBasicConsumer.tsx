import { ContextTheme } from "./ContextTheme";

export default function Button() {
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
