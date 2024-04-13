import { useReducer } from "react";
import { counterReducer } from "./CounterReducer";
import { CounterContext } from "./CounterContext";

export default function CounterProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [state, dispatch] = useReducer(counterReducer, {
        count: 0,
    });

    return (
        <CounterContext.Provider value={{ state, dispatch }}>
            {children}
        </CounterContext.Provider>
    );
}
