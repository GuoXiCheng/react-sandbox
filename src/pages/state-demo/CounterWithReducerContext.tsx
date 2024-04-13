import { useContext } from "react";
import CounterProvider from "./CounterProvider";
import { CounterContext } from "./CounterContext";

function Counter() {
    const { state, dispatch } = useContext(CounterContext);

    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        </div>
    );
}

export default function CounterWithReducerContext() {
    return (
        <CounterProvider>
            <Counter />
        </CounterProvider>
    );
}
